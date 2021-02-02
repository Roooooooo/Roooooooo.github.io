(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{357:function(t,r,s){"use strict";s.r(r);var a=s(42),e=Object(a.a)({},(function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"html中的javascript"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html中的javascript"}},[t._v("#")]),t._v(" HTML中的JavaScript")]),t._v(" "),s("h3",{attrs:{id:"script-元素"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#script-元素"}},[t._v("#")]),t._v(" <script>元素")]),t._v(" "),s("p",[s("font",{attrs:{size:"3"}},[t._v("HTML通过<script>元素引入javascript，这个元素最早由网景公司提出，后来加入到HTML规范。")]),s("br")],1),t._v(" "),s("p",[s("font",{attrs:{size:"3"}},[s("strong",[t._v("<script>元素有8个属性：")])]),s("br")],1),t._v(" "),s("p",[t._v("async：可选，异步加载脚本，只对外部脚本有效。异步的脚本不能保证按引入的顺序执行。"),s("br"),t._v("\ncharset：可选，使用scr属性指定的代码字符集，极少使用，大部分浏览器不在乎它的值。"),s("br"),t._v("\ncrossorigin：可选，配置跨域请求，默认不使用，值为“anonymous”表示文件请求不必设置凭据，值为“use-credentials”表示出站请求包含凭据。"),s("br"),t._v("\ndefer：可选，表示在文档解析和显示完成后再执行脚本（立即下载，推迟执行），只对外部脚本有效。推迟的脚本总按它们引入的顺序执行。"),s("br"),t._v("\nintegrity：可选，对比接收到的资源签名与这个属性指定的签名是否匹配，不匹配页面报错，该脚本不执行。"),s("br"),t._v("\nlanguage：废弃。"),s("br"),t._v("\nsrc：可选，表示包含要执行的代码的外部文件。"),s("br"),t._v("\ntype：可选，代表代码块中的脚本语言类型。"),s("br")]),t._v(" "),s("p",[s("font",{attrs:{size:"3"}},[s("strong",[t._v("<script>元素有两种使用方式：")])]),s("br")],1),t._v(" "),s("p",[t._v("1.行内JavaScript代码，直接写入<script>元素当中。"),s("br"),t._v("\n2.通过src属性，引入外部的js文件。(推荐，优点：便于统一维护；可以只缓存一次。)")]),t._v(" "),s("p",[t._v("<script>元素中的代码将从上到下被解释，代码计算完成之前，页面会被阻塞，页面后续内容不会被加载，不会被显示。通过将标签后置可以有效解决页面加载阻塞的问题。")]),t._v(" "),s("p",[t._v("同时只能使用一种方式，如果两者都存在的话，浏览器将只下载并执行脚本，忽略行内代码。")]),t._v(" "),s("h3",{attrs:{id:"动态加载脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#动态加载脚本"}},[t._v("#")]),t._v(" 动态加载脚本")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("    let script = document.createElement('script');\n    script.src = 'xxxx.js';\n    script.async = false;\n    document.head.appendChild(script);\n")])])]),s("p",[t._v("可通过以上代码动态加载脚本，默认情况下是以异步方式加载，而有些浏览器不支持async属性，所以需要明确将其设置为同步加载。"),s("br"),t._v("\n以这种方式获取的资源对浏览器不可见，严重影响性能，可以在文档头部显式声明它们，让预加载器知道这些动态请求文件的存在。")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('    <link rel="preload" href="xxxx.js">;   \n')])])]),s("h3",{attrs:{id:"文档模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档模式"}},[t._v("#")]),t._v(" 文档模式")]),t._v(" "),s("p",[t._v("IE5.5推出了文档模式概念，可以使用doctype切换文档模式。混杂模式(quirks mode)支持一些非标准行为，标准模式(standards mode)兼容标准行为。文档模式主要区别体现在通过CSS渲染的内容方面，但对JavaScript会有一些负面影响。")])])}),[],!1,null,null,null);r.default=e.exports}}]);