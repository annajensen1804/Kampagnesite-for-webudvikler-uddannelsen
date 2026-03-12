export const initModal = () => {
  const refs = {
    openBtn: document.getElementById("openModal"),
    closeOverlay: document.getElementById("closeModal"),
    closeBtn: document.getElementById("closeModalBtn"),
    modal: document.getElementById("modal"),
    textarea: document.querySelector(".modal__textarea"),
    runBtn: document.querySelector(".modal__cta"),
    codeEx: document.querySelector(".modal__code-example"),
  };

  const toggleModal = () => {
    refs.modal.classList.toggle("modal--open");
    if (refs.modal.classList.contains("modal--open")) {
      refs.textarea?.focus();
    }
  };

  const runCode = () => {
    let code = refs.textarea.value.trim();

    // ✅ АВТОДОБАВЛЕННЯ <> для звичайного тексту
    if (!code.includes("<")) {
      // Якщо немає тегів – обгортаємо кожен рядок
      const lines = code.split("\n");
      let htmlLines = "";

      lines.forEach((line) => {
        const trimmed = line.trim();
        if (trimmed) {
          htmlLines += `<h1>${trimmed}</h1>\n`;
        } else {
          htmlLines += "\n";
        }
      });
      code = htmlLines.trim();
    }

    // ✅ HTML escape для відображення тегів як тексту
    const escapedHtml = code
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");

    refs.codeEx.innerHTML = escapedHtml; // ✅ innerHTML для HTML!

    refs.textarea.style.background = "#00ff5f20";
    setTimeout(() => {
      refs.textarea.style.background = "#1a1a1a";
    }, 300);
  };

  // EVENTS
  refs.openBtn?.addEventListener("click", toggleModal);
  refs.closeOverlay?.addEventListener("click", toggleModal);
  refs.closeBtn?.addEventListener("click", toggleModal);
  refs.runBtn?.addEventListener("click", runCode);

  refs.textarea?.addEventListener("input", (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";
  });

  refs.textarea?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      e.preventDefault();
      runCode();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleModal();
  });
};
