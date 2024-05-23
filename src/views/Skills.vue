<template>
  <div class="skills">
    <h2>Skills</h2>
  <pre>
    const me = {
      hobbies: ["Drawing", "Horror movies", "Hanging out with my daughter"],
      code: ["Javascript","Vuejs","AngularJs", "Typescript", "HTML", "CSS"],
      tools: ["Vue", "Redux", "RxJs","Git"],
      architecture: ["Design System Pattern"],
      preprocessor: ["SASS", "LESS"],
    }
  </pre>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>
<style lang="scss" scoped>
.skills {
  min-height: 40vh;
  background: #cccccc;
}
</style>
