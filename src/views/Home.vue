<template>
  <div class="home">

    <div class="container">
     <Events
        v-for="event in events"
        :key="event.id"
        :event="event"

      
      />   
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Events from "@/components/Events.vue";
import { getEvents } from "@/data/events.js";

export default {
  name: "home",
  components: {
    Events,
  },
  data: () => ({
    events: [],
  }),
  created() {
    this.events = getEvents();
  },
  methods: {
  },
};
</script>




<style lang="scss">
@import "../assets/scss/_typography.scss";

#app {
  font-family: Mulish, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
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


