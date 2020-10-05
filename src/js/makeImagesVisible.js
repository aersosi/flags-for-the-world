function makeImagesVisible() {
  setTimeout(() => {
    document.querySelectorAll(".img-cont:not(.show)").forEach((item, i) => {
      setTimeout(() => {
        item.classList.add("show");
      }, i * 100);
    });
  }, 800);
}
