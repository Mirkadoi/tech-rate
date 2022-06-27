<template>
  <div class="subscription">
    <div class="subscription-img">
      <img src="../_assets/subscription.png" alt="">
    </div>
    
    <div class="subscription-form">
      <h1>No noise. Just signal.</h1>
      <p>Get the latest in crypto dropped to your email, every week.</p>

      <div class="form-input">
        <input type="email" v-model="email" placeholder="Enter your email address">
        <button @click="subscribe" :disabled="!termsAccept" >Subscribe</button>
      </div>

      <label class="terms-checkbox">
        <div class="form-group">
          <input type="checkbox" id="checkbox" v-model="termsAccept">
          <label for="checkbox">
            <p>
              I have read and agree to Binance's
              <a href="#">Terms of Service</a>
            </p>
          </label>
        </div>
      </label>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
  components: {},

  data: () => ({
    email: null,
    termsAccept: false
  }),

  methods: {
    subscribe() {
      alert('Подписка!')
    }
  }
})
</script>

<style scoped lang="scss">
  .subscription {
    display: flex;
    align-items: center;
    padding: 13px 125px 25px;

    .subscription-img {
      width: 360px;
      height: 360px;
    }

    .subscription-form {
      h1 {
        font-family: "Roboto", sans-serif;
        font-weight: 700;
        font-size: 64px;
        line-height: 110%;
        margin: 0 0 7px;
      }

      p {
        font-size: 24px;
        line-height: 150%;
        margin: 0 0 26px;
      }

      .form-input {
        display: flex;
        margin-bottom: 6px;

        input, button {
          background: $color-white;
          border: 1px solid $color-white;
          border-radius: 8px;
        }

        input {
          width: 592px;
          padding: 16px 15px;
          margin-right: 10px;
        }

        button {
          color: #17181E;
          height: 54px;
          font-weight: 700;
          padding: 18px 15px;
          cursor: pointer;
        }
      }

      .terms-checkbox {
        p {
          font-size: 16px;

          a {
            color: $brand-color-pink;
            text-decoration: none;
          }
        }

        .form-group input {
          padding: 0;
          height: initial;
          width: initial;
          margin-bottom: 0;
          display: none;
          cursor: pointer;
        }

        .form-group label {
          display: flex;
          align-items: center;
          position: relative;
          cursor: pointer;
          user-select: none;

          p {
            margin: 0;
          }
        }

        .form-group label:before {
          content:'';
          -webkit-appearance: none;
          background-color: transparent;
          border: 1px solid #BABFC6;
          border-radius: 2px;
          width: 12px;
          height: 12px;
          display: inline-block;
          position: relative;
          vertical-align: middle;
          cursor: pointer;
          margin-right: 5px;
          transition: .2s;
        }

        .form-group input:checked + label:after {
          content: '';
          display: block;
          position: absolute;
          top: 6px;
          left: 5px;
          width: 3px;
          height: 8px;
          border: solid $brand-color-pink;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }
      }
    }
  }
</style>
