<template>
  <GDialog v-model="dialogState" max-width="300">
    <div>
      Info Alert
    </div>

    {{ info }}
  </GDialog>
</template>

<script>
  import { defineComponent } from 'vue'

  export default defineComponent({
    props: {
      modelValue: {
        type: Boolean,
        default: false,
      },
      info: {
        type: String,
        required: true,
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
  })
</script>
