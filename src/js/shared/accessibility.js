export function moveFocus(element){
    element?.focus();
}

export function prefersReducedMotion(){
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function announce(element, message){
    element.textContent = "";

    requestAnimationFrame(() => {
        element.textContent = message;
    });
}