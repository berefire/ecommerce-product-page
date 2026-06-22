import { BREAKPOINTS } from './constants.js';

const desktopMediaQuery = window.matchMedia(BREAKPOINTS.desktop);

export function isDesktop() {
    return desktopMediaQuery.matches;
}

export function onDesktopChange(callback){
    desktopMediaQuery.addEventListener("change", callback);
}
