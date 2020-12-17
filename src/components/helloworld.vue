<template>
<div class="hello">

  <css-doodle>

    :doodle {
    @grid: 50x1 / 80%;
    }

    @place-cell: center;
    @size: calc(100% / @size() * @i());

    transition: transform .2s ease;
    transform: rotate(calc(@i() * 5deg));

    border-radius: 30%;
    border: 1px solid hsla(
    calc(10 + 4 * @i()), 70%, 68%, @r(.8)
    );

    will-change: transform, opacity;
    animation: scale-up 12s linear infinite;
    animation-delay: calc(-12s / @size() * @i());
    @keyframes scale-up {
    0%{
    transition: transform .2s ease;
    transform: rotate(calc(@i() * 45deg));
    opacity: 0;
    }
    100% {
    opacity: 1;
    }
    }
  </css-doodle>

  <css-doodle>
    :doodle {
    @grid: 3 x 26 / 1920px 300px;
    background: #000;
    overflow: hidden;
    }

    @row(2) {
    position: relative;
    width: 40px;
    margin: 0 10px;
    height: @r(75, 150)px;
    --bg: @p(#eee, #ddd, #aaa, #888, #555, #333, #111);
    background: radial-gradient(at center center, #000 50%, var(--bg) 50%),
    radial-gradient(at center center, #000 50%, var(--bg) 50%),
    linear-gradient(90deg, transparent 14.5px, var(--bg) 14.5px, var(--bg) 35px, transparent 35px);
    background-size: 30px 150%, 30px 150%, 100% 100%;
    background-repeat: no-repeat;
    background-position: -15px 50%, 25px 50%, 0 0;
    -webkit-box-reflect: above 3px;
    transform: translate(@r(-15, 15)px, calc(@r(0, 75)px + 100px)) rotate(@r(-5, 5)deg) scaleX(@r(0.4, 1.4)) scaleY(@r(1, 1.5)) ;

    :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    background: radial-gradient(at center center, #000 50%, var(--bg) 50%),
    radial-gradient(at center center, #000 50%, var(--bg) 50%),
    linear-gradient(90deg, transparent 14.5px, var(--bg) 14.5px, var(--bg) 35px, transparent 35px);
    background-size: 30px 150%, 30px 150%, 100% 100%;
    background-repeat: no-repeat;
    background-position: -15px 50%, 25px 50%, 0 0;
    transform: translate(0, calc(100% + 3px));
    }
    }

    @row(3) {
    position: relative;
    margin: 50px auto;
    width: 6px;
    height: 140px;
    --bg: @p(#eee, #ddd, #aaa, #888, #555);
    background: radial-gradient(at center center, var(--bg) 35%, transparent 50%);
    transform: rotate(@r(-60, 60)deg) scale(@r(0.4, 1.2)) translate(@r(-10, 10)px, @r(-180, 20)px);
    -webkit-box-reflect: left @r(180, 400)px;
    :before,
    :after{
    content:"";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 10%;
    right: 0;
    background: radial-gradient(at center center, var(--bg) 35%, transparent 50%);
    transform-origin: 2px 20px;
    transform: rotate(30deg);
    }

    :after {
    transform: rotate(-30deg);
    }
    }

  </css-doodle>

  <css-doodle>
    :doodle {
    @grid:20 / 100vmax;
    background:#5fa6bf;

    @even {
    :after {
    color: #fff3e6;
    content: '\@hex(@rand(9500,9700))';
    font-size: 5vmax;
    transform: scale(@rand(.2,1.5));
    }
    }

    @odd {
    :after {
    color: #ffb37f;
    content: '\@hex(@rand(9500,9700))';
    font-size: 5vmax;
    transform: scale(@rand(.2,1.5));
    }
    }
    }
  </css-doodle>

  <css-doodle>
    :doodle {
    @grid: 5;
    @size: 30vmax;
    grid-gap: 1px;
    background: #f5f5f5;
    }
    background-color: hsla(@r(0,360), 70%, 70%, @r(.1,1));
    transform: scale(@rand(.2, 1));
  </css-doodle>
  <hr>

  <hr>
  <css-doodle>
    @use: var(--rule-emoji);
  </css-doodle>

</div>
</template>

<script>
import CSSDoodle from 'css-doodle'
export default {
  name: 'helloworld',
  cName: 'helloworld模型',
  components: {
    CSSDoodle
  },
  mounted() {
    const myDoodle = document.querySelector('.doodle');

    myDoodle && myDoodle.addEventListener('click', () => {
      myDoodle.update();
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
body {
  margin: 0;
  overflow-x: hidden;
}

.doodle {
  overflow: hidden;
}
</style>
