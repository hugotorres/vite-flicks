<template>
  <div>
    <header>
      <h1>My Portfolio</h1>
      <!-- Add your header content here -->
    </header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <!-- Add more navigation links as needed -->
    </nav>
    <main>
      <!-- Add your main content here -->
      <router-view></router-view>
    </main>
    <footer>
      <!-- Add your footer content here -->
      <p>&copy; 2023 Hugo Andres. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style>
/* Add your custom styles for the layout here */
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
</style>
