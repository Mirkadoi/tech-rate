<template>
  <div class="wrapper-preview">
    <div class="wrapper-group">
      <div class="board">
        <template v-for="({ logo, title, number, subtitle}, index) in columns" :key="title">
          <div class="board-item">
            <img class="board-item__img" :src="require('@/assets/images/'+ logo +'.png')" :alt="logo">
            <span class="board-item__title">{{ title }}</span>
            <div class="board-item__number">{{ number }}</div>
            <span class="board-item__subtitle">{{ subtitle }}</span>
          </div>

          <div v-if="columns.length - 1 !== index" class="separator" />
        </template>
      </div>

      <div class="finder">
        <VSelect
            class="select"
            label="token"
            :noDrop="!options.length"
            :filterable="false"
            placeholder="Search project by name or token"
            :options="options"
            @search="onSearch"
        >
          <template #no-options>
            Type to search...
          </template>
          <template #search="{ attributes, events }">
            <Chips :title="searchField === 'name' ? 'by name' : 'by token'" btn @onClick="toggleSearchField"/>
<!--            <InlineSvg :src="require('@/assets/icons/magnifier.svg')" width="16" height="16" fill="#5E6A7B" />-->
            <input
                class="vs__search"
                v-bind="attributes"
                v-on="events"
            />
          </template>
        </VSelect>

      </div>
    </div>

    <TopCarousel />
  </div>
</template>

<script>
  import {
    defineComponent,
    ref,
  } from 'vue';


  import VSelect from 'vue-select'
  import 'vue-select/dist/vue-select.css';

  import debounce from 'debounce';

  import Chips from '@/components/ui/Chips';
  import TopCarousel from '@/views/Home/_components/TopCarousel';


  export default defineComponent({
    components: {
      TopCarousel,
      VSelect,
      Chips
    },

    methods: {
      onSearch(search, loading) {
        if (search.length > 3) {
          loading(true);
          this.search(loading, search, this);
        }
      },
      toggleSearchField() {
        this.searchField = this.searchField === 'name' ? 'token' : 'name';
      },
      search: debounce((loading, search) => {
        fetch(
            `https://api.github.com/search/repositories?q=${escape(search)}`
        ).then(() => {
          // res.json().then(json => (vm.options = json.items));
        }).finally(() => loading(false));
      }, 350)
    },

    setup() {
      const columns = [
        { logo: 'rocket', title: 'Projects audited', number: 0, subtitle: 'Current finantial year' },
        { logo: 'binance-logo', title: 'BSC projects', number: 0, subtitle: 'Current finantial year' },
      ]

      const searchField = ref('name');
      const options = ref([]);

      return { columns, options, searchField }
    }
  })
</script>

<style scoped lang="scss">
  .wrapper-preview {
    display: flex;
    gap: 30px;
  }

  .wrapper-group {
    display: flex;
    flex-direction: column;
    flex: 0 0 auto;
    gap: 35px;
  }

  .board {
    display: flex;
    background-color: $color-white;
    border: 1px solid $border-color-l1;
    border-radius: 20px;

    .separator {
      align-self: center;
      width: 2px;
      height: 162px;
      background-color: $border-color-l1;
    }
  }

  .board-item {
    display: flex;
    margin: auto;
    flex-direction: column;
    font-family: $font-base;
    padding: 40px 30px 50px 30px;

    &__img {
      width: 24px;
      height: 24px;
      margin-bottom: 20px;
    }

    &__title {
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      color: $text-color-dark-blue;
    }

    &__subtitle {
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      color: $text-color-dark-blue;
    }

    &__number {
      font-style: normal;
      font-weight: 700;
      font-size: 28px;
      line-height: 38px;
      color: $text-color-black;
    }
  }


  //.finder {
  //
  //}

  :deep(.select) {
    .vs__dropdown-toggle,
    .vs__dropdown-menu {
      background-color: $color-white;
      padding: 16px 10px;
      border: 1px solid $border-color-l1;
      box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.07);
      border-radius: 8px;

      .vs__selected-options {
        //align-items: baseline !important;
      }

      .vs__search {
        height: 22px;
        margin: 0;

        &::placeholder {
          font-family: $font-base;
          font-style: normal;
          font-weight: 400;
          font-size: 16px;
          line-height: 22px;
          color: #B5BAC2;
        }
      }

      .vs__actions {
        svg {
          display: none;
        }

        .vs__spinner, .vs__spinner:after {
          width: 20px;
          height: 20px;
        }
      }

      .vs__selected-options {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
</style>
