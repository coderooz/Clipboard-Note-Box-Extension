document.getElementById("copy-btn").addEventListener("click", () => {
    const text = document.getElementById("clipboard-content").value;
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
  });
  
  document.getElementById("save-txt-btn").addEventListener("click", () => {
    const text = document.getElementById("note-content").value;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "note.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  
  document.getElementById("save-pdf-btn").addEventListener("click", () => {
    const text = document.getElementById("note-content").value;
    const doc = new jsPDF();
    doc.text(text, 10, 10);
    doc.save("note.pdf");
  });
  
  document.getElementById("save-doc-btn").addEventListener("click", () => {
    const text = document.getElementById("note-content").value;
    const blob = new Blob([text], { type: "application/msword" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "note.doc";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  });
  