<template>
  <div class="container main-container w-full">
    <div id="app" class="mt-16 px-2">
      <router-view />
      <footer>
        <div class="mt-3">
          <h1>
            Made by
            <a
              class="font-bold underline"
              href="https://geongeorge.com/"
              target="_blank"
              >Geon</a
            >
            😇

            <router-link
              class="font-bold underline"
              v-if="$route.path != '/about'"
              to="/about"
              >About</router-link
            >
          </h1>
        </div>
      </footer>
    </div>
  </div>
</template>
<style>
body {
  @apply bg-yellow-300;
}
.main-container {
  min-height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a {
  font-weight: bold;
  @apply text-gray-600;
}

#nav a.router-link-exact-active {
  @apply text-gray-900;
}
footer {
  margin-top: 50px;
}
</style>
