<template>
  <div id="app">
    <Header />
    <router-link v-if="$auth.isAuthenticated" to="/profile"
      >Profile</router-link
    >
    <router-link v-if="$auth.isAuthenticated" to="/allevents"
      >All Events</router-link
    >
    <router-link v-if="$auth.isAuthenticated" to="/attendedevents"
      >Attended Events</router-link
    >

    <!-- 
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
    <div class="container">
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
// import Events from './components/Events.vue';

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_typography.scss";

#app {
  font-family: Mulish, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: black;
}

a {
  color: hotpink;
}

a:hover {
  font-weight: bold;
}
body {
  background-color: #fff;
  // display: flex;
  // // align-items: center;
  // justify-content: center;
  height: 100vh;
  margin: 0;
  font-family: muli;
  padding: 1em;
}

.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 940px;
  // margin:auto;
}

@media (max-width: 940px) {
  .container {
    grid-template-columns: repeat(2, 1fr);
    width: 200px;
  }
}
</style>


