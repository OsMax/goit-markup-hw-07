(() => {
  const refs = {
    openMenuBtn: document.querySelector("[js-open-menu]"),
    closeMenuBtn: document.querySelector("[js-close-menu]"),
    modal: document.querySelector("[js-menu-container]"),
  };

  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-close");
  }
})();