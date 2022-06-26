<template>
  <div class="card">
    <div class="card__img" :style="{backgroundImage: `url(${item.img})`}"/>

    <div class="card__body body">
      <span class="body__header">{{ item.title }}</span>

      <div class="body__footer">
        <Chips class="body__tag" :title="item.tag"/>
        <span class="body__date">{{ item.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import Chips from '@/components/ui/Chips';

  export default defineComponent ({
    components: {
      Chips,
    },

    props: {
      item: {
        type: Object,
        required: true,
      }
    }
  })
</script>

<style lang="scss" scoped>
  .card {
    background-color: $color-white;
    border: 1px solid $border-color-l1;
    border-radius: 20px;

    &__img {
      width: 100%;
      border-radius: 20px;
      height: 186px;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-position: center;
    }

    .body {
      display: flex;
      flex-direction: column;
      padding: 25px 20px;
      gap: 25px;

      &__header {
        font-family: $font-base;
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 120%;
        color: $text-color-black;
      }

      &__footer {
        display: flex;
        gap: 15px;
        //font-family: $font-base;
        //font-style: normal;
        //font-weight: 700;
        //font-size: 14px;
        //line-height: 120%;
        //color: $text-color-black;
      }

      &__date {
        font-family: $font-base;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: $text-color-dark-blue;
      }
    }
  }
</style>
