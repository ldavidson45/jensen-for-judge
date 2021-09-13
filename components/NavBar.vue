<script>
import NavToggleButton from './NavToggleButton.vue'
import { navigationLinks } from '~/assets/constants/index'

export default {
  name: 'NavBar',
  components: {
    NavToggleButton,
  },
  data() {
    return {
      showNavLinks: false,
      navigationLinks,
    }
  },
  watch: {
    $route() {
      this.showNavLinks = false
    },
  },
  methods: {
    handleNavToggle() {
      this.showNavLinks = !this.showNavLinks
    },
  },
}
</script>

<template>
  <div class="page-wrapper">
    <div class="header">
      <div class="header__nav-bar">
        <nuxt-link to="/">
          <h1 class="logo">
            <span class="logo__name">Linda Collins Jensen</span>
            <span class="logo__title"> Juvenile Court Judge </span>
          </h1>
        </nuxt-link>
        <div class="nav-links-wrapper" :class="{ expanded: showNavLinks }">
          <ul class="nav-links">
            <li v-for="(link, id) in navigationLinks" :key="id">
              <nuxt-link :to="link.path">
                {{ link.displayName }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <NavToggleButton
          class="nav-toggle"
          :is-expanded="showNavLinks"
          @toggleMenu="handleNavToggle"
        />
      </div>
    </div>

    <div class="body"></div>
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper,
.header {
  background-color: #fff;
}

.body {
  margin-top: 66px;
}

.header {
  padding: 10px 10px;
  z-index: 100;
  box-shadow: 0px 1px 3px 0px rgba(143, 143, 143, 0.35);
  position: fixed;
  top: 0;
  width: 100vw;

  &__nav-bar {
    display: flex;
    position: relative;
    max-width: 1500px;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 10px;
    position: relative;

    a {
      text-decoration: none;
    }
  }
}

.logo {
  color: $brickRed;
  font-family: 'Oswald', sans-serif;
  display: flex;
  flex-direction: column;
  font-weight: 900;
  white-space: nowrap;
  margin: 0;

  &__name {
    font-size: 30px;
    line-height: 30px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
  &__title {
    font-family: 'Barlow', sans-serif;
    font-size: 16px;
    line-height: 16px;
    text-align: center;
    letter-spacing: 2.2px;
    color: $navyBlue61;
  }
}

.nav-links {
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: $navyBlue61;
  margin: 0;

  a {
    text-decoration: none;
    display: inline-block;
    padding: 0 20px;

    &:hover {
      color: #5688c7;
    }
  }
}

.router-link-active {
  color: #5688c7;
}

@media only screen and (max-width: 840px) and (min-width: 750px) {
  .body {
    margin-top: 52px;
  }
  .logo {
    &__name {
      font-size: 20px;
      line-height: 20px;
    }
    &__title {
      font-size: 12px;
      line-height: 12px;
    }
  }
}

@media only screen and (max-width: 750px) {
  .nav-links-wrapper {
    height: 0;
    overflow: hidden;
    position: absolute;
    right: -10px;
    top: 56px;
    transition: height 400ms ease;
  }
  .nav-links {
    display: none;
    flex-direction: column;
    padding: 5px 10px;
    background: #fff;

    a {
      line-height: 40px;
    }
  }

  .expanded {
    height: 100vh;
    transition: height 600ms ease-out;

    .nav-links {
      display: flex;
    }
  }
}
</style>
