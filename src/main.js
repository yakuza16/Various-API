// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

require("~/main.css")
import DefaultLayout from "~/layouts/Default.vue"
import Vuex from "vuex"

export default function(Vue, { appOptions, router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout)
  Vue.use(Vuex)

  appOptions.store = new Vuex.Store({
    state: {
      isModalOpen: false,
    },
    mutations: {
      onOffModal(state) {
        state.isModalOpen = !state.isModalOpen
      },
    },
  })
}
