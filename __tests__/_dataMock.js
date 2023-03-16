/*-------------------------- Products --------------------------*/
const wrongProductBody = {};
const wrongSizeProductBody = { name: 'Prod' };
const rightProductBody = { name: 'Produto1' };
const allDriversResponse = [
  { id: 1, name: 'Liana Cisneiros' },
  { id: 2, name: 'Fábio Frazão' },
  { id: 3, name: 'Anastacia Bicalho' },
  { id: 4, name: 'Samara Granjeiro' },
  { id: 5, name: 'Levi Teixeira' },
];
const productCreateResponse = { id: 4, name: 'Produto1' };
const productUpdateBody = { name: 'Machado do Thor Stormbreaker' };
const productUpdateExistsNameBody = { name: 'Martelo de Thor' };
const productSearchNameResponse = [{ id: 1, name: 'Martelo de Thor' }];

/*-------------------------- Sales --------------------------*/
const wrongSaleNotProductIdBody = [{ quantity: 1 }];
const wrongSaleNotQuantityBody = [{ productId: 1 }];
const nonexistentProductIdBody = [{ productId: 9999, quantity: 1 }];
const nonexistentProductIdBody2 = [
  { productId: 1, quantity: 1 },
  { productId: 99999, quantity: 5 },
];
const wrongZeroQuantityBody = [{ productId: 1, quantity: 0 }];
const wrongZeroNegativeBody = [{ productId: 1, quantity: -1 }];
const otherProductIdSaleBody = [
  { productId: 1, quantity: 1 },
  { productId: 3, quantity: 5 },
];
const rightSaleBody = [
  { productId: 1, quantity: 1 },
  { productId: 2, quantity: 5 },
];
const saleCreateResponse = {
  id: 3,
  itemsSold: [
    { productId: 1, quantity: 1 },
    { productId: 2, quantity: 5 },
  ],
};

module.exports = {
  wrongProductBody,
  wrongSizeProductBody,
  rightProductBody,
  allDriversResponse,
  productCreateResponse,
  productUpdateBody,
  productUpdateExistsNameBody,
  productSearchNameResponse,
  wrongSaleNotProductIdBody,
  wrongSaleNotQuantityBody,
  nonexistentProductIdBody,
  nonexistentProductIdBody2,
  wrongZeroQuantityBody,
  wrongZeroNegativeBody,
  otherProductIdSaleBody,
  rightSaleBody,
  saleCreateResponse,
};
