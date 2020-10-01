<template>
  <main>
    <div class="card">
      <img :src="event.img" alt="" />

      <div class="card-body">
        <span>{{ event.tag }}</span>
        <small>{{ event.date }}</small>
        <h4>{{ event.title }}</h4>
        <p>{{ event.description }}</p>
        <div class="user">
          <!-- <img
            src="https://images.pexels.com/photos/3304341/pexels-photo-3304341.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="user 1"
          /> -->

          <!-- <div class="user-info">
            <h5>User name</h5>

            <small> 2h ago </small>
          </div> -->
        </div>
        <button
         v-if="isAllEvents"
          @click="attendEvent(event)"
        >

          Attend Event
        </button>

       

      <p> {{ attendedEvents.length }} people are attending this event</p>
         <input
          v-if="isAttendedEvents"
         
         type="text" /> 
 <button v-if="isAttendedEvents" >
     Send review
 </button>

      </div>
    </div>
  </main>
</template>

<script>
import { getAttendedEvents } from "@/data/events.js";

export default {
  name: "Events",
  components: {},
  props: ["event"],
  data: () => ({
    attendedEvents: [],
  }),

  created() {
    this.attendedEvents = getAttendedEvents();
  },

  computed: {
        isAttendedEvents() {
        if(this.$route.path == "/attendedevents" ) {
          return true
        } else {
          return false
        }},

            isAllEvents() {
        if(this.$route.path == "/allevents" ) {
          return true
        } else {
          return false
        }
      }
  },
  methods: {
    attendEvent(event) {
      console.log("attending to the event " + event.title);
      console.log("Attended events:" + this.attendedEvents.length);

      const eventTitle = event.title;
      this.attendedEvents.push({ eventTitle });
      this.$emit("attendEvent", event);
    },
  },
};
</script>

<style  lang="scss">
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
</style>

