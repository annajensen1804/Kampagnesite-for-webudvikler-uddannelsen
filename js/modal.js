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
    const lines = refs.textarea.value.split("\n");
    let formattedCode = "";

    lines.forEach((line) => {
      const trimmed = line.trim();
      formattedCode += trimmed ? trimmed + "\n" : "\n";
    });

    refs.codeEx.textContent = formattedCode.trim();
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
