
# XGRGB

获得图片主体颜色rgba

## ⬛安装⬜
```sh
npm i xgrgb
```
## 🟨JavaScipt
```html
<img src="./img/test.jpg" id="Myimg">

<script type="module">
    import { xgrgb } from "./node_modules/xgrgb/index.js";
    var img = document.getElementById("Myimg"); //图片节点
    let rgb = xgrgb(img)
    console.log(rgb)//{r: 110, g: 57, b: 124}
</script>
```


## 🟩Vue3.x + 🟨JavaScript
```html
<template>
  <img src="test.jpg" ref="imgref" @load="loaded" />
</template>

<script setup>
import { xgrgb } from 'xgrgb' //引入模块
import { ref } from 'vue'

let imgref = ref('') //抓取img节点。类似 document.getElementById

let loaded = () => { //要使用@load等图片加载渲染完后
  //vue3里的ref要使用value取得值
  let rgb = xgrgb(imgref.value)  //返回RGB:红色，绿色，蓝色
  console.log(rgb) // {r: 110, g: 57, b: 124}
}
</script>
```
## 🟩Vue3.x + 🟦TypeScript
```html
<template>
  <img src="test.jpg" ref="imgref" @load="loaded" />
</template>

<script setup lang='ts'>
import { xgrgb } from 'xgrgb' //引入模块
import { ref } from 'vue'

const imgref =  ref<HTMLImageElement>() //抓取img节点。类似 document.getElementById

let loaded = () => { //要使用@load等图片加载渲染完后
  //vue3里的ref要使用value取得值
  let rgb = xgrgb(imgref.value as HTMLImageElement)  //返回RGB:红色，绿色，蓝色
  console.log(rgb) // {r: 110, g: 57, b: 124}
}
</script>
```


## 🟩Vue2.x + 🟨JavaScript
```html
<template>
  <div id="app">
    <img src="test.jpg" ref="imgref" @load="loaded" />
  </div>
</template>

<script>
import { xgrgb } from 'xgrgb'
export default {
  methods:{
    loaded(){
      let imgref = this.$refs.imgref
      let rgba = xgrgb(imgref)
      console.log(rgba) // {r: 110, g: 57, b: 124}
    }
  }
}
</script>
```

