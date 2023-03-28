<template>
  <router-view /> 
</template>

<script>
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
  },
  data() {
    return {
    }
  },
  methods: {
  },
  computed: {
  },
  mounted() {
  }
}
</script>
<style lang="scss">
#message {
    padding: desktop-vw(20);
    position: fixed;
    top: 40vh;
    right: 10vh;
    background: #e1cd00;
    z-index: 100;
    color: #fff;
    visibility: visible;
    opacity: 1;
    transition: all 0.3s ease;

    &.hidden-xs {
      visibility: hidden;
      opacity: 0;
    }
}
</style>
