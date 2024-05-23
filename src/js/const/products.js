function productGenerator(count) {
  let products = [];
  for (let i = 0; i < count; i++) {
    products.push({
      id: i,
      name: `Product ${i}`,
      price: Math.floor(Math.random() * 100),
    });
  }
  return products;
}

export default productGenerator;
