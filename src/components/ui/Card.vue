<template>
  <div class="card">
    <div class="card__img" :style="{backgroundImage: `url(${item.image})`}"/>

    <div class="card__body body">
      <span class="body__header">{{ item.name }}</span>

      <div class="body__footer">
        <div class="body__tags">
          <Chips v-for="tag in item.tags" :key="tag" class="body__tag" :title="tag"/>
        </div>
        <span class="body__date">{{ new Date(item.created).toLocaleDateString('en-us', { month: 'short', year: 'numeric', day: 'numeric' }) }}</span>
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
    border-radius: 20px;
    width: 100%;
    height: 100%;

    &__img {
      //width: 100%;
      border-radius: 20px;
      height: 186px;
      background-repeat: no-repeat;
      //background-attachment: fixed;
      background-position: center;
      background-size: cover;

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
        text-align: left;
      }

      &__footer {
        display: flex;
        align-items: baseline;
        gap: 15px;
        //font-family: $font-base;
        //font-style: normal;
        //font-weight: 700;
        //font-size: 14px;
        //line-height: 120%;
        //color: $text-color-black;
      }

      &__tags {
        display: flex;
        gap: 5px;
      }

      &__date {
        font-family: $font-base;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        color: $text-color-dark-blue;
      }
    }
  }
</style>
