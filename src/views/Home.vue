<template>
  <div class="home">
  

  <timeline/>

  </div>

</template>
<script>
import * as d3 from "d3";
import Timeline from "../components/Timeline.vue";

export default {
  name: "Home",
  components: {
    Timeline
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="scss" scoped>
/* Add your custom styles for the layout here */
.home {
  min-height: 40vh;
  background: #e8e8e8;
}
</style>
