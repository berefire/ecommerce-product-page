import "@styles/main.css";
import { initializeMenu } from "./features/menu/index.js";

import { initializeGallery } from "./features/gallery/index.js";
import { initializeLightbox } from "./features/lightbox/index.js";
import { initializeLightboxGallery } from "./features/lightbox-gallery/index.js";

import { initializeQuantityBox } from "./features/quantity-box/index.js";

import { initializeCart } from "./features/cart/index.js";

import { initializeAddToCart } from "./features/add-to-cart/index.js";

const galleryController = initializeGallery();
const lightboxGalleryController = initializeLightboxGallery();
const quantityController = initializeQuantityBox();
const cartController = initializeCart();

initializeMenu();
initializeLightbox({
    galleryController,
    lightboxGalleryController,
});
initializeAddToCart({
    quantityController,
    cartController,
});