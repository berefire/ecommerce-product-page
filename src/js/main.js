import "@styles/main.css";

import { initializeAvatar } from "@js/features/avatar/index.js";

import { initializeMenu } from "@js/features/menu/index.js";

import { initializeGallery } from "@js/features/gallery/index.js";
import { initializeLightbox } from "@js/features/lightbox/index.js";
import { initializeLightboxGallery } from "@js/features/lightbox-gallery/index.js";

import { initializeQuantityBox } from "@js/features/quantity-box/index.js";

import { initializeCart } from "@js/features/cart/index.js";

import { initializeAddToCart } from "@js/features/add-to-cart/index.js";

const galleryController = initializeGallery();
const lightboxGalleryController = initializeLightboxGallery();
const quantityController = initializeQuantityBox();
const cartController = initializeCart();

initializeAvatar();
initializeMenu();
initializeLightbox({
    galleryController,
    lightboxGalleryController,
});
initializeAddToCart({
    quantityController,
    cartController,
});