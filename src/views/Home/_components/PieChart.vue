<template>
  <div class="pie no-round" :style="`--p:${ value };--c:${ color };`">{{ value }}%</div>
</template>

<script>
export default {
  props: {
    value: Number,
    color: {
      type: String,
      default: '#F90074'
    }
  },
}
</script>

<style scoped>
  es-lu
  @property --p{
    syntax: '<number>';
    inherits: true;
    initial-value: 0;
  }

  .pie {
    --p:20;
    --b:5px;
    --c:darkred;
    --w:35px;

    width:var(--w);
    aspect-ratio:1;
    position:relative;
    display:inline-grid;
    place-content:center;
    font-size:11px;
    font-weight: 600;
    font-family:sans-serif;
  }
  .pie:before,
  .pie:after {
    content:"";
    position:absolute;
    border-radius:50%;
  }
  .pie:before {
    inset:0;
    background:
      radial-gradient(farthest-side,var(--c) 98%,#0000) top/var(--b) var(--b) no-repeat,
      conic-gradient(var(--c) calc(var(--p)*1%),#0000 0);
    -webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
    mask:radial-gradient(farthest-side,#0000 calc(99% - var(--b)),#000 calc(100% - var(--b)));
  }
  .pie:after {
    inset:calc(50% - var(--b)/2);
    background:var(--c);
    transform:rotate(calc(var(--p)*3.6deg)) translateY(calc(50% - var(--w)/2));
  }
  .no-round:before {
    background-size:0 0,auto;
  }
  .no-round:after {
    content:none;
  }
  @keyframes p {
    from{--p:0}
  }
</style>
