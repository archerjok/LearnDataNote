const e=JSON.parse(`{"key":"v-6bea56bc","path":"/code/Vue.html","title":"Vue","lang":"zh-CN","frontmatter":{"article":false,"title":"Vue","icon":"vue","order":2,"description":"基础知识 mounted 是生命周期函数，自动执行。 props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。 按键、事件都可以加入修饰符，简化代码。 //从 Vue 对象中将 ref, reactive, readonly, toRefs 方法解构出来 const { ref, reactive} = Vue; // setup setup(props, context) { const { h } = Vue; const { attrs, slots, emit } = context; function handleClick() { emit('change'); } return { handleClick }; },","head":[["meta",{"property":"og:url","content":"https://newzone.top/ArcherIce/code/Vue.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Vue"}],["meta",{"property":"og:description","content":"基础知识 mounted 是生命周期函数，自动执行。 props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。 按键、事件都可以加入修饰符，简化代码。 //从 Vue 对象中将 ref, reactive, readonly, toRefs 方法解构出来 const { ref, reactive} = Vue; // setup setup(props, context) { const { h } = Vue; const { attrs, slots, emit } = context; function handleClick() { emit('change'); } return { handleClick }; },"}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-06T07:36:51.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2023-10-06T07:36:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Vue\\",\\"description\\":\\"基础知识 mounted 是生命周期函数，自动执行。 props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。 按键、事件都可以加入修饰符，简化代码。 //从 Vue 对象中将 ref, reactive, readonly, toRefs 方法解构出来 const { ref, reactive} = Vue; // setup setup(props, context) { const { h } = Vue; const { attrs, slots, emit } = context; function handleClick() { emit('change'); } return { handleClick }; },\\"}"]]},"headers":[{"level":2,"title":"基础知识","slug":"基础知识","link":"#基础知识","children":[]},{"level":2,"title":"v-model","slug":"v-model","link":"#v-model","children":[]},{"level":2,"title":"组件命名","slug":"组件命名","link":"#组件命名","children":[]},{"level":2,"title":"CDN 使用 vue","slug":"cdn-使用-vue","link":"#cdn-使用-vue","children":[]}],"git":{"createdTime":1696577811000,"updatedTime":1696577811000,"contributors":[{"name":"archerjok","email":"119922588+archerjok@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.62,"words":487},"filePathRelative":"code/Vue.md","localizedDate":"2023年10月6日","excerpt":"<h2> 基础知识</h2>\\n<p>mounted 是生命周期函数，自动执行。</p>\\n<p>props 主要用于组件的传值，他的工作就是为了接收外面传过来的数据，与 data、el、ref 是一个级别的配置项。</p>\\n<p>按键、事件都可以加入<a href=\\"https://cn.vuejs.org/guide/essentials/event-handling.html#event-modifiers\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">修饰符</a>，简化代码。</p>\\n<div class=\\"language-JavaScript line-numbers-mode\\" data-ext=\\"JavaScript\\"><pre class=\\"language-JavaScript\\"><code>//从 Vue 对象中将 ref, reactive, readonly, toRefs 方法解构出来\\nconst { ref, reactive} = Vue;\\n\\n// setup\\nsetup(props, context) {\\n  const { h } = Vue;\\n  const { attrs, slots, emit } = context;\\n  function handleClick() {\\n    emit('change');\\n  }\\n  return { handleClick };\\n},\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
