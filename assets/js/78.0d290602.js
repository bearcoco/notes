(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{507:function(s,a,t){"use strict";t.r(a);var e=t(20),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[t("a",{attrs:{href:"#%E5%88%A0%E9%99%A4%E6%89%80%E6%9C%89%E8%AE%B0%E5%BD%95"}},[s._v("删除所有记录")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%88%A0%E9%99%A4%E4%B8%8A%E6%AC%A1%E8%AE%B0%E5%BD%95"}},[s._v("删除上次记录")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[s._v("参考资料")])])]),s._v(" "),t("h2",{attrs:{id:"删除所有记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除所有记录"}},[s._v("#")]),s._v(" 删除所有记录")]),s._v(" "),t("p",[s._v("不小心把密码或其他敏感信息提交到git，想清空所有commit信息记录，就像形成一个全新的仓库，且代码不变。")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("切换到新的分支")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout --orphan latest_branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("缓存所有文件（除了.gitignore中声名排除的）")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -A\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("提交跟踪过的文件")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit -am "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"commit message"')]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("删除master分支")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -D master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("重命名当前分支为master")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -m master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])]),s._v(" "),t("li",[t("p",[s._v("提交到远程master分支")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f origin master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])]),s._v(" "),t("p",[s._v("以上是删除所有提交记录，那么如何修改内容覆盖上次记录呢？")]),s._v(" "),t("h2",{attrs:{id:"删除上次记录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#删除上次记录"}},[s._v("#")]),s._v(" 删除上次记录")]),s._v(" "),t("p",[s._v("如你只是想修改上次提交的代码，做一次更完美的commit，可以这样")]),s._v(" "),t("p",[s._v("（1）"),t("code",[s._v("git reset commitId")]),s._v("，(注：不要带--hard)到上个版本")]),s._v(" "),t("p",[s._v("（2）"),t("code",[s._v("git stash")]),s._v("，暂存修改")]),s._v(" "),t("p",[s._v("（3）"),t("code",[s._v("git push --force")]),s._v(", 强制push,远程的最新的一次commit被删除")]),s._v(" "),t("p",[s._v("（4）"),t("code",[s._v("git stash pop")]),s._v("，释放暂存的修改，开始修改代码")]),s._v(" "),t("p",[s._v("（5）"),t("code",[s._v("git add .")]),s._v(" -> "),t("code",[s._v('git commit -m "massage"')]),s._v(" -> "),t("code",[s._v("git push")])]),s._v(" "),t("h2",{attrs:{id:"参考资料"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[s._v("#")]),s._v(" 参考资料")]),s._v(" "),t("ul",[t("li",[s._v("https://my.oschina.net/18y/blog/3064211")]),s._v(" "),t("li",[s._v("https://segmentfault.com/q/1010000002898735")])])])}),[],!1,null,null,null);a.default=n.exports}}]);