import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as e,e as p}from"./app-9bee90f7.js";const n={},r=p("<blockquote><p>CDN 的全称是 Content Delivery Network，即内容分发网络。其基本思路是尽可能避开互联网上有可能影响数据传输速度和稳定性的瓶颈和环节，使内容传输的更快、更稳定。通过在网络各处放置节点服务器所构成的在现有的互联网基础之上的一层智能虚拟网络，CDN 系统能够实时地根据网络流量和各节点的连接、负载状况以及到用户的距离和响应时间等综合信息将用户的请求重新导向离用户最近的服务节点上。其目的是使用户可就近取得所需内容，解决 Internet 网络拥挤的状况，提高用户访问网站的响应速度。</p></blockquote><p>国内 CDN 有阿里云、腾讯、百度、网宿、七牛云、又拍云等。</p><p>这里以阿里云 CDN 为例。我之前使用阿里云全站 CDN，一直以为速度会加快。但命中率只有 7%，在更换为 ECS 后，命中率更降为 2%。</p><p>更可怕的是，我提交工单后才得到的事实。<strong>CDN 运营商会根据 DNS 分配就近分配 CDN 节点，抓取网站缓存。</strong></p><p>第一反应：「不错啊。如果网站在北京，访客在上海，直接访问上海的节点，速度必然要快一些。」</p><p>但事实并没有这么完美。<strong>CDN 是根据本地 DNS 来分配节点。</strong></p><p>你从上海放出访问申请，DNS 有可能帮你分配去广东的节点。极端情况下，有可能分配到不同运营商，<strong>导致无法打开网站。</strong></p><p>我进行了三个测试，本地网络环境都是上海电信，更换了 DNS 设置。</p><p>第一次测试使用 114DNS，分配了广州鹏博士网络，网站打不开。提交工单后，客服反映<strong>这个节点是局域网节点，只有鹏博士网络才能打开。</strong></p><p>第二次测试使用电信默认 DNS，分配苏州电信，网站正常。</p><p>第三次测试使用阿里云 DNS，分配杭州电信，网站正常</p><p>后面两次虽然都能打开网站，但没有一个分配在上海电信，这种加速又能快多少呢？</p><p>在网站<strong>配置足够、流量不大（日均访客 1000 以内）</strong> 时，不建议使用全站 CDN，这只会拖累访问体验。小网站只适合将图片部署在 CDN。</p>",13),s=[r];function c(_,N){return o(),e("div",null,s)}const l=t(n,[["render",c],["__file","2018-01-19-forget_the_cdn.html.vue"]]);export{l as default};
