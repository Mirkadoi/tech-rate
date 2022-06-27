<template>
  <div class="post-wrapper">
    <div class="post-content">
      <div class="post-img" :style="{ backgroundImage: `url(${img})` }"/>
      <h1 class="post-title">{{ title }}</h1>

      <div class="post-details">
        <span class="tag">{{ tag.name }}</span>
        <span class="date">{{ date }}</span>
      </div>

      <div v-for="(el, i) in blocks" :key="i" class="post-block">
        <h3 v-if="el.title">{{ el.title }}</h3>

        <template v-if="el.text">
          <p v-for="(text, textI) in el.text" :key="textI">{{ text }}</p>
        </template>

        <div v-if="el.img" class="block-img" :style="{ backgroundImage: `url(${el.img})` }"/>
        <span v-if="el.subscription" class="block-subscription">{{ el.subscription }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
    title: 'What Is Leverage in Crypto Trading?',
    tag: { name: "Crypto", link: 'https://www.google.ru' },
    date: 'Mar 4, 2022',
    blocks: [
      {
        title: 'Introduction',
        text: [
          'Applications, forums, blogs, social media accounts and other platforms on CertiK’s website does not constitute an endorsement, guarantee, warranty, or recommendation by CertiK.',
          'All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms on CertiK’s website does not constitute an endorsement, guarantee, warranty, or recommendation by CertiK. ',
          'Applications, forums, blogs, social media accounts and other platforms on CertiK’s website does not constitute an endorsement, guarantee, warranty, or recommendation by CertiK.'
        ]
      },
      {
        title: 'What is FC Porto Fan Token (PORTO) and how does it work?',
        text: [
          'Applications, forums, blogs, social media accounts and other platforms on CertiK’s website does not constitute an endorsement, guarantee, warranty, or recommendation by CertiK.',
          'All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, social media accounts and other platforms on CertiK’s website does not constitute an endorsement, guarantee, warranty, or recommendation by CertiK. ',
        ]
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        subscription: 'Recommendation by CertiK.'
      },
      {
        title: 'Closing thoughts',
        text: [
          'Applications, forums, blogs, social media accounts and other platforms on CertiK’s website does not constitute an endorsement, guarantee, warranty, or recommendation by CertiK.',
        ]
      }
    ]
  })
}
</script>


<style scoped lang="scss">
  .post-wrapper {
    display: flex;
    justify-content: center;
    background-color: $color-white;
    margin: 0 -100px;

    .post-content {
      padding: 44px 0 70px;
      width: 662px;

      .post-img {
        width: 100%;
        height: 368px;
        border-radius: 8px;
        background-size: cover;
        background-position: center center;
      }

      .post-title {
        font-weight: 700;
        font-size: 46px;
        line-height: 120%;
        color: $text-color-black;
        margin-bottom: 30px;
      }

      .post-details {
        display: flex;
        align-items: center;
        margin-bottom: 50px;

        .tag {
          background: rgba(249, 0, 116, 0.1);
          border-radius: 8px;
          padding: 3px 10px 5px;
          font-size: 12px;
          line-height: 16px;
          color: $brand-color-pink;
          margin-right: 12px;
        }

        .date {
          font-size: 14px;
          line-height: 19px;
          color: $text-color-dark-blue;
        }
      }

      .post-block {
        h3 {
          font-weight: 600;
          font-size: 32px;
          line-height: 150%;
          color: $color-black;
          margin: 50px 0 20px;
        }

        p {
          font-weight: 400;
          font-size: 20px;
          line-height: 150%;
          color: $text-color-black;
          margin-bottom: 20px;
        }

        .block-img {
          height: 186px;
          margin-top: 50px;
          border-radius: 8px;
        }

        .block-subscription {
          display: block;
          width: 100%;
          font-style: italic;
          font-weight: 400;
          font-size: 14px;
          line-height: 150%;
          margin-top: 10px;
          color: $text-color-dark-blue;
          text-align: center;
        }
      }
    }
  }
</style>