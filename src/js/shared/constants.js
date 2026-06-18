export const BREAKPOINTS = {
    desktop: "(min-width: 64em)"
};

export const PRODUCT_IMAGES = [
    {
        full: "./src/assets/images/image-product-1.jpg",
        thumbnail: "./src/assets/images/image-product-1-thumbnail.jpg",
        alt: "Fall Limited Edition Sneakers, front angled view",
    },
    {
        full: "./src/assets/images/image-product-2.jpg",
        thumbnail: "./src/assets/images/image-product-2-thumbnail.jpg",
        alt: "Fall Limited Edition Sneakers, side view",
    },
    {
        full: "./src/assets/images/image-product-3.jpg",
        thumbnail: "./src/assets/images/image-product-3-thumbnail.jpg",
        alt: "One of the Fall Limited Edition Sneakers, displayed on right side",
    },
    {
        full: "./src/assets/images/image-product-4.jpg",
        thumbnail: "./src/assets/images/image-product-4-thumbnail.jpg",
        alt: "One of the Fall Limited Edition Sneakers, displayed on left side",
    }
];

export const REQUIRED_ELEMENTS = [
    // Mobile menu
    "mobileNavButton",
    "mobileCloseButton",
    "mobileNav",
    "mobileNavContent",
    "mobileNavLinks",

    // Gallery
    "productImage",
    "galleryPreviousButton",
    "galleryNextButton",
    "thumbnailButtons",
    "galleryAnnouncer",

    // Lightbox
    "lightbox",
    "lightboxCloseButton",
    "productImageTrigger",

    // Lightbox Gallery
    "lightboxImage",
    "lightboxPreviousButton",
    "lightboxNextButton",
    "lightboxThumbnailButtons",

    // Quantity Box
    "quantityInput",
    "quantityIncreaseButton",
    "quantityDecreaseButton",

    // Add To Cart
    "addToCartButton",

    // Cart
    "cartButton",
    "cartBadge",
    "cartDialog",
    "cartCloseButton",
    "cartEmptyMessage",
    "cartContent",
    "cartProductImage",
    "cartProductTitle",
    "cartProductPrice",
    "cartProuctQuantity",
    "cartProductTotal",
    "cartDeleteButton",
    "cartCheckoutButton",
]

export const MAX_QUANTITY = 99;