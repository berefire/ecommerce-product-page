import "@styles/main.css";
import { initializeMenu } from "./features/menu/index.js";
import { initializeGallery } from "./features/gallery/index.js";
import { initializeLightbox } from "./features/lightbox/index.js";
import { initializeLightboxGallery } from "./features/lightbox-gallery/index.js";

const galleryController = initializeGallery();
const lightboxGalleryController = initializeLightboxGallery();

initializeMenu();
initializeLightbox({
    galleryController,
    lightboxGalleryController,
});