<template>
  <GDialog v-model="dialogState" :max-width="steps[step].maxWidth" border-radius="20">
    <component :is="steps[step].component" @closeModal="dialogState = false" @changeStep="changeStep"/>
  </GDialog>
</template>

<script>
  import { defineComponent, ref } from 'vue'
  import FeedbackForm from '@/components/layout/header/FeedbackForm';
  import FeedbackNotification from '@/components/layout/header/FeedbackNotification';

  export default defineComponent({
    props: {
      modelValue: {
        type: Boolean,
        default: false,
      },
    },

    emits: ['update:modelValue'],

    computed: {
      dialogState: {
        get() {
          return this.modelValue
        },

        set(value) {
          this.$emit('update:modelValue', value)
        },
      },
    },

    methods: {
      changeStep(name) {
        this.step = name;
      }
    },

    setup() {
      // const step = ref('FeedbackNotification')
      const step = ref('FeedbackForm')
      const steps = {
        FeedbackForm: {
          component: FeedbackForm,
          maxWidth: '535'
        },
        FeedbackNotification: {
          component: FeedbackNotification,
          maxWidth: '369'
        },
      }

      return { step, steps }
    }
  })
</script>

<style lang="scss" scoped>

</style>
