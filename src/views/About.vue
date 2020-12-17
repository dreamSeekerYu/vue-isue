<template>
<div class="about">
  <h1>
    <img src="/1.jpg" alt="">
  </h1>

  <div class="clip-box">
    asdfasdfasfasdfasdfasdfaasdfa sdfasfasdfasdfasdfaasdfasdfasfasdfas dfasdfaasdfasdfasfasdfasdf asdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfaasdfasdfasfasdfasdfasdfa
    <p>
      </p>
  </div>
</div>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

img {
  // clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: ellipse(130px 140px at 10% 20%);
}

.clip-box {
  width: 500px;
  height: 500px;
  word-break: break-word;
  text-align: left;
  background: orange;
  font-size: 60px;
  border: 1px solid #000;
  padding: 80px;
  clip-path: polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%);

  p {
    width: 300px;
  }
}
</style>
