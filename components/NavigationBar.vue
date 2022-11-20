<template>
  <v-app-bar
    class=""
    height="56px"
    style="z-index: 99,max-width:100%"
    app
    flat
    color="primary"
  >
    <div
      class="
        nav-container
        ml-13
        text-sm
        font-weight-regular
        d-flex
        justify-space-between
      "
      style="min-width: 95%"
    >
      <div class="font-weight-bold align-self-center pt-2">
        <Logo />
      </div>
      <!-- Main menu -->
      <div class="d-flex">
        <div
          @click="openLink('/')"
          class="
            white--text
            text-decoration-none
            cursor-pointer
            pl-6
            pr-2
            align-self-center
          "
        >
          <div class="text-none">Home</div>
        </div>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              v-bind="attrs"
              v-on="on"
              class="
                white--text
                text-decoration-none
                cursor-pointer
                px-2
                align-self-center
              "
              active-class="active"
            >
              <div class="text-none">Work</div>
            </div>
          </template>
          <span>Coming Soon</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              v-bind="attrs"
              v-on="on"
              class="
                white--text
                text-decoration-none
                cursor-pointer
                px-2
                align-self-center
              "
              active-class="active"
            >
              <div class="text-none">Services</div>
            </div>
          </template>
          <span>Coming Soon</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              v-bind="attrs"
              v-on="on"
              class="
                white--text
                text-decoration-none
                cursor-pointer
                px-2
                align-self-center
              "
              active-class="active"
            >
              <div class="text-none">About US</div>
            </div>
          </template>
          <span>Coming Soon</span>
        </v-tooltip>
        <v-tooltip bottom>
          <template v-slot:activator="{ on, attrs }">
            <div
              v-bind="attrs"
              v-on="on"
              class="
                white--text
                text-decoration-none
                cursor-pointer
                px-2
                align-self-center
              "
              active-class="active"
            >
              <div class="text-none">Contact</div>
            </div>
          </template>
          <span>Coming Soon</span>
        </v-tooltip>
        <router-link class="align-self-center ml-12" to="/"
          ><TwitterSvg
        /></router-link>
        <router-link class="align-self-center ml-4" to="/"
          ><LinkedinSvg
        /></router-link>
        <router-link class="align-self-center ml-4" to="/"
          ><FacebookSvg
        /></router-link>
      </div>
    </div>
  </v-app-bar>
</template>

<script>
import Logo from './Logo.vue'
import FacebookSvg from './svg/facebook.vue'
import TwitterSvg from './svg/twitter.vue'
import LinkedinSvg from './svg/linkedin.vue'

export default {
  name: 'NavigationBar',
  data() {
    return {
      chainId: '',
    }
  },
  components: {
    Logo,
    FacebookSvg,
    TwitterSvg,
    LinkedinSvg,
  },
  methods: {
    openLink(url) {
      window.open(url, '_blank')
    },
  },
}
</script>

<style scoped>
.nav-container {
  max-width: 1562px;
}
.connect-wallet {
  border: 1px solid var(--v-primary-base);
  box-sizing: border-box;
  /* background: #27292c; */
}
.active {
  color: var(--v-primary-base) !important;
}
</style>
