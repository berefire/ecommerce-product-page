function render(index) {
    const image = PRODUCT_IMAGES[index];

    imageElement.src = image.full;
    imageElement.alt = image.alt;

    if (announcerElement) {
      announcerElement.textContent = `Image ${index + 1} of ${PRODUCT_IMAGES.length}`;
    }

    if (thumbnailButtons?.length) {
      thumbnailButtons.forEach((button, buttonIndex) => {
        button.setAttribute("aria-pressed", String(index === buttonIndex));
      });
    }
  }