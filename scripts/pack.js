import { createWriteStream } from "fs";
import { mkdir, readdir, stat } from "fs/promises";
import { join, relative } from "path";
import { createGzip } from "zlib";

const ROOT = new URL("..", import.meta.url).pathname;
const PACKED = join(ROOT, "packed");

async function collectFiles(dir, prefix = "") {
  const entries = await readdir(dir);
  const files = [];
  for (const entry of entries) {
    const fullPath = join(dir, entry);
    const relPath = join(prefix, entry);
    const s = await stat(fullPath);
    if (s.isDirectory()) {
      if (entry === "packed" || entry === "node_modules" || entry === ".git") continue;
      files.push(...(await collectFiles(fullPath, relPath)));
    } else {
      files.push(relPath);
    }
  }
  return files;
}

async function pack() {
  const manifest = JSON.parse(
    await import("fs/promises").then((fs) => fs.readFile(join(ROOT, "manifest.json"), "utf-8"))
  );
  const version = manifest.version;
  const archiveName = `clipboard-note-box-v${version}.zip`;

  await mkdir(PACKED, { recursive: true });

  const files = await collectFiles(ROOT);
  console.log(`Packing ${files.length} files...`);

  // Use native zip via child process for simplicity
  const { execSync } = await import("child_process");
  const isWin = process.platform === "win32";

  if (isWin) {
    execSync(
      `powershell Compress-Archive -Path background.js,popup.html,popup.js,style.css,manifest.json,icons -DestinationPath "packed\\${archiveName}" -Force`,
      { cwd: ROOT, stdio: "inherit" }
    );
  } else {
    execSync(
      `zip -r "${join(PACKED, archiveName)}" background.js popup.html popup.js style.css manifest.json icons/`,
      { cwd: ROOT, stdio: "inherit" }
    );
  }

  console.log(`Created: packed/${archiveName}`);
}

pack().catch(console.error);
