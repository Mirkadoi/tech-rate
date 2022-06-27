<template>
  <div class="topics">
    <div class="topics-tag-categories" v-for="(el, i) in tags" :key="i">
      <p>{{ el.name }}</p>

      <div class="tag-list">
        <span class="tag" v-for="tag in el.list" :key="tag">{{ tag }}</span>
      </div>
    </div>

    <div class="topics-grid">
      <div class="topics-item" v-for="(el, i) in topics" :key="i">
        <div class="item-img" :style="{ backgroundImage: `url(${el.img})` }"/>
        <div class="item-data">
          <h3>{{ el.title }}</h3>

          <div class="item-details">
            <span class="item-tag">{{ el.tag }}</span>
            <span class="item-date">{{ el.date }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="topics-controls">
      <button @click="showAll = !showAll">See more content about this topic</button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent ({
  data: () => ({
    showAll: false,
    tags: [
      {
        name: 'Topics:',
        list: ['Crypto', 'DeFi', 'Economics', 'Crypto', 'DeFi', 'Economics', 'Crypto', 'DeFi', 'Economics','Crypto', 'DeFi', 'Economics', 'Crypto', 'DeFi', 'Economics', 'Crypto', 'DeFi', 'Economics',]
      },
      {
        name: 'Topics:',
        list: ['Crypto', 'DeFi', 'Economics']
      }
    ],

    topics: [
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        title: 'What Is Wrapped Ether (WETH) and How to Wrap It?',
        tag: 'Crypto',
        date: 'Mar 4, 2022'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        title: 'What Is Wrapped Ether (WETH) and How to Wrap It?',
        tag: 'Crypto',
        date: 'Mar 4, 2022'
      },{
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        title: 'What Is Wrapped Ether (WETH) and How to Wrap It?',
        tag: 'Crypto',
        date: 'Mar 4, 2022'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        title: 'What Is Wrapped Ether (WETH) and How to Wrap It?',
        tag: 'Crypto',
        date: 'Mar 4, 2022'
      },{
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        title: 'How to create a DAO?',
        tag: 'Crypto',
        date: 'Mar 4, 2022'
      },
      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
        title: 'What Is Wrapped Ether (WETH) and How to Wrap It?',
        tag: 'Crypto',
        date: 'Mar 4, 2022'
      },
    ]
  }),
})
</script>

<style scoped lang="scss">
  .topics {
    padding: 54px 100px 65px;
    margin: 0 -100px;
    background: $background-colors-black;

    .topics-tag-categories {
      display: flex;
      margin-bottom: 15px;

      p {
        font-weight: 600;
        color: $color-white;
        margin: 0 15px 0 0 ;
      }

      .tag-list {
        .tag {
          display: inline-block;
          font-weight: 400;
          font-size: 12px;
          line-height: 16px;
          color: $text-color-gray;
          padding: 3px 15px 5px;
          border: 1px solid #535353;
          border-radius: 20px;
          margin-bottom: 15px;
          cursor: pointer;

          &:not(:last-child) {
            margin-right: 15px;
          }
        }
      }
    }

    .topics-grid {
      margin-top: 45px;
      display: flex;
      flex-wrap: wrap;

      .topics-item {
        display: flex;
        background: #2B2F35;
        border-radius: 20px;
        margin-bottom: 16px;
        overflow: hidden;
        height: 330px;

        .item-img {
          background-size: cover;
          background-position: center center;
          border-radius: 20px;
        }

        .item-data {
          h3 {
            color: $color-white;
            font-weight: 600;
            line-height: 135%;
            margin: 0;
          }
        }

        .item-details {
          display: flex;
          align-items: center;

          .item-tag {
            display: block;
            background-color: rgba(245, 133, 180, .2);
            border-radius: 8px;
            font-weight: 400;
            font-size: 12px;
            color: #FEEEF5;
            padding: 3px 10px 5px;
            margin-right: 15px;
          }

          .item-date {
            font-weight: 600;
            line-height: 22px;
            color: $text-color-gray;
          }
        }

        &:not(:nth-child(even)) {
          margin-right: 16px;
        }

        &:first-child, &:nth-child(4) {
          width: calc(70% - 8px);
          .item-img {
            min-width: 363px;
            height: 100%;
          }

          .item-data {
            padding: 75px 20px;

            h3 {
              font-size: 32px;
            }

            .item-details {
              margin-top: 16px;

              .item-date {
                font-size: 20px;
              }
            }
          }
        }

        &:nth-child(2), &:nth-child(3) {
          flex-direction: column;
          width: calc(30% - 8px);

          .item-img {
            width: 100%;
            min-height: 150px;
            border-radius: 0;
          }

          .item-data {
            padding: 18px 20px 24px;
            height: 100%;
            display: flex;
            flex-direction: column;

            h3 {
              font-size: 20px;
            }

            .item-details {
              margin-top: auto;
            }
          }
        }

        &:nth-last-child(2), &:last-child {
          width: calc(50% - 8px);
          height: 102px;

          .item-img {
            min-width: 180px;
          }

          .item-data {
            padding: 24px 20px;
            display: flex;
            align-items: center;

            h3 {
              font-size: 20px;
            }

            .item-details {
              display: none;
            }
          }
        }
      }
    }

    .topics-controls {
      text-align: center;

      button {
        margin-top: 50px;
        letter-spacing: 0.03em;
        text-transform: uppercase;
        color: $color-white;
        background-color: transparent;
        border: none;
        cursor: pointer;
      }
    }
  }
</style>
