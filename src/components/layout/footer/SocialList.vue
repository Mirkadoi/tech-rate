<template>
  <div class="wrapper">
    <template v-for="{logo, title} in buttons" :key="logo">
      <a href="">
        <InlineSvg class="" :src="require('@/assets/icons/' + logo +'.svg')" width="20" height="20" :title="title"/>
      </a>
    </template>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  export default defineComponent ({
      setup() {
        const buttons = [
          {logo: 'telegram-logo', title: 'Телеграм',},
          {logo: 'twitter-logo', title: 'Твитер',},
          {logo: 'github-logo', title: 'Гитхаб',},
        ]

        return { buttons }
      }
  })
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    gap: 20px;
  }
</style>
