<template>
  <div class="blog-about">
    <h4>learn more about</h4>
    <h1>Blockchain &<br/>Crypto</h1>
    <p>All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms on TechRate’s website does not constitute an endorsement.</p>
<!--    <button @click="readMode">Read more</button>-->
  </div>
</template>

<!--<script>-->
<!--export default {-->
<!--  methods: {-->
<!--    readMode() {-->
<!--      alert('read more')-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<style scoped lang="scss">
.blog-about {
  padding: 97px 70px 0 0;

  h4 {
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin: 0 0 8px;
  }

  h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 110%;
    margin: 0 0 30px;
  }

  p {
    margin: 0 0 40px;
  }

  button {
    padding: 9px 20px;
    background: $brand-color-pink;
    border-radius: 8px;
    border: none;
    font-weight: 600;
    color: #F9F9F9;
    cursor: pointer;
  }
}
</style>
