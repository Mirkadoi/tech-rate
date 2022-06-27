<template>
  <div class="recommendation">
    <h2 class="recommendation-title">Recommended to you</h2>

    <div class="posts-list">
      <div v-for="(item, i) in posts" :key="i" class="posts-item">
        <div class="posts-img" :style="{ backgroundImage: `url(${item.img})` }"/>

        <div class="posts-data">
          <div class="posts-title-wrapper">
            <p class="posts-title">{{ item.title }}</p>
          </div>

          <div class="posts-details">
            <a class="posts-tag" :href="item.tag.link">{{ item.tag.name }}</a>
            <p class="posts-date">{{ item.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    posts: [{
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
      title: 'Bdentity Verification. We will collect [multiple forms of] identification ',
      tag: { name: "Forebs", link: 'https://www.google.ru' },
      date: 'Mar 4, 2022'
    },{
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
      title: 'The date indicated in a Badge for a project',
      tag: { name: "Bloomberg", link: 'https://www.google.ru' },
      date: 'Mar 4, 2022'
    },{
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
      title: 'What Is Leverage in Crypto Trading?',
      tag: { name: "The Block", link: 'https://www.google.ru' },
      date: 'Mar 4, 2022'
    }]
  })
}
</script>

<style scoped lang="scss">
.recommendation {
  position: relative;
  background: #FAFAFA;
  padding: 70px 100px 100px;
  margin: 0 -100px;

  .recommendation-title {
    display: block;
    text-align: center;
    font-weight: 600;
    font-size: 32px;
    line-height: 130%;
    color: $color-black;
    margin-bottom: 40px;
    width: 100%;
  }

  .posts-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;

    .posts-item {
      border-radius: 8px;
      filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
      background-color: $color-white;

      .posts-img {
        width: 100%;
        height: 196px;
        border-radius: 8px;
        background-size: cover;
        background-position: center center;
      }

      .posts-data {
        padding: 16px 16px 24px;

        .posts-title-wrapper {
          height: 40px;

          .posts-title {
            font-weight: 700;
            font-size: 14px;
            line-height: 140%;
            margin: 0;
          }
        }

        .posts-details {
          display: flex;
          align-items: center;
          margin-top: 14px;

          .posts-tag {
            display: flex;
            align-items: center;
            padding: 3px 10px;
            height: 24px;
            background: rgba(249, 0, 116, 0.1);
            border-radius: 8px;
            font-weight: 400;
            font-size: 12px;
            color: $brand-color-pink;
            text-decoration: none;
            margin-right: 15px;
          }

          .posts-date {
            font-size: 14px;
            line-height: 19px;
            color: $text-color-dark-blue;
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
