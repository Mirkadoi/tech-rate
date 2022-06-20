<template>
  <header class="header">
<!--    <Button title="ТестКнопка" mode="primary"/>-->
<!--    <Button title="ТестКнопка2" mode="secondary"/>-->
<!--    <Button title="ТестКнопка3" mode="tertiary"/>-->
    <Icon width="83" height="32" iconName="TechRate">
      <TechRateLogo />
    </Icon>

    <div class="nav">
      <router-link class="nav-link" to="/">Products</router-link>

      <router-link class="nav-link" to="/blog">Blog</router-link>

      <Button title="Get Audit" mode="primary" @click="openFeedbackWindow"/>
    </div>
  </header>
</template>

<script>
  import Button from '@/components/Button';
  import Icon from '@/components/Icon';
  import TechRateLogo from '@/components/icons/TechRateLogo';

  export default {
    components: {
      Button,
      Icon,
      TechRateLogo,
    },

    methods: {
      openFeedbackWindow() {
        console.log('открыть')
      }
    }
  }
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

  .nav {
    display: flex;
    align-items: center;
    font-size: 16px;
    flex-direction: row;
    gap: 50px;
  }

  .nav-link {
    font-family: $font-base;
    font-weight: 400;
    color: $color-white;
    text-decoration: none;
  }
</style>
