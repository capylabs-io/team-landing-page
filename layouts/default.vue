<template>
  <v-app dark>
    <NavBar/>
    <v-main>
        <Nuxt />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavigationBar.vue";
export default {
  name: 'DefaultLayout',
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire',
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js',
    }
  },
  components: {
    NavBar,
  }
}
</script>
