<template>
  <div class="footer">
    <div class="footer-top">
      <ul>
        <li>
          <div class="info">
            <div class="title">Enter your email to receive discount</div>
            <div class="mail">
              <a-input-search
                placeholder="Enter email"
                enter-button="Submit"
                required
                type="email"
                size="large"
                @search="onSubmit"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="footer-bot">
      <div class="logo-icon">
        <ul>
          <li>
            <img
              src="https://www.lovellsoccer.co.uk/images/payment-logos/payment-visa-dark.jpg"
              alt="logo-icon"
            />
          </li>
          <li>
            <img
              src="https://www.lovellsoccer.co.uk/images/payment-logos/payment-paypal-dark.jpg"
              alt="logo-icon"
            />
          </li>
          <li>
            <img
              src="https://www.lovellsoccer.co.uk/images/payment-logos/payment-mastercard-dark.jpg"
              alt="logo-icon"
            />
          </li>
          <li>
            <img
              src="https://www.lovellsoccer.co.uk/images/payment-logos/payment-amazon-dark.jpg"
              alt="logo-icon"
            />
          </li>
          <li>
            <img
              src="https://www.lovellsoccer.co.uk/images/payment-logos/payment-amex-dark.jpg"
              alt="logo-icon"
            />
          </li>
        </ul>
      </div>
      <div class="title">
        <ul>
          <li><nuxt-link to="#"> Company Information</nuxt-link></li>
          <li><nuxt-link to="#"> Company Information</nuxt-link></li>
          <li><nuxt-link to="#"> Company Information</nuxt-link></li>
          <li><nuxt-link to="#"> Company Information</nuxt-link></li>
          <li><nuxt-link to="#"> Company Information</nuxt-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    onSubmit(value) {
      const emailRegex = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/
      const result = emailRegex.test(value)
      if (result) {
        this.$notification.open({
          message: 'Notification ',
          description: 'Success',
          icon: <a-icon type="check" style="color: green" />,
        })
      } else {
        this.$notification.open({
          message: 'Notification ',
          description: 'Please check your email',
          icon: <a-icon type="close" style="color: red" />,
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.ant-btn-primary {
  color: #fff;
  background-color: black;
  border-color: var(--white);
  &:hover {
    color: #fff;
    background-color: black;
    border-color: var(--white);
    opacity: 0.7;
  }
}
.info {
  // max-width: 40%;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  margin: auto;
  .title {
    margin: auto;
    color: var(--white);
    font-size: 1.6rem;
    padding: 0.5rem;
  }
}
.footer {
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--black);
}
.footer-bot {
  padding: 3rem;
  background-color: var(--black);
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .logo-icon {
    ul {
      display: flex;
      justify-content: center;
      li {
        margin: 1rem;
      }
    }
  }
  .title {
    margin-top: 2rem;
    ul {
      display: flex;
      justify-content: center;
      li {
        border-right: 0.1rem solid var(--white);
        padding: 0.5rem 1rem;
        font-size: 1.2rem;
        letter-spacing: 0.1rem;
        a {
          color: var(--white);
        }
        &:last-child {
          border-right: none;
        }
      }
    }
  }
}
</style>
