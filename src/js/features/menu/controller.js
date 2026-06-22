import { isDesktop } from "@js/shared/media.js";
import { prefersReducedMotion } from "@js/shared/accessibility.js";
import { lockScroll, unlockScroll } from "@js/shared/scroll.js";

export function createMenuController({
  menu,
  menuContent,
  menuButton,
  firstLink,
}) {
  let isClosing = false;

  function setExpanded(expanded) {
    menuButton.setAttribute(
      "aria-expanded",
      String(expanded)
    );
  }

  function focusFirstLink() {
    firstLink.focus();
  }

  function restoreFocus() {
    menuButton.focus();
  }

  function finishClose() {
    if (!menu.open) {
      return;
    }

    menu.close();
    restoreFocus();
    isClosing = false;
  }

  function openMenu() {
    if (isDesktop()) {
      return;
    }

    if (menu.open || isClosing) {
      return;
    }

    menu.showModal();
    
    requestAnimationFrame(() => {
      menu.getBoundingClientRect();
      menu.classList.add("animate");
    });

    setExpanded(true);

    lockScroll();

    setTimeout(() => {
      if (menu.open) {
        focusFirstLink();
      }
    }, 350);
  }

  function closeMenu() {
    if (!menu.open || isClosing) {
      return;
    }

    isClosing = true;

    setExpanded(false);

    unlockScroll();

    menu.classList.remove("animate");

    if (prefersReducedMotion()) {
      finishClose();
      return;
    }

    const handleTransitionEnd = (event) => {
      if (event.target !== menuContent) {
        return;
      }

      menuContent.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );

      finishClose();
    };

    menuContent.addEventListener(
      "transitionend",
      handleTransitionEnd
    );
  }

  function toggleMenu() {
    menu.open
      ? closeMenu()
      : openMenu();
  }

  return {
    toggleMenu,
    openMenu,
    closeMenu,
  };
}