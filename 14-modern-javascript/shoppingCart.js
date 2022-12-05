// Exporting module
console.log('Exporting module');

const shoppingCost = 10;
export const cart = [];

export const addToCart = function(product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
}

// export const totalPrice = 237;
// export const totalQuantity = 23;

// export { totalPrice, totalQuantity }

// La importación por defecto se usa cuando solo se va a exportar UN SOLO valor
export default function(product, quantity) {
  cart.push({product, quantity});
  console.log(`${quantity} ${product} added to cart`);
};