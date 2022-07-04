<template>
  <div class="list">
<!--    <span class="list__title list__item">{{ title }}</span>-->

    <div class="list__body list__item">
      <router-link :to="to" v-for="{title, to } in items" :key="title">
        {{ title }}
      </router-link>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent({
    props: {
      title: {
        type: String,
        required: true,
      },

      items: {
        type: Array,
        required: true,
      }
    }
  })
</script>

<style scoped lang="scss">
  .list {
    display: flex;
    //flex-direction: column;

    &__item {
      font-family: $font-base;
      color: $text-color-white;
    }

    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      margin-right: 10px;
      text-decoration: none;
    }

    &__body {
      display: flex;
      //flex-direction: column;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      gap: 20px;

      a {
        text-decoration: none;
        color: $text-color-white;
      }
    }
  }
</style>
