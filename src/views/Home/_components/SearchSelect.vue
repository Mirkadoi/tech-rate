<template>
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
      <InlineSvg :src="require('@/assets/icons/magnifier.svg')" width="16" height="16" fill="#5E6A7B" />
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
<!--      <div class="selected-item">-->
        {{name}}
<!--      </div>-->
    </template>
  </VSelect>
</template>

<script setup>
  import {
    watch,
    ref
  } from 'vue';
  import { debounce } from "js-debounce-throttle";
  //
  import VSelect from 'vue-select'
  import 'vue-select/dist/vue-select.css';

  import { getTokenBySearch } from '@/views/Home/requests';
  import { store } from '@/views/Home/_store';


  const options = ref([]);
  const selected = ref([]);

  const search = debounce((loading, search) => {
    getTokenBySearch(search).then((res) => {
      const { results } = res;

      options.value = results;
    }).finally(() => loading(false));
  }, 450)


  function onSearch(searchValue, loading) {
    if (searchValue.length > 3) {
      loading(true);
      search(loading, searchValue, this);
    }
  }

  function handleInputSearch(val) {
    store.setHomeStoreState('searchValue', val.name)
    store.setHomeStoreState('projectTabSelected', null);
    store.setHomeStoreState('sortOption', { field: null, dir: 0 });
    store.goToProjectPage(1);
  }

  watch(() => selected.value, (v)=> {
    if (v === null) {
      store.setHomeStoreState('searchValue','')
      store.setHomeStoreState('sortOption', { field: null, dir: 0 });
      store.goToProjectPage(1);
    }
  })
</script>

<style lang="scss" scoped>
  .select {
    :deep(.vs__dropdown-toggle),
    :deep(.vs__dropdown-menu) {
      background-color: $color-white;
      padding: 16px 10px;
      border: 1px solid $border-color-l1;
      //box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.07);
      border-radius: 8px;

      //.vs__selected-options {
      //  //align-items: baseline !important;
      //}

      .vs__search {
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
        padding-top: 0;
      }

      .vs__actions .vs__open-indicator {
        display: none;
      }
      .vs__spinner {
        width: 17px !important;
        height: 17px !important;;
      }

      .vs__selected-options {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        svg {
          order: 0;
          margin-left: 3px;
        }

        input {
          order: 3;
          padding: 0;
          border: none;
        }

        .vs__selected {
          border: none;
          order: 1;
          margin: 0;
          padding: 0;
        }
      }

      .selected-item {
        //display: flex;
        //align-items: baseline;
      }
    }
  }
</style>
