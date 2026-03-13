export const initModal = () => {
  const refs = {
    openBtn: document.getElementById("openModal"),
    closeOverlay: document.getElementById("closeModal"),
    closeBtn: document.getElementById("closeModalBtn"),
    modal: document.getElementById("modal"),
    textarea: document.getElementById("codeInput"),
    preview: document.getElementById("codePreview"),
    runBtn: document.querySelector(".modal__cta"),
  };

  const toggleModal = () => {
    refs.modal.classList.toggle("modal--open");

    if (refs.modal.classList.contains("modal--open")) {
      refs.textarea.focus();
    }
  };

  const updatePreview = () => {
    const code = refs.textarea.value || "<h1>Hello world!</h1>";

    const temp = document.createElement("div");
    temp.innerHTML = code;

    refs.preview.textContent = temp.textContent;
  };

  const runCode = () => {
    updatePreview();
  };

  refs.openBtn?.addEventListener("click", toggleModal);
  refs.closeOverlay?.addEventListener("click", toggleModal);
  refs.closeBtn?.addEventListener("click", toggleModal);
  refs.runBtn?.addEventListener("click", runCode);

  refs.textarea?.addEventListener("input", updatePreview);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") toggleModal();
  });

  refs.textarea.value = "<h1>Hello world!</h1>";
  updatePreview();
};
