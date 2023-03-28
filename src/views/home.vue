<template>
    <div class="mainPage">
        <Slider />
    </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  components: {
    Slider
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

.mainPage {
    
}

@media screen and (max-width: $tablet) {
}
@media screen and (max-width: $mobile) {
}

</style>

