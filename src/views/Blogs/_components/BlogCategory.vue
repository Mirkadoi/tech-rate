<template>
  <div class="posts-wrapper">
    <div class="posts-top">
      <h3>{{ categoryName }}</h3>
      <div @click="showAll = !showAll">See all blockchain content</div>
    </div>

    <div class="posts-list">
      <template v-if="displayedBlogList.length">
        <Card v-for="item in displayedBlogList" :key="item.uid" class="posts-item" :item="item" @click="redirectToBlog(item.uid)" />
      </template>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import { store } from '../_store/index'

import Card from '@/components/ui/Card';

export default {
  components: { Card },
  props: {
    categoryName: String
  },

  // data: () => ({
  //   showAll: false,
  //   posts: [{
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
  //     title: 'Bdentity Verification. We will collect [multiple forms of] identification ',
  //     tag: { name: "Forebs", link: 'https://www.google.ru' },
  //     date: 'Mar 4, 2022',
  //     id: 1
  //   },{
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
  //     title: 'The date indicated in a Badge for a project',
  //     tag: { name: "Bloomberg", link: 'https://www.google.ru' },
  //     date: 'Mar 4, 2022',
  //     id: 2
  //   },{
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
  //     title: 'What Is Leverage in Crypto Trading?',
  //     tag: { name: "The Block", link: 'https://www.google.ru' },
  //     date: 'Mar 4, 2022',
  //     id: 3
  //   },{
  //     img: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg',
  //     title: 'Badge is NOT a guarantee that the information that a developer',
  //     tag: { name: "Coindesk", link: 'https://www.google.ru' },
  //     date: 'Mar 4, 2022',
  //     id: 4
  //   },]
  // }),

  computed: {
    displayedBlogList() {
      return this.showAll ? store.blogList : store.blogList.slice(0, 3);
    }
  },

  methods: {
    init() {
      store.setBlogList()
    },

    redirectToBlog(id) {
      this.$router.push({ name: 'blog', params: { id } })
    }
  },

  created() {
    this.init()
  },

  setup() {
    const showAll = ref(false);
    // const blogList = ref([]);

    return { showAll }
  }
}
</script>

<style scoped lang="scss">
.posts-wrapper {
  //margin-top: 1px;
}

.posts-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  h3 {
    font-weight: 600;
    margin: 0;
  }

  div {
    cursor: pointer;
    text-transform: uppercase;
    color: $brand-color-pink;
  }
}

.posts-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 30px;
  margin-bottom: 100px;

  .posts-item {
    cursor: pointer;
    //border-radius: 8px;
    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.1));
    //background-color: $color-white;

    //.posts-img {
    //  width: 100%;
    //  height: 196px;
    //  border-radius: 8px;
    //  background-size: cover;
    //  background-position: center center;
    //}

    //.posts-data {
    //  padding: 16px 16px 24px;
    //
    //  .posts-title-wrapper {
    //    height: 40px;
    //
    //    .posts-title {
    //      font-weight: 700;
    //      font-size: 14px;
    //      line-height: 140%;
    //      margin: 0;
    //    }
    //  }
    //
    //  .posts-details {
    //    display: flex;
    //    align-items: center;
    //    margin-top: 22px;
    //
    //    .posts-tag {
    //      display: flex;
    //      align-items: center;
    //      padding: 3px 10px;
    //      height: 24px;
    //      background: rgba(249, 0, 116, 0.1);
    //      border-radius: 8px;
    //      font-weight: 400;
    //      font-size: 12px;
    //      color: $brand-color-pink;
    //      text-decoration: none;
    //      margin-right: 15px;
    //    }
    //
    //    .posts-date {
    //      font-size: 14px;
    //      line-height: 19px;
    //      color: $text-color-dark-blue;
    //      margin: 0;
    //    }
    //  }
    //
    //}
  }
}
</style>
