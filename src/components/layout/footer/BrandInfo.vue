<template>
  <div class="wrapper">
    <div class="images">
      <router-link to="/">
        <InlineSvg :src="require('@/assets/icons/tech-rate-logo.svg')" width="83" height="32" fill="white" title="TechRate"/>
      </router-link>

      <a href="https://defisec.info" target="_blank" style="margin-right: -20px">
        <InlineSvg :src="require('@/assets/icons/ds-amember-badge.svg')" width="110" height="30" fill="white" title="TechRate"/>
      </a>
    </div>

    <span class="text">@ 2018 by TechRate. All Rights Reserved</span>
  </div>
</template>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .images {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }

  .text {
    font-family: $font-base;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    color: $text-color-gray;
  }
</style>
