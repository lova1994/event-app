<template>
  <header>

    <div>
      <router-link to="/">
        <h1>{{ title }}</h1>
      </router-link>
            <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button class="sign" v-if="!$auth.isAuthenticated" @click="login">Sign in</button>
      <!-- show logout when authenticated -->
      <button class="sign"  v-if="$auth.isAuthenticated" @click="logout">Sign out</button>
    </div>
    </div>

    <!-- <h2 >{{ punchline }}</h2>
    <a href="#" class="btn"> Join Event Finder </a> -->
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => ({
    title: "Event Finder",
    punchline: "Discover cool events in your city.",
  }),
    methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin,
      });
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/scss/_variables.scss";
@import "@/assets/scss/_typography.scss";

header h1 {
  font-family: indie flower, serif;
  font-size: 3em;
  color: $orange;
  padding: 0;
  margin: 0;
}

header h2 {
  color: #000;
  font-size: 2em;
  max-width: 400px;
}

header {
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  padding-bottom: 2%;
  margin: 0;
  // line-height: 0.1em;
}

a {
  text-decoration: none;
}

header > div {
  display: flex;
  justify-content: space-between;
}

.btn {
  text-decoration: none;
  background-color: $orange;
  padding: 1.6em;
  color: #fff;
  border-radius: 15px;
  font-weight: bold;
  width: 300px;
  text-align: center;
}
.sign {
    border:none; 
    font-size: 1em;
    font-weight: bold;
    padding:2%;
    background-color: inherit;
    cursor:pointer;
}
</style>