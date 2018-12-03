<template>
  <section class="container">
    <div>
      <h1 class="title">Nuxt Vuex Module and Service pattern</h1>
      <div>{{ events }}</div>
    </div>
  </section>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'

export default {
  computed: mapGetters({
    events: 'events/getEvents'
  }),

  mounted() {
    this.fetchEvents()
  },

  methods: {
    ...mapActions({
      fetchEvents: 'events/fetchEvents'
    })
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 3rem;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
