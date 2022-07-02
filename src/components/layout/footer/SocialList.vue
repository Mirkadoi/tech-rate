<template>
  <div class="wrapper">
    <template v-for="{logo, title, link} in buttons" :key="logo">
      <a target="_blank" :href="link">
        <InlineSvg :src="require('@/assets/icons/' + logo +'.svg')" width="20" height="20" :title="title" fill="#ffffff"/>
      </a>
    </template>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';

  import { footerContactList } from '@/tools/dictionary';

  export default defineComponent ({
      setup() {
        const buttons = [
            ...footerContactList
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
