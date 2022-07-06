<template>
  <div class="wrapper-preview">
    <div class="wrapper-group">
      <div class="board">
        <template v-for="({ logo, title, code, subtitle}, index) in columns" :key="title">
          <div class="board-item">
            <img class="board-item__img" :src="require('@/assets/images/'+ logo +'.png')" :alt="logo">
            <span class="board-item__title">{{ title }}</span>
            <div class="board-item__number">{{ columnsValue[code] }}</div>
            <span class="board-item__subtitle">{{ subtitle }}</span>
          </div>

          <div v-if="columns.length - 1 !== index" class="separator" />
        </template>
      </div>

      <div class="finder">
        <VSelect
            class="select"
            label="token"
            v-model="selected"
            :noDrop="!options.length"
            :filterable="false"
            placeholder="Search project by name or token"
            :options="options"
            @search="onSearch"
            @option:selected="handleInputSearch"
        >
          <template #search="{ attributes, events }">
            <Chips class="vs__search__chip" :class="{'vs__search__chip--disabled': selected && selected.name}" :title="searchOption.title" btn @onClick="toggleSearchByField"/>
            <input
                class="vs__search"
                v-bind="attributes"
                v-on="events"
            />
          </template>
          <template #option="option">
            <div>{{ option.name }}</div>
          </template>
          <template #selected-option="{ name }">
            <div style="display: flex; align-items: baseline">
              {{name}}
            </div>
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

  import { debounce } from "js-debounce-throttle";

  import Chips from '@/components/ui/Chips';
  import TopCarousel from '@/views/Home/_components/TopCarousel';

  import {
    getBSCAudited,
    getProjectsAudited,
    getTokenBySearch
  } from '@/views/Home/requests';

  import { store } from '../_store/index'

  export default defineComponent({
    components: {
      TopCarousel,
      VSelect,
      Chips
    },

    computed: {
      searchOption() {
        return this.searchByField === 'name'
            ? { title: 'by name', query: 'search' }
            : { title: 'by token', query: 'contract_address' }
      }
    },

    methods: {
      onSearch(search, loading) {
        if (search.length > 3) {
          loading(true);
          this.search(loading, search, this);
        }
      },
      toggleSearchByField() {
        if (this.selected && this.selected.name) return;

        this.searchByField = this.searchByField === 'name' ? 'token' : 'name';
      },
      search: debounce((loading, search, vm) => {
        getTokenBySearch({ [vm.searchOption.query]: search}).then((res) => {
          const { results } = res;

          vm.options = results;
        }).finally(() => loading(false));
      }, 450),

      formatNumber(value = 0) {
        return new Intl.NumberFormat('en-GB', {
          notation: "compact",
          compactDisplay: "short"
        }).format(value);
      },

      handleInputSearch(val) {
        // console.log(a)
        store.setSearchValue(val.name)
        store.setSelectedProject('');
        store.getAllProjectItems({page: 1})
      }
    },

    async created() {
      const { count: allCount } = await getProjectsAudited()
      const { count: bscCount } = await getBSCAudited()

      this.columnsValue.all = this.formatNumber(allCount);
      this.columnsValue.bsc = this.formatNumber(bscCount);
    },

    watch: {
      selected(v) {
        if (v === null) {
          store.setSearchValue('')

          return store.getAllProjectItems()
        }
      }
    },

    setup() {
      const columns = [
        { logo: 'rocket', title: 'Projects audited', subtitle: 'Current finantial year', code: 'all' },
        { logo: 'binance-logo', title: 'BSC projects', subtitle: 'Current finantial year', code: 'bsc' },
      ]

      const columnsValue = ref({
        all: 0,
        bsc: 0,
      })

      const searchByField = ref('name');
      const options = ref([]);
      const selected = ref([]);

      return { columns, options, searchByField, columnsValue, selected }
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
        //height: 22px;
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

      .vs__search__chip {
        position: absolute;
        top: 2px;
        left: -72px;

        &--disabled {
          opacity: 0.6;
          pointer-events: none;
        }
      }

      .vs__actions .vs__open-indicator {
        //svg {
        display: none;
        //}
      }
      .vs__spinner {
        width: 17px !important;
        height: 17px !important;;
      }

      .vs__selected-options {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-left: 75px;
      }

      .vs__selected {
        margin: 0;

      }
    }
  }
</style>
