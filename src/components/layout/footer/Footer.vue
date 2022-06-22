<template>
  <footer class="footer">
    <BrandInfo class="brand"/>

    <div class="nav">
      <MenuList title="Navigation" :items="navigationItems"/>
      <MenuList title="Products" :items="productsItems"/>
      <MenuList title="Documents" :items="documentsItems"/>
    </div>

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
    position: fixed;
    display: flex;
    justify-content: space-between;
    left: 0;
    bottom: 0;
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
    display: flex;
    gap: 150px;
  }

  .social {
    margin-top: 50px;
  }
</style>
