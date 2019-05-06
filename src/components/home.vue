<template>
  <div class="hello">
    <header-top></header-top>
    <header-middle></header-middle>
    <header-bottom></header-bottom>
    <commercial></commercial>
    <category></category>
    <products></products>
  </div>
</template>

<script>
import Header_top from './header-top.vue'
import Header_middle from './header-middle.vue'
import Header_bottom from './header-bottom.vue'
import category from './category.vue'
import products from './products.vue'
import commercial from './commercial.vue'

export default {
  name: 'HelloWorld',
  components:{
    'header-top': Header_top,
    'header-middle': Header_middle,
    'header-bottom': Header_bottom,
    'products': products,
    'category': category,
    'commercial': commercial
  },
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
