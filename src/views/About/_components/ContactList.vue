<template>
  <div class="contacts">
    <div v-for="{logo, link, title, text} in contacts" :key="text" class="contacts--item">
      <InlineSvg class="contacts--item__icon" :src="require('@/assets/icons/' + logo +'.svg')" width="40" height="40" :title="title"/>
      <a class="contacts--item__link" v-if="title === 'Email'" :href="link" target="_self">{{text}}</a>
      <a class="contacts--item__link" v-else :href="link" target="_blank">{{text}}</a>
    </div>
  </div>
</template>

<script setup>
  import { contactList } from '@/tools/dictionary';

  const contacts = contactList;
</script>

<style lang="scss" scoped>
.contacts {
  display: flex;
  //justify-content: center;
  flex-wrap: wrap;
  gap: 30px;

  &--item {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    &__link {
      color: $text-color-black;
    }

    &__icon {
      //width: 30px;
      //height: 30px;
      fill: $background-colors-black;
    }
  }
}
</style>
