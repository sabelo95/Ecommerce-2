const products = [
  {
    name: "GOLD WHEY 5 LB",
    weight: 5,
    servings: 30,
    calories: 120,
    proteinPerServing: 24,
    price: 369000,
    image: "../src/assets/gold-standard-5-lb-1.webp",
    id: "1",
    stock:25,
    category:'Limpia'
  },
  {
    name: "GOLD WHEY 10 LB",
    weight: 10,
    servings: 30,
    calories: 120,
    proteinPerServing: 24,
    price: 649000,
    image: "../src/assets/gold-standard-10-lb-1.webp",
    id: "2",
    category:'Limpia'
  },
  {
    name: "GOLD WHEY 2 lb",
    weight: 2,
    servings: 30,
    calories: 120,
    proteinPerServing: 24,
    price: 196000,
    image: "../src/assets/gold-standard-2-lb-1.webp",
    id: "3",
    category:'Limpia'
  },
  {
    name: "SERIOUS MASS",
    weight: 12,
    servings: 334,
    calories: 1250,
    proteinPerServing: 50,
    price: 369000,
    image: "../src/assets/serious-mass-12-lb.webp",
    id: "4",
    category:"Hipercalorica"
  },
  {
    name: "BIPRO 3 LB",
    weight: 3,
    servings: 25,
    calories: 80,
    proteinPerServing: 20,
    price: 200000,
    image: "../src/assets//BI-PRO-3lb-300x300.webp",
    id: "5",
    category:"Hipercalorica"
  },
  {
    name: "BIPRO 2 LB",
    weight: 2,
    servings: 25,
    calories: 80,
    proteinPerServing: 20,
    price: 150000,
    image: "../src/assets//Plantilla-zonafit-Promo-25-enero-bipro-2lb-e1605881324437.jpg",
    id: "6",
    category:"Hipercalorica"
  },
  {
    name: "BIPRO CLASSIC 2 LB",
    weight: 2,
    servings: 25,
    calories: 80,
    proteinPerServing: 20,
    price: 130000,
    image: "../src/assets/bipro-classic-2-lb.webp",
    id:"7",
    category:"Hipercalorica"
  },
  {
    name: "GOLD ISOLATE 5 LB",
    weight: 5,
    servings: 31,
    calories: 110,
    proteinPerServing: 25,
    price: 429000,
    image: "../src/assets/isolate-5-lb.webp",
    id: "8",
    category: 'Limpia'
  },
  {
    name: "SMARTGAINER 13 lb",
    weight: 13,
    servings: 100,
    calories: 920,
    proteinPerServing: 44,
    price: 250000,
    image: "../src/assets/smart-gainer-13-lb-2.webp",
    id: "9",
    category:"Hipercalorica"
  },
  {
    name: "GOLD ISOLATE 1.6 LB",
    weight: 1.6,
    servings: 31,
    calories: 110,
    proteinPerServing: 25,
    price: 190000,
    image: "../src/assets/bipro-classic-2-lb.webp",
    id: "10",
    category:'Limpia'
  },
  {
    name: "MEGAPLEX",
    weight: 10,
    servings: 150,
    calories: 200,
    proteinPerServing: 44,
    price: 240000,
    image: "../src/assets/megaplex-10-lb-2.webp",
    id: "11",
    category:'Limpia'
  },
  {
    name: "SERIOUS MASS 6 LB",
    weight: 6,
    servings: 334,
    calories: 1250,
    proteinPerServing: 50,
    price: 280000,
    image: "../src/assets/serious-mas-6-lb.webp",
    id: "12",
    category:"Hipercalorica"
  }
];


  export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductsById = (productId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.find(prod => prod.id === productId))
      }, 500)
  })
}

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
      setTimeout(() => {
          resolve(products.filter(prod => prod.category === categoryId))
      }, 500)
  })
}


  