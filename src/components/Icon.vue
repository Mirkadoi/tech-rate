<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       :viewBox="`0 0 ${width} ${height}`"
       :aria-labelledby="iconName"
       role="img"
  >
    <title :id="iconName">{{ iconName }}</title>
    <slot>
      <g :fill="iconColor">
        <component :is="iconCode"/>
      </g>
    </slot>
  </svg>
</template>

<script>
  import Arrow from './icons/Arrow';
  import DoubleArrow from './icons/DoubleArrow';
  import OutlineArrow from './icons/OutlineArrow';
  import Magnifier from './icons/Magnifier';

  import GithubLogo from './icons/GithubLogo';
  import TelegramLogo from './icons/TelegramLogo';
  import TwitterLogo from './icons/TwitterLogo';

  export default {
    components: {
      Arrow,
      DoubleArrow,
      OutlineArrow,
      Magnifier,
      GithubLogo,
      TelegramLogo,
      TwitterLogo,
    },

    props: {
      iconName: {
        type: String,
        default: ''
      },
      iconCode: {
        type: String,
        default: '',
      },
      width: {
        type: [Number, String],
        default: 18
      },
      height: {
        type: [Number, String],
        default: 18
      },
      iconColor: {
        type: String,
        default: 'black'
      }
    },
  }
</script>
