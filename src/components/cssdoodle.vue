<template>
  <div>
  <css-doodle class="doodle" grid="12">
    :doodle { @grid: 12 / 100vmax; background: #0a0c27; filter: blur(.1px); transform: scale(1.1) }

    @random { border: 3px solid hsla(158, 70%, 68%, @rand(0.3)); }

    @random {
    filter: blur(1.5px);
    }

    @random {
    animation: move 5s linear alternate infinite;
    }

    @random(0.1) {
    animation: flicker 5s ease infinite;
    }

    @keyframes move { 0% { transform: translate( @rand(-50%, 50%), @rand(-50%, 50%) ); }

    100% { transform: translate( @rand(-50%, 50%), @rand(-50%, 50%) ); } }

    @keyframes flicker { 0% { opacity: 1; }

    50% {
    opacity: 0;
    }

    100% {
    opacity: 1;
    }
    }

    border-radius: 50%; background: hsla(158, 70%, 68%, @rand(0.6)); transform: scale(@rand(.5, 1.2)) translate( @rand(-50%, 50%), @rand(-50%, 50%) );
  </css-doodle>
  </div>
</template>

<script>
  export default {
    name:'cssdoodle',
    cName:'CSS Doodle 模型'
  }
</script>

<style lang="scss" scoped>

</style>