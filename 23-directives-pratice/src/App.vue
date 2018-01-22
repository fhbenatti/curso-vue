<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives - Practice</h1>
        <button v-customOn:click="clicked" class="btn btn-primary">Click Me</button>
        <hr>
        <div 
          v-customOn:mouseenter="mouseEnter" 
          v-customOn:mouseleave="mouseLeave" 
          style="width: 100px; height: 100px; background-color: lightgreen">
        </div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
  export default {
    directives: {
      customOn: {
        bind(el, binding) {
          let type = binding.arg;
          let fn = binding.value;
          el.addEventListener(type, fn);
        }
      }
    },
    methods: {
      clicked() {
        alert('I was clicked!');
      },
      mouseEnter() {
        console.log('Mouse entered!');
      },
      mouseLeave() {
        console.log('Mouse left!');
      }
    }
  }

</script>

<style>


</style>
