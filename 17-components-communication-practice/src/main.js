import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    setCurrentServer(srv) {
      this.$emit("setCurrentServer", srv);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
