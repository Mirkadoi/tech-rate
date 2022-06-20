<template>
  <div style="background-color: #38b66d">
    <Button title="ТестКнопка" mode="primary"/>
    <Button title="ТестКнопка2" mode="secondary"/>
    <Button title="ТестКнопка3" mode="tertiary"/>
    <Icon iconCode="Arrow"></Icon>
  </div>
</template>

<script>
  import Button from '@/components/Button';
  import Icon from '@/components/Icon';

  export default {
    components: {
      Button,
      Icon,
    }
  }
</script>
