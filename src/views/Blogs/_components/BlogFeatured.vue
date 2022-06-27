<template>
  <div class="blog-featured">
    <h4 class="blog-category">{{ post.category }}</h4>

    <div class="blog-img" :style="{ backgroundImage: `url(${post.img})` }"/>

    <h3 class="blog-title">{{ post.title }}</h3>
    <span class="blog-date">{{ post.date }}</span>
    <span class="blog-tag">{{ post.tag.name }}</span>
  </div>
</template>

<script>
export default {
  data: () => ({
    post: {
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
      category: 'featured',
      title: 'What Is Leverage in Crypto Trading?',
      date: 'Mar 4, 2022',
      tag: { name: 'Crypto', link: 'https://www.google.ru' },
    }
  })
}
</script>

<style scoped lang="scss">
.blog-featured {
  margin-right: -100px;
  padding: 46px 100px 30px 30px;
  background: $background-colors-white;
  border: 1px solid $border-color-l1;
  border-radius: 0px 0px 0px 8px;

  .blog-category {
    font-weight: 700;
    line-height: 150%;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    margin: 0 0 8px;
  }

  .blog-img {
    width: 100%;
    height: 287px;
    border-radius: 8px;
    background-size: cover;
    background-position: center center;
    margin: 0 0 30px;
  }

  .blog-title {
    font-weight: 700;
    font-size: 20px;
    line-height: 120%;
    margin: 0 0 20px;
  }

  .blog-date {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: $text-color-dark-blue;
    margin: 0 0 16px;
    display: block;
  }

  .blog-tag {
    display: block;
    width: fit-content;
    padding: 7px 10px;
    background: rgba(249, 0, 116, 0.1);
    border-radius: 8px;
    font-weight: 400;
    color: $brand-color-pink;
  }
}
</style>
