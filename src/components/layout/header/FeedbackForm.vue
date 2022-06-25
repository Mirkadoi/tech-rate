<template>
  <div class="modal-wrapper">
    <div class="btn-close" @click="$emit('closeModal')">
      <InlineSvg :src="require('@/assets/icons/close.svg')" width="12" height="12" title="Закрыть"/>
    </div>


    <h2 class="title"> Reach out to us </h2>

    <h4 class="subtitle"> Apply for the Audit and DM in telegram
      <a href="https://t.me/EmilTechrate" target="_blank" >@EmilTechrate</a>
    </h4>

    <Form class="form" v-slot="{ validate }">
      <div class="field">
        <label class="field__label" for="name">Name</label>
        <Field class="field__input" id="name" name="name" />
      </div>

      <div class="field">
        <label class="field__label" for="email">Email</label>
        <Field class="field__input" id="email" name="email"/>
      </div>

      <div class="field">
        <label class="field__label" for="contact">Personal telegram ID / phone <span>*</span></label>
        <Field class="field__input field__input--with-error" id="contact" name="contact" :rules="isRequired" />
        <div class="field__error field__error--with-error">
          <ErrorMessage  name="contact" />
        </div>
      </div>

      <div class="field">
        <label class="field__label" for="comments">Comments (link to the contract)</label>
        <Field class="field__textarea" id="comments" name="comments" as="textarea" />
      </div>

      <Button class="btn-apply" title="Apply" @onClick="submit(validate)"></Button>
    </Form>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import {
    ErrorMessage,
    Field,
    Form
  } from 'vee-validate';
  import Button from '@/components/ui/Button';

  export default defineComponent ({
    components: {
      Field,
      Form,
      ErrorMessage,
      Button,
    },

    emits: ['closeModal', 'changeStep'],

    methods: {
      isRequired(value) {
        return value && value.trim() ? true : 'This field is required';
      },

      async submit(validate) {
        const { valid } = await validate()

        if (!valid) return;

        this.$emit('changeStep', 'FeedbackNotification')
      }
    },
  })
</script>

<style lang="scss" scoped>
  .modal-wrapper {
    padding: 35px 40px 45px 40px;
  }

  .title {
    font-family: $font-base;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 33px;
    color: $text-color-black;
    margin: 0 0 8px 0;
  }

  .subtitle {
    font-family: $font-base;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: $text-color-dark-blue;
    margin: 0 0 30px 0;

    a {
      color: $text-color-dark-blue;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
  }

  .field {
    display: flex;
    flex-direction: column;

    &__label {
      font-family: $font-base;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 19px;
      color: $text-color-dark-blue;

      span {
        color: $brand-color-pink;
      }
    }

    &__input, &__textarea {
      background-color: $background-colors-white;
      border: 1px solid $border-color-l1;
      border-radius: 8px;
      font-family: $font-base;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      color: $text-color-black;
      padding: 13px 16px;
      margin-bottom: 26px;

      &:focus {
        background-color: $color-white;
        border: 1px solid $border-color-l2;
      }

      &:focus-visible {
        outline: none;
      }

      &--with-error {
        margin-bottom: 6px;
      }
    }

    &__textarea {
      resize: none;
    }

    &__error {
      height: 18px;
      font-family: $font-base;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 150%;
      color: $system-color-error;

      &--with-error {
        margin-bottom: 6px;
      }
    }
  }

  .btn-close {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16px;
    height: 16px;
    margin-left: auto;
    cursor: pointer;

    svg {
      fill: $text-color-gray;
    }
  }

  .btn-apply {
    margin-top: 20px;
    padding-top: 13px;
    padding-bottom: 13px;
  }
</style>
