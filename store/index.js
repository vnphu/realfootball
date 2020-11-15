export const state = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],
}

export const getters = {
  cartItems: (state) => {
    return state.cartItems
  },
}

export const mutations = {
  ADD_ITEM_TO_CART: (state, payload) => {
    state.cartItems.push(payload)
  },
}

export const actions = {
  addItemToCart: ({ commit, state }, payload) => {
    commit('ADD_ITEM_TO_CART', payload)
    localStorage.setItem('cart', JSON.stringify(state.cartItems))
  },
}
