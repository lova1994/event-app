<template>
  <div class="home">
    <!-- <h1>ALLEVENTS.VUE</h1> -->

<!-- <button @click="add">
Add
</button> -->

    <div class="container">
      <Events
        v-for="event in events"
        :key="event.id"
        :event="event"
        @attend="attend"
      />

      <!-- <h2>Attended Events</h2> -->
      <!-- <ul>
        <li v-for="event in attendedEvents" :key="event.id" :event="event">
          {{ event.title }}
        </li>
      </ul> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Events from "@/components/Events.vue";
import { getEvents, getAttendedEvents } from "@/data/events.js";

export default {
  name: "home",
  components: {
    Events,
  },
  data: () => ({
    events: [],
    attendedEvents: [],
  }),
  created() {
    this.events = getEvents();
    this.attendedEvents = getAttendedEvents();
  },
  methods: {
    attend() {
      this.$emit("attending", event);
     
    },
    add() {
        const test = "TEST"
        this.attendedEvents.push(test)
    }
  },
};
</script>




<style lang="scss">
@import "../assets/scss/_typography.scss";

#app {
  font-family: Mulish, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hotpink;
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


