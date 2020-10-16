<template>
  <main>

 
single event


  </main>
</template>
<script>
import { getEvents } from "@/data/events.js";

export default {
  name: "Events",
  components: {},
  props: ["event"],
  data: () => ({
    attendedEvents: [],
    reviews: [{review: "test"}],
    review: ""
  }),

  created() {
    this.attendedEvents = getEvents();
  },

  computed: {

  },
  methods: {
  }
};
</script>

<style  lang="scss">
@import "@/assets/scss/_variables.scss";

* {
  box-sizing: border-box;
}

.user {
  img {
    width: 60px;
  }
}

img {
  max-width: 500px;
}

.card {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;

  img {
    height: 18em;
  }
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 20px;
  min-height: 250px;

  button {
    border: none;
    border-radius: 5px;
    padding: 3%;
    background-color: $orange;
    color: #fff;
    font-weight: bold;
    font-family: mulish, sans-serif;
    width: 100%;
  }
}

.tag {
  background: #777;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
}

.tag-teal {
  background-color: #92d4e4;
}

.tag-purple {
  background-color: #662a48;
}

.tag-pink {
  background-color: #ff69b4;
}

.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-body h4 {
  margin: 10px 0;
}

.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}

.user {
  display: flex;
  margin-top: auto;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
.user-info h5 {
  margin: 0;
}
.user-info small {
  color: #888785;
}
textarea {
  resize: none;
  width: 100%;
  height: 100px;
  border: solid 1px hotpink;
}
</style>

