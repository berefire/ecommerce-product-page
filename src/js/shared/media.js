import { BREAKPOINTS } from './constants.js';

const desktopMediaQuery = window.matchMedia(BREAKPOINTS.desktop);

export function isDesktop() {
    return desktopMediaQuery.matches;
}

export function onDesktopChange(callback){
    desktopMediaQuery.addEventListener("change", callback);
}

export function prefersReducedMotion(){
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}