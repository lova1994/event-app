<template>
  <div>
    <div>
        <p>PROFIL</p>
      <img :src="$auth.user.picture">
      <h2>{{ $auth.user.name }}</h2>
      <p>{{ $auth.user.email }}</p>
    </div>
    <div>
      <pre>{{ JSON.stringify($auth.user, null, 2) }}</pre>
    </div>
    <!-- <section 
    v-for="event in events"
     :key="event.id"
    >
    {{event.title}}
    </section> -->
  </div>
</template>


<script>
export default {
       props: 
    ["event"]
}
</script>