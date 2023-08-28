<template>
  <div class="resume">
    <h2>Resume</h2>
    <div v-for="work in history" :key="work.company" class="item">
      <img class="logo" src="https://placehold.jp/40x40.png" alt="logo" />
      <span class="date"> {{ work.date }} </span>
      <span class="description">{{ work.description }}</span>
    </div>
  </div>
</template>

<script>
import History from "../config/history.json";
export default {
  name: "Resume",
  components: {},
  created() {
    this.history = History;
  },
  data: () => ({
    history: [],
    messageWhenNoItems: "There are not items",
    timelineItems: [
      {
        from: new Date(2018, 7),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
      },
      {
        from: new Date(2016, 1),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
      },
      {
        from: new Date(2016, 6),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
      },
      {
        from: new Date(2012, 1),
        title: "Name",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius earum architecto dolor, vitae magnam voluptate accusantium assumenda numquam error mollitia, officia facere consequuntur reprehenderit cum voluptates, ea tempore beatae unde.",
      },
    ],
  }),
};
</script>
<style lang="scss" scoped>
.resume {
  min-height: 40vh;
  background: #a7a7a7;
  .item {
    background: white;
    padding: 10px;
    display: flex;
    margin: 5px;
    .company {
      font-weight: bold;
      display: block;
      padding: 10px;
    }
    .date {
      color: slategrey;
      font-size: 8px;
    }
    .description {
      font-size: 12px;
    }
  }
}
</style>
