<template>
  <footer class="footer">
    <BrandInfo class="brand"/>

    <MenuList class="nav" title="Navigation" :items="navigationItems"/>

    <Social class="social"/>
  </footer>
</template>

<script>
  import { defineComponent } from 'vue';

  import BrandInfo from '@/components/layout/footer/BrandInfo';
  import MenuList from '@/components/layout/footer/MenuList';
  import Social from '@/components/layout/footer/Social';

  export default defineComponent ({
    components: {
      BrandInfo,
      MenuList,
      Social
    },

    setup() {
      const navigationItems = ['About us', 'Blog', 'Desclimer', 'Contact'];
      const productsItems = ['TimeWarp', 'LaborX', 'PaymentX', 'Audit', 'Time Bridge'];
      const documentsItems = ['TimeWarp', 'PaymentX'];

      return { navigationItems, productsItems, documentsItems }
    }
  })
</script>

<style lang="scss" scoped>
  .footer {
    display: flex;
    justify-content: space-between;
    height: 285px;
    width: 100%;
    background-color: $color-black;
    padding-left: 100px;
    padding-right: 100px;
    box-sizing: border-box;
  }

  .brand {
    margin-top: 40px;
  }

  .nav {
    margin-top: 55px;
  }

  .social {
    margin-top: 50px;
  }
</style>
