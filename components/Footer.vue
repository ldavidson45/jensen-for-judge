<script>
export default {
  name: 'Footer',
}
</script>

<template>
  <footer>
    <div>
      <div class="footer__address">
        <p>Linda Jensen for Juvenile Court Judge</p>
        <p>P.O. Box 40224</p>
        <p>Mobile, AL 36604</p>
      </div>
      <a class="footer__email" href="mailto:jensen4juvenilecourt@gmail.com ">
        <font-awesome-icon icon="envelope" style="font-size: 14px" />

        jensen4juvenilecourt@gmail.com
      </a>
    </div>
    <div class="footer__nav-links">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/election-info">Election Info</nuxt-link>
      <nuxt-link to="/contact">Contact</nuxt-link>
      <a
        href="https://www.facebook.com/Linda-Collins-Jensen-for-Juvenile-Court-Judge-100387862354021"
        target="_blank"
        aria-label="Facebook Page: Linda Collins Jensen for Juvenile Court Judge"
        >Facebook</a
      >
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  font-family: 'Roboto';
  width: 100vw;
  background: $lightGray;
  padding: 30px 60px;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
}

.footer {
  &__address {
    margin-bottom: 25px;
    p {
      margin: 3px;
    }
  }
  &__email {
    text-decoration: none;
    line-height: 14px;
    padding-top: 20px;

    &:hover {
      color: $lightBlue1;
    }
  }

  &__nav-links {
    display: flex;
    flex-direction: column;

    a {
      margin-bottom: 5px;
      text-decoration: none;

      &:hover {
        color: $lightBlue1;
      }
    }
  }
}
</style>
