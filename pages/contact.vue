<script>
// import { sendMail } from '~/helpers/email'
export default {
  name: 'ContactPage',
  // asyncData(context) {
  //   if (process.server) {
  //     console.log(process.server)
  //     console.log('hi')
  //   }
  // },
  // middleware: 'email',
  methods: {
    async sendTest() {
      await this.$axios.$post('/api/email', {
        name: 'Liz',
        email: 'lizdavidson45@gmail.com',
        msg: 'HEY THIS WORKS',
      })
    },
  },
}
</script>

<template>
  <section class="page">
    <div class="section">
      <h2 class="section__title">Contact Us</h2>
      <p>Let's keep in touch!</p>
      <button @click="sendTest">Send</button>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// .lead-img {
// 	height: 70vh;
// 	width: 100vw;
// 	background-image: url(https://cdn.pixabay.com/photo/2016/08/19/21/12/mobile-1606285_1280.jpg);
// 	background-repeat: none;
// 	background-position: center;
// 	background-size: cover;
// }

.page {
}

.section {
  padding: 60px;

  &__title {
    font-size: 40px;
    color: $navyBlue75;
    font-family: 'Arvo', serif;
  }
}
</style>
