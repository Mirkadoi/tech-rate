<template>
  <header class="header">
    <InlineSvg :src="require('@/assets/icons/tech-rate-logo.svg')" width="83" height="32" fill="white" title="TechRate"/>

    <div class="btn-group">
      <div class="nav">
          <VMenu :arrow-padding="999">
            <div class="nav-link">
              <span>Products</span>
              <InlineSvg :src="require('@/assets/icons/arrow.svg')" width="14" height="14" fill="white" title="TechRate"/>
            </div>

            <template #popper>
              <div class="menu-list">
                <router-link class="menu-list__element" v-for="{ title, to } in products" :key="title" :to="to">
                  {{ title }}
                </router-link>
              </div>

            </template>

          </VMenu>


        <router-link class="nav-link" to="/blog">Blog</router-link>
      </div>

      <Button title="Get Audit" mode="primary" @onClick="onOpenFeedbackWindow"/>
    </div>
  </header>
</template>

<script>
  import { defineComponent } from 'vue'

  import Button from '@/components/ui/Button';
  import FeedbackDialog from '@/components/layout/header/FeedbackDialog';

  export default defineComponent({
    components: {
      Button,
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
    },

    setup() {
      const products = [{title: ' Defi Generator', to: ''}]

      return { products }
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
    box-sizing: border-box;

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
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $font-base;
    font-weight: 400;
    color: $color-white;
    text-decoration: none;
    gap: 5px;
  }

  .menu-list {
    padding: 20px 10px;

    &__element {
      padding: 5px 10px;
      font-family: $font-alt;
      font-size: 16px;
      font-weight: 400;
      text-decoration: none;
      color: $text-color-black;
      transition: background-color 0.3s ease-in;

      &:hover {
        background-color: rgba(128, 128, 128, 0.1);
      }
    }
  }
</style>
