<template>
  <div class="news-list">
    <div v-for="(item, i) in news" :key="i" class="news-item">
<!--      <img class="news-img" :src="item.img" alt="">-->

      <div class="news-img" :style="{ backgroundImage: `url(${item.img})` }"/>

      <div class="news-data">
        <div class="news-title-wrapper">
          <p class="news-title">{{ item.title }}</p>
        </div>

        <div class="news-details">
          <a class="news-source" :href="item.source.link">{{ item.source.name }}</a>
          <p class="news-date">{{ item.date }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    news: [{
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
      title: 'Bdentity Verification. We will collect [multiple forms of] identification ',
      source: { name: "Forebs", link: 'https://www.google.ru' },
      date: 'Mar 4, 2022'
    },{
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
      title: 'The date indicated in a Badge for a project',
      source: { name: "Bloomberg", link: 'https://www.google.ru' },
      date: 'Mar 4, 2022'
    },{
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
      title: 'What Is Leverage in Crypto Trading?',
      source: { name: "The Block", link: 'https://www.google.ru' },
      date: 'Mar 4, 2022'
    },{
      img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
      title: 'Badge is NOT a guarantee that the information that a developer',
      source: { name: "Coindesk", link: 'https://www.google.ru' },
      date: 'Mar 4, 2022'
    },]
  })
}
</script>

<style scoped lang="scss">
  .news-list {
    display: flex;

    .news-item {
      flex: 1;
      border: 1px solid $border-color-l1;
      border-radius: 8px;
      filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
      background-color: $color-white;

      &:not(:last-child) {
        margin-right: 30px;
      }

      .news-img {
        width: 100%;
        height: 152px;
        border-radius: 8px;
        background-size: cover;
        background-position: center center;
      }

      .news-data {
        padding: 16px 16px 24px;

        .news-title-wrapper {
          height: 40px;

          .news-title {
            font-weight: 700;
            font-size: 14px;
            line-height: 140%;
            margin: 0;
          }
        }

        .news-details {
          display: flex;
          justify-content: space-between;
          margin-top: 22px;

          .news-source {
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            color: $brand-color-pink;
            text-decoration: none;
            margin: 0;
          }
          .news-date {
            font-size: 14px;
            line-height: 19px;
            color: $text-color-dark-blue;
            margin: 0;
          }
        }

      }
    }
  }
</style>
