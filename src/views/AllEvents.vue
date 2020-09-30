<template>
  <div class="home">
 <h1>ALLEVENTS.VUE</h1>

         add event

         <input type="text" v-model="text" placeholder="Add event..." 
       />
        <input type="text" v-model="tag" placeholder="Tag" 
       />
        <input type="text" v-model="eventTitle" placeholder="Title" 
       />


     


      <button @click="addEvent()"> Add Event </button>

    <div class="container">


        <Events  
         v-for="event in events"
          :key="event.id"
          :event="event"
       />
         </div>

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Events from '@/components/Events.vue'


export default {
  name: "home",
  components: {
    Events
  },
    data: () => ({
    title: "Event Finder",
    events: [
      { tag: "Adventure", id: 1, date: "Thu, oct 1, 18:00", title: "Hot Air Balloon Ride", description: "Group Adventure, LA", img: "https://images.pexels.com/photos/670061/pexels-photo-670061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
      attended: false
      },
         { tag: "Art", id: 2, date: "Tue, sep 2, 12:00", title: "Street Art Guide", description: "Artistic Event, LA", img: "https://images.pexels.com/photos/959314/pexels-photo-959314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
         attended: false
      },
       { tag: "Nature", id: 3, date: "Tue, oct 10, 09:00", title: "High Mountains Hike", description: "Nature Event, LA", img: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
       attended: false
      },
        { tag: "Nature", id: 4, date: "Tue, oct 10, 09:00", title: "High Mountains Hike", description: "Nature Event, LA", img: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" ,
        attended: false
      },

    ]
  }),
  methods: {

       addEvent() {
      const item = this.text;
      const tag = this.tag;
      const eventTitle = this.eventTitle
    
      this.events.push({ item, tag, eventTitle,  id: Date.now() });
      this.text = "";
      this.tag = "";
      this.title = "";
    },
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
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
  color:hotpink;
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
    margin:0;
    font-family: muli;
    padding: 1em;
}

.container {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 940px;
    // margin:auto;
}

@media (max-width: 940px) {
    .container {
        grid-template-columns: repeat(2,1fr);
        width:200px;

    }
}
</style>


