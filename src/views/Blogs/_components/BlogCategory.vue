<template>
  <div class="posts-wrapper">
    <div class="posts-top">
      <h3>{{ categoryName }}</h3>
      <div @click="showAll = !showAll">{{displayedTitleTop}}</div>
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

  computed: {
    displayedBlogList() {
      return this.showAll ? store.blogList : store.blogList.slice(0, 12);
    },

    displayedTitleTop() {
      return !this.showAll ? 'See all blockchain content' : 'Hide part blockchain content';
    }
  },

  methods: {
    init() {
      store.setBlogList()
    },

    redirectToBlog(uid) {
      this.$router.push({ name: 'blog', params: { uid } })
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
