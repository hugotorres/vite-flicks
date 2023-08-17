<template>
  <div>
    <header>
      <h1 class="title">
        Hi. I’m
        <span
          class="name"
          @mouseover="name = true"
          @mouseleave="name = false"
          :class="{ active: name }"
          >Hugo</span
        >.<br />
        I am a
        <span
          class="job"
          @mouseover="job = true"
          @mouseleave="job = false"
          :class="{ active: job }"
          >frontend developer </span
        >and,<br />
        <span
          class="hobbie"
          @mouseover="hobbie = true"
          @mouseleave="hobbie = false"
          :class="{ active: hobbie }"
          >ilustrator</span
        >,<br />
        from
        <span
          class="location"
          @mouseover="location = true"
          @mouseleave="location = false"
          :class="{ active: location }"
          >Colombia</span
        >
      </h1>
      <!-- Add your header content here -->
    </header>
    <nav>
      <router-link to="/"><home-icon class="icon" /></router-link>
      <router-link to="/skills">Skills</router-link>
      <router-link to="/resume">Resume</router-link>
      <!-- Add more navigation links as needed -->
    </nav>
    <router-view></router-view>
    <footer>
      <!-- Add your footer content here -->
      <p>&copy; 2023 Hugo Andres. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import { HomeIcon } from "@heroicons/vue/24/outline";
export default {
  name: "App",
  components: {
    HomeIcon,
  },
  data() {
    return {
      job: false,
      hobbie: false,
      location: false,
      name: false,
    };
  },
};
</script>
<style lang="scss">
.icon {
  width: 20px;
  height: 16px;
  color: #ffffff;
  margin-left: 12px;
}
.job.active {
  background: red;
}

.hobbie.active {
  background: blue;
}

.location.active {
  background: yellow;
}
.name.active {
  background: yellow;
}

header {
  background-color: #f2f2f2;
  padding: 10px;
}

nav {
  background-color: #333;
  color: #fff;
  padding: 10px;
}

nav a {
  color: #fff;
  margin-right: 10px;
  text-decoration: none;
}

main {
  padding: 20px;
}

footer {
  background-color: #f2f2f2;
  padding: 10px;
  text-align: center;
}
html {
  block-size: 100%;
  inline-size: 100%;
}

body {
  min-block-size: 100%;
  min-inline-size: 100%;
  margin: 0;
  box-sizing: border-box;
  display: grid;
  place-content: center;
  font-family: system-ui, sans-serif;
}

body {
  font-family: "Roboto", sans-serif;
}
title {
  h1::before {
    transform: scaleX(0);
    transform-origin: bottom right;
  }

  h1:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
  }

  h1::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    inset: 0 0 0 0;
    background: hsl(200 100% 80%);
    z-index: -1;
    transition: transform 0.3s ease;
  }

  h1 {
    position: relative;
    font-size: 5rem;
  }
}
</style>
