<template>
  <div id="app">
     <Header />

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  <div  class="container">
       <Events  
         v-for="event in events"
          :key="event.id"
          :event="event"
       />
     </div>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Events from './components/Events.vue';

export default {
  name: 'App',
  components: {
    Header,
    Events
  },

  data: () => ({
    title: "Event Finder",
    events: [
      { tag: "Adventure", id: 1, date: "Thu, oct 1, 18:00", title: "Hot Air Balloon Ride", description: "Group Adventure, LA", img: "https://images.pexels.com/photos/670061/pexels-photo-670061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
         { tag: "Art", id: 2, date: "Tue, sep 2, 12:00", title: "Street Art Guide", description: "Artistic Event, LA", img: "https://images.pexels.com/photos/959314/pexels-photo-959314.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      },
       { tag: "Nature", id: 3, date: "Tue, oct 10, 09:00", title: "High Mountains Hike", description: "Nature Event, LA", img: "https://images.pexels.com/photos/2356059/pexels-photo-2356059.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
      },
      


    ]
  }),
 
}
</script>

<style lang="scss">
#app {
  font-family: Muli, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    margin:0;
    font-family: muli;
}

.container {
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 940px;
    margin:auto;
}

@media (max-width: 940px) {
    .container {
        grid-template-columns: 1fr;
        justify-items: center;
    }
}
</style>


