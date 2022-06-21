<template>
  <header class="header">
    <Icon width="83" height="32" iconName="TechRate">
      <TechRateLogo />
    </Icon>

    <div class="btn-group">
      <div class="nav">
        <router-link class="nav-link" to="/">Products</router-link>

        <router-link class="nav-link" to="/blog">Blog</router-link>
      </div>

      <Button title="Get Audit" mode="primary" @onClick="onOpenFeedbackWindow"/>
    </div>
  </header>
</template>

<script>
  import { defineComponent } from 'vue'

  import Button from '@/components/Button';
  import Icon from '@/components/Icon';
  import TechRateLogo from '@/components/icons/TechRateLogo';
  import FeedbackDialog from '@/components/layout/header/FeedbackDialog';

  export default defineComponent({
    components: {
      Button,
      Icon,
      TechRateLogo,
    },

    methods: {
      onOpenFeedbackWindow() {
        this.$dialog.addDialog({
          component: FeedbackDialog,
          // props: {
          //   info: 'Some kind of message from outside InfoDialog',
          // },
        });
      }
    }
  })
</script>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 100px;
    height: 30px;
    background-color: $color-black;

    @include xl {
      height: 78px;
    }
  }

  .btn-group {
    display: flex;
    align-items: center;
    gap: 50px;
  }

  .nav {
    display: flex;
    font-size: 16px;
    gap: 50px;
  }

  .nav-link {
    font-family: $font-base;
    font-weight: 400;
    color: $color-white;
    text-decoration: none;
  }
</style>
