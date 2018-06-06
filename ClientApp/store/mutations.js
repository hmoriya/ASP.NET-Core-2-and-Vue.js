export const addProductToCart = (state, product) => {
  product.quantity = 1;
  state.cart.push(product);
};

export const updateProductQuantity = (state, product) => {
  const index = state.cart.indexOf(product);
  let cartItem = state.cart[index];
  cartItem.quantity++;

  state.cart.splice(index, 1, Object.assign({}, cartItem));
};

export const removeProductFromCart = (state, product) => {
  const index = state.cart.indexOf(product);
  state.cart.splice(index, 1);
};

export const setProductQuantity = (state, payload) => {
  const index = state.cart.indexOf(payload.product);
  let cartItem = state.cart[index];
  cartItem.quantity = payload.quantity;

  state.cart.splice(index, 1, Object.assign({}, cartItem));
};

export const clearCartItems = state => {
  state.cart = [];
};

export const setCartItems = (state, items) => {
  state.cart = items;
};

export const showAuthModal = state => {
  state.showAuthModal = true;
};

export const hideAuthModal = state => {
  state.showAuthModal = false;
};

export const loginRequest = state => {
  state.loading = true;
};

export const loginSuccess = (state, payload) => {
  state.auth = payload;
  state.loading = false;
};

export const loginError = state => {
  state.loading = false;
};

export const registerRequest = state => {
  state.loading = true;
};

export const registerSuccess = state => {
  state.loading = false;
};

export const registerError = state => {
  state.loading = false;
};

export const logout = state => {
  state.auth = null;
};

export const setProducts = (state, products) => {
  state.products = products;
};

export const setFilters = (state, filters) => {
  state.filters = filters;
};

export const setProduct = (state, product) => {
  state.product = product;
};

export const setOrders = (state, orders) => {
  state.orders = orders;
};
