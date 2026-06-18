export function createCartController({ cartView, cartDialog, cartButton }) {
  let item = null;

  function addItem(product) {
    if (!item) {
      item = { ...product };
    } else {
      item.quantity += product.quantity;
    }

    cartView.render(item);
  }

  function clearCart() {
    item = null;
    cartView.render(null);
  }

  function getItem() {
    return item;
  }

  function openCart() {
    cartView.render(item);

    if (!cartDialog.open) {
      cartDialog.showModal();
      cartButton.setAttribute("aria-expanded", "true");
    }
  }

  function closeCart() {
    if (!cartDialog.open) {
      return;
    }

    cartDialog.close();
    cartButton.setAttribute("aria-expanded", "false");
  }

  return {
    addItem,
    clearCart,
    getItem,
    openCart,
    closeCart,
  };
}
