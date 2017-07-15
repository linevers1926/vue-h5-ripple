# 版权申明

版权声明：本插件源码Surmon的vue-touch-ripple项目，版权归Surmon所有，本人修改了少量的bug并发布来便于本团队使用。

# Vue-h5-Ripple
Touch ripple component for Vue.js(1.x ~ 2.x).

组件component/指令directive两种方法可供使用，灵活简单，兼容Vue.js全版本。


- 要注意的地方：

  * 使用directive模式时，组件会给所对应元素内部append子节点，如果是p、tr、img、Input...这些标签由于浏览器不支持再内嵌元素，故将会失效，所以刚才所述的单标签或者一些特殊的不允许内部插入元素的行内元素，在使用时需使用component方式

  * 使用component模式时，组件会在外层自动包裹div，div默认是block的，且本质上已经改变了外层dom结构，如果需要的话，可以通过给组件加class来用css改变其成为指定的盒子类型，如：

    ``` html
    <touch-ripple class="inline">
       <button>it's a button</button>
    </touch-ripple>
    ```

    ``` css
    .inline {
      display: inline-block;
    }
    ```

  * 推荐directive模式使用，在directive模式失效时，改用component模式




# Use Setup


### Install vue-h5-ripple

``` bash
npm install vue-h5-ripple
```


### Mount with vue

``` javascript
// import
import Vue from 'vue'
import VueH5Ripple from 'vue-h5-ripple'


// or require
const Vue = require('vue')
const VueH5Ripple = require('vue-h5-ripple')


// mount with global
Vue.use(VueH5Ripple)


// or mount with compoment
import Vue from 'vue'
import { touchRipple } from 'vue-h5-ripple'

export default {
  components: {
    touchRipple
  }
}
```

``` html
<!-- use with components -->
<touch-ripple>
   <!-- your code... -->
   <h1>it's a h1 title</h1>
   <div>it's a div block</div>
</touch-ripple>


<!-- use with directive(must be global Vue.use(VueTouchRipple)) -->
<button v-touch-ripple>check me!</button>
<h1 v-touch-ripple>I'm h1!</h1>
<div v-touch-ripple>I'm div!</div>
```


# Author Blog
[Linevers]
