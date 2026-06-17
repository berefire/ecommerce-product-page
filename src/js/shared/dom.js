import { REQUIRED_ELEMENTS } from '../shared/constants.js';

const SELECTORS = {
    // Mobile menu
    mobileNavButton: '.mobile-nav-button',
    mobileCloseButton: '#close-nav',
    mobileNav: '#mobile-nav',
    mobileNavContent: '.mobile-nav-content',
    mobileNavLinks: '.mobile-nav .nav-link',

    // Gallery
    productImage: '.product-image',
    galleryPreviousButton: '.gallery-button--previous',
    galleryNextButton: '.gallery-button--next',
    thumbnailButtons: '.thumbnail-button',
    galleryAnnouncer: '#gallery-announcer',

    // Lightbox
    lightbox: '.lightbox',
    lightboxCloseButton: '.lightbox-close-button',
    productImageTrigger: '.product-image-trigger',

    // Lightbox Gallery
    lightboxImage: '.lightbox-image',
    lightboxPreviousButton: '.lightbox-gallery-button--previous',
    lightboxNextButton: '.lightbox-gallery-button--next',
    lightboxThumbnailButtons: '.lightbox-thumbnail-button',
}

function isCollection(value){
    return (value instanceof NodeList || value instanceof HTMLCollection);
}

function isValidElement(value){
    if ( value instanceof Element){
        return true;
    }

    if (isCollection(value)){
        return value.length > 0;
    }

    return false;
}

/**
 * Returns the first element of a collection.
 * Returns null when the collection is empty.
 */
export function getFirstElement(collection){
    if (!isCollection(collection)){
        throw new Error(`[DOM] getFirstElement expects a NodeList or HTMLCollection`);
    }

    return collection[0] ?? null;
}

export function addSafeEventListener(element, event, handler, context = "unknown") {
    if (!isValidElement(element)){
        throw new Error(`[${context}] Invalid element passed to addSafeEventListener: ${element}`);
    }

    if (isCollection(element)){
        Array.from(element).forEach( el => el.addEventListener(event, handler));
        return;
    }

    element.addEventListener(event, handler);
}

function initDOMElements(){
    const DOM = {
        // Mobile menu
        mobileNavButton: document.querySelector(SELECTORS.mobileNavButton),
        mobileCloseButton: document.querySelector(SELECTORS.mobileCloseButton),
        mobileNav: document.querySelector(SELECTORS.mobileNav),
        mobileNavContent: document.querySelector(SELECTORS.mobileNavContent),
        mobileNavLinks: document.querySelectorAll(SELECTORS.mobileNavLinks),

        // Gallery
        productImage: document.querySelector(SELECTORS.productImage),
        galleryPreviousButton: document.querySelector(SELECTORS.galleryPreviousButton),
        galleryNextButton: document.querySelector(SELECTORS.galleryNextButton),
        thumbnailButtons: document.querySelectorAll(SELECTORS.thumbnailButtons),
        galleryAnnouncer: document.querySelector(SELECTORS.galleryAnnouncer),

        // Lightbox
        lightbox: document.querySelector(SELECTORS.lightbox),
        lightboxCloseButton: document.querySelector(SELECTORS.lightboxCloseButton),
        productImageTrigger: document.querySelector(SELECTORS.productImageTrigger),

        // Lightbox Gallery
        lightboxImage: document.querySelector(SELECTORS.lightboxImage),
        lightboxPreviousButton: document.querySelector(SELECTORS.lightboxPreviousButton),
        lightboxNextButton: document.querySelector(SELECTORS.lightboxNextButton),
        lightboxThumbnailButtons: document.querySelectorAll(SELECTORS.lightboxThumbnailButtons),
    };

    Object.entries(DOM).forEach(([key, element]) => {
        const isRequired = REQUIRED_ELEMENTS.includes(key);

        if( isRequired && !isValidElement(element)) {
            throw new Error(`[DOM] Missing required element: ${key}`);
        }
    });

    return Object.freeze(DOM);
}

export const DOM = initDOMElements();

