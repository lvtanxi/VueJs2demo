<template>
  <div>

    <div class="borderyun" v-for="(item,index) in itemDatas">
      <div class="col-sm-10 content-div">
        <h3> {{ index+1 }}. {{item.title}}</h3>
        <button class="btn" v-for=" text in item.txt" :class="{'btn-success':index%2==0,'btn-info':index%2!=0}" @click="changeVue(text)">
          {{text}}
        </button>
      </div>
    </div>
  </div>
</template>
<script>

  export default {
    name: 'hello',
    data () {
      return {
        itemDatas: [{
          title: "全局配置",
          txt: ["debug", "delimiters", "unsafeDelimiters", "silent", "async", "devtools"],
          tagR: "/login"
        },
          {
            title: "全局 API",
            txt: ["Vue.extend", "Vue.nextTick", "Vue.set", "Vue.delete", "Vue.directive", "Vue.elementDirective", "Vue.filter", "Vue.component", "Vue.transition", "Vue.partial", "Vue.use", "Vue.mixin"],
            tagR: "/login"
          },
          {
            title: "选项 / 数据",
            txt: ["data", "props", "propsData", "computed", "methods", "watch"],
            tagR: "/login"
          },
          {
            title: "选项 / DOM",
            txt: ["el", "template", "replace"],
            tagR: "/login"
          },
          {
            title: "选项 / 生命周期钩子",
            txt: ["init", "created", "beforeCompile", "compiled", "ready", "attached", "detached", "beforeDestroy", "destroyed"],
            tagR: "/login"
          },
          {
            title: "选项 / 资源",
            txt: ["directives", "elementDirectives", "filters", "components", "transitions", "partials"],
            tagR: "/login"
          },
          {
            title: "选项 / 杂项",
            txt: ["parent", "events", "mixins", "name", "extends"],
            tagR: "/login"
          },
          {
            title: "实例属性",
            txt: ["vm.$data", "vm.$el", "vm.$options", "vm.$parent", "vm.$root", "vm.$children", "vm.$refs", "vm.$els"],
            tagR: "/login"
          },
          {
            title: "实例方法 / 数据",
            txt: ["vm.$watch", "vm.$get", "vm.$set", "vm.$delete", "vm.$eval", "vm.$interpolate", "vm.$log"],
            tagR: "/login"
          },
          {
            title: "实例方法 / 事件",
            txt: ["vm.$on", "vm.$once", "vm.$off", "vm.$emit", "vm.$dispatch", "vm.$broadcast"],
            tagR: "/login"
          },
          {
            title: "实例方法 / DOM",
            txt: ["vm.$appendTo", "vm.$before", "vm.$after", "vm.$remove", "vm.$nextTick"],
            tagR: "/login"
          },
          {
            title: "实例方法 / 生命周期",
            txt: ["vm.$appendTo", "vm.$before", "vm.$after", "vm.$remove", "vm.$nextTick"],
            tagR: "/login"
          },
          {
            title: "指令",
            txt: ["v-text", "v-html", "v-if", "v-show", "v-else", "v-for", "v-on", "v-bind", "v-model", "v-ref", "v-el", "v-pre", "v-cloak"],
            tagR: "/login"
          },
          {
            title: "特殊元素",
            txt: ["component", "slot", "partial"],
            tagR: "/login"
          },
          {
            title: "过滤器",
            txt: ["capitalize", "uppercase", "lowercase", "currency", "pluralize", "json", "debounce", "limitBy", "filterBy", "orderBy"],
            tagR: "/login"
          },
          {
            title: "数组扩展方法",
            txt: ["array.$set", "array.$remove"],
            tagR: "/login"
          }]
      }
    },
    methods: {
      changeVue(text){
        this.$router.push(`/${text}/${text}`)
      }
    }
  }
</script>
<style scoped>
  .btn-success {
    margin: 3px 3px;
  }

  .btn-info {
    margin: 3px 3px;
  }

  .borderyun {
    border: 0.5px dashed salmon;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    box-shadow:0px 1px 10px salmon;
  }

  h1, .h1, h2, .h2, h3, .h3 {
    margin-top: 10px;
    animation: change 2s ease-in infinite;
    color: #f66;
  }

  @keyframes change {
    0% {
      text-shadow: 0 0 4px #f99
    }
    50% {
      text-shadow: 0 0 40px #f88
    }
    100% {
      text-shadow: 0 0 4px #f66
    }
  }

  .content-div {
    margin-bottom: 10px;

  }

</style>
