<template>
  <div style="background-color: #38b66d">
    <Button title="ТестКнопка" mode="primary"/>
    <Button title="ТестКнопка2" mode="secondary"/>
    <Button title="ТестКнопка3" mode="tertiary"/>
  </div>
</template>

<script>
  import Button from '@/components/Button';

  export default {
    components: {
      Button,
    }
  }
</script>
