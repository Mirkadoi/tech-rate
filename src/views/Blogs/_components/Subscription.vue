<template>
  <div class="subscription">
    <div class="subscription-img">
      <img src="../_assets/subscription.png" alt="">
    </div>

    <div class="subscription-form">
      <h1>No noise. Just signal.</h1>
      <p>Get the latest audited projects in our telegram channel.</p>

<!--      <div class="form-input">-->
        <a class="btn btn--secondary" target="_blank" href="https://t.me/techrate_audits">Subscribe</a>
<!--      </div>-->
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
})
</script>

<style scoped lang="scss">
  .subscription {
    display: flex;
    align-items: center;
    padding: 13px 100px 25px;
    background: #F5F5F5;

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

      a {
        text-decoration: none;
      }
    }
  }
</style>
