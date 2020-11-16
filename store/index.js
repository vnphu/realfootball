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
  outCart(state, n) {
    const index = state.cartItems.findIndex((x) => x.id === n)
    return state.cartItems.splice(index, 1)
  },
}

export const actions = {
  addItemToCart: ({ commit, state }, payload) => {
    commit('ADD_ITEM_TO_CART', payload)
    localStorage.setItem('cart', JSON.stringify(state.cartItems))
  },
}
