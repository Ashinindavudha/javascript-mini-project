const products = [
  {
    name: "laptop",
    price: 1000,
    count: 5,
  },
  {
    name: "desktop",
    price: 1500,
    count: 2,
  },
  {
    name: "phone",
    price: 500,
    count: 10,
  },
];

const totalProductsValue = products.map((item) => ({
  name: item.name,
  totalValue: item.price * item.count,
}));

console.log(totalProductsValue);
/*
output 
  { name: 'laptop', totalValue: 5000 },
  { name: 'desktop', totalValue: 3000 },
  { name: 'phone', totalValue: 5000 }
  */
