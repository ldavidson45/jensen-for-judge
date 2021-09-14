<script>
// import { sendMail } from '~/helpers/email'
import EmailSuccessModal from '~/components/EmailSuccessModal.vue'
export default {
  name: 'ContactPage',
  components: {
    EmailSuccessModal,
  },
  data() {
    return {
      email: {
        value: '',
        showError: false,
      },
      name: {
        value: '',
        showError: false,
      },
      message: {
        value: '',
        showError: false,
      },
    }
  },
  computed: {
    isEmailValid() {
      const regex = /\S+@\S+\.\S+/
      return regex.test(this.email.value)
    },
    isNameValid() {
      return !!this.name.value.length
    },
    isMessageValid() {
      return this.message.value.length > 10
    },
    isFormValid() {
      return this.isEmailValid && this.isNameValid && this.isMessageValid
    },
  },
  methods: {
    async sendTest() {
      if (this.isFormValid) {
        await this.$axios.$post('/api/email', {
          name: this.name.value,
          email: this.email.value,
          msg: this.message.value,
        })
        this.showModal()
        this.clearForm()
      } else {
        this.name.showError = !this.isNameValid
        this.email.showError = !this.isEmailValid
        this.message.showError = !this.isMessageValid
      }
    },
    showModal() {
      this.$refs.successModal.openModal()
    },
    clearForm() {
      this.email = {
        value: '',
        showError: false,
      }
      this.name = {
        value: '',
        showError: false,
      }
      this.message = {
        value: '',
        showError: false,
      }
    },
  },
}
</script>

<template>
  <section class="page">
    <div class="section">
      <h2 class="section__title">Contact Us</h2>
      <p>Let's keep in touch!</p>
      <form class="contact-form">
        <div class="contact-form__field">
          <label for="name">Full Name</label>

          <input
            id="name"
            v-model="name.value"
            name="name"
            type="text"
            required
          />
          <span
            class="contact-form__error-message"
            :class="{ visible: name.showError }"
          >
            This field is required
          </span>
        </div>

        <div class="contact-form__field">
          <label for="email">Email</label>

          <input
            id="email"
            v-model="email.value"
            name="email"
            type="email"
            required
          />
          <span
            class="contact-form__error-message"
            :class="{ visible: email.showError }"
          >
            This field is required and must be a valid email address
          </span>
        </div>

        <div class="contact-form__field">
          <label for="message">Message</label>

          <textarea
            id="message"
            v-model="message.value"
            name="message"
            required
          />
          <span
            class="contact-form__error-message"
            :class="{ visible: message.showError }"
          >
            This field is required and must be at least 10 characters
          </span>
        </div>

        <button class="send-button" type="button" @click="sendTest">
          Send
        </button>
      </form>
    </div>
    <EmailSuccessModal ref="successModal" />
  </section>
</template>

<style lang="scss" scoped>
.section {
  padding: 60px;

  &__title {
    font-size: 40px;
    color: $navyBlue75;
    font-family: 'Arvo', serif;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &__field {
    margin: 15px auto;
    display: block;
    max-width: 350px;

    label {
      display: block;
      font-family: 'Roboto';
      font-weight: 600;
      margin-bottom: 15px;
    }

    input,
    textarea {
      font-size: 16px;
      padding: 10px;
      min-width: 350px;
      border-radius: 5px;
      border: none;
      background-color: $lightGray;
      font-family: 'Roboto';
      letter-spacing: 0.5px;
    }

    textarea {
      height: 100px;
    }
  }

  &__error-message {
    color: red;
    display: none;
    font-size: 12px;
  }

  &__error-message.visible {
    display: block;
  }
}

.send-button {
  background-color: $lightBlue1;
  padding: 10px 20px;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  margin: auto;
  width: 150px;
}
</style>
