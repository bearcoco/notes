(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{512:function(s,a,t){"use strict";t.r(a);var n=t(20),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("ul",[t("li",[t("a",{attrs:{href:"#%E7%BB%83%E4%B9%A0"}},[s._v("练习")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#%E5%AE%89%E8%A3%85nginx"}},[s._v("安装nginx")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%AE%89%E8%A3%85tomcat"}},[s._v("安装tomcat")])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E9%83%A8%E7%BD%B2elasticsearch"}},[s._v("部署ElasticSearch")])])])]),s._v(" "),t("li",[t("a",{attrs:{href:"#%E5%8F%AF%E8%A7%86%E5%8C%96"}},[s._v("可视化")])])]),s._v(" "),t("h2",{attrs:{id:"练习"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#练习"}},[s._v("#")]),s._v(" 练习")]),s._v(" "),t("h3",{attrs:{id:"安装nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx"}},[s._v("#")]),s._v(" 安装nginx")]),s._v(" "),t("p",[s._v("拉取镜像：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("$ docker pull nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Docker.assets/08.Docker-%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20210604134156428.png",alt:"image-20210604134156428"}})]),s._v(" "),t("p",[s._v("启动容器：")]),s._v(" "),t("p",[s._v("-d  后台启动")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker run -d --name mynginx -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3500")]),s._v(":80 nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Docker.assets/08.Docker-%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20210604134438899.png",alt:"image-20210604134438899"}})]),s._v(" "),t("p",[s._v("进入容器：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker exec -it mynginx /bin/bash")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 寻找nginx")]),s._v("\nroot@511741b161de:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# whereis nginx")]),s._v("\nnginx: /usr/sbin/nginx /usr/lib/nginx /etc/nginx /usr/share/nginx\nroot@511741b161de:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd /usr/share/nginx")]),s._v("\nroot@511741b161de:/usr/share/nginx"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nhtml\nroot@511741b161de:/usr/share/nginx"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd html")]),s._v("\nroot@511741b161de:/usr/share/nginx/html"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\n50x.html  index.html\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#可看到之前访问的内容是 index.html")]),s._v("\nroot@511741b161de:/usr/share/nginx/html"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat index.html")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v("DOCTYPE html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Welcome to nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/title"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n    body "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        width: 35em"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        margin: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" auto"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        font-family: Tahoma, Verdana, Arial, sans-serif"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/style"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/head"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("h"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("Welcome to nginx"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/h"),t("span",{pre:!0,attrs:{class:"token operator"}},[t("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[s._v("1")]),s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("If you see this page, the nginx web server is successfully installed and\nworking. Further configuration is required."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("For online documentation and support please refer to\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nginx.org/"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nginx.org"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("br/"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nCommercial support is available at\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("a "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("href")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://nginx.com/"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("nginx.com"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/a"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("em"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("Thank you "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" using nginx."),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/em"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/p"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/body"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("/html"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br")])]),t("h3",{attrs:{id:"安装tomcat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装tomcat"}},[s._v("#")]),s._v(" 安装tomcat")]),s._v(" "),t("p",[s._v("在 docker hub 官网搜索 tomcat：https://hub.docker.com/_/tomcat")]),s._v(" "),t("p",[s._v("翻到下面有教程")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Docker.assets/08.Docker-%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20210604135940495.png",alt:"image-20210604135940495"}})]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker run -it --rm tomcat:9.0\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[t("p",[s._v("-it ：交互模式")])]),s._v(" "),t("li",[t("p",[s._v("--rm：容器启动成功并退出以后容器就自动移除，一般在测试情况下使用！")])])]),s._v(" "),t("p",[s._v("1、下载tomcat镜像：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker pull tomcat\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2、启动")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v(":8080 --name tomcat9 tomcat\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("3、进入tomcat")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it tomcat9 /bin/bash\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("进入后发现，webapps 里什么也没有")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("root@a1801a340333:/usr/local/tomcat"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nBUILDING.txt  CONTRIBUTING.md  LICENSE\tNOTICE\tREADME.md  RELEASE-NOTES  RUNNING.txt  bin  conf  lib  logs  native-jni-lib  temp  webapps  webapps.dist  work\nroot@a1801a340333:/usr/local/tomcat"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd webapps")]),s._v("\nroot@a1801a340333:/usr/local/tomcat/webapps"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ls")]),s._v("\nroot@a1801a340333:/usr/local/tomcat/webapps"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("若部署一个 jsp 网站，需要把文件复制到容器里，非常麻烦。")]),s._v(" "),t("p",[s._v("我们可以通过“数据卷”技术，将容器内文件和我们 Linux 文件进行映射挂载。")]),s._v(" "),t("h3",{attrs:{id:"部署elasticsearch"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署elasticsearch"}},[s._v("#")]),s._v(" 部署ElasticSearch")]),s._v(" "),t("p",[s._v("官网：https://hub.docker.com/_/elasticsearch")]),s._v(" "),t("p",[s._v("1、启动：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker run -d --name elasticsearch -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v(" elasticsearch:7.6.2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("2、查看状态")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("docker stats 容器id")]),s._v(" "),t("p",[s._v("查看容器的cpu内存和网络状态")])])]),s._v(" "),t("p",[s._v("查看下cpu状态 ，发现占用的很大")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Docker.assets/08.Docker-%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20210604143220308.png",alt:"image-20210604143220308"}})]),s._v(" "),t("p",[s._v("3、增加上内存限制启动")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker run -d --name elasticsearch -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v(":9200 -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v(":9300 -e "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"discovery.type=single-node"')]),s._v(" -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ES_JAVA_OPTS")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-Xms64m -Xmx512m"')]),s._v(" elasticsearch:7.6.2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("启动时，报错："),t("strong",[s._v("名字")]),s._v("已经存在")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Docker.assets/08.Docker-%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20210604143740445.png",alt:"image-20210604143740445"}})]),s._v(" "),t("p",[s._v("可通过指令删除")]),s._v(" "),t("ul",[t("li",[s._v("docker rm  name_of_the_docker_container")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" elasticsearch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("我们可通过 "),t("code",[s._v("docker ps -a")]),s._v(" 显示所有容器信息")]),s._v(" "),t("p",[s._v("再次启动后，发现内存变小了")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Docker.assets/08.Docker-%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20210604144022465.png",alt:"image-20210604144022465"}})]),s._v(" "),t("p",[s._v("访问成功：")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# curl localhost:9200")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"name"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"d49fb1463f0a"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster_name"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker-cluster"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"cluster_uuid"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ycGNdXS0TpC2lcOfIFlPkQ"')]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"number"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"7.6.2"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build_flavor"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"default"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build_type"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"docker"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build_hash"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ef48eb35cf30adf4db14086e8aabd07ef6fb113f"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build_date"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"2020-03-26T06:34:37.794943Z"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"build_snapshot"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" false,\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"lucene_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"8.4.0"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"minimum_wire_compatibility_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.8.0"')]),s._v(",\n    "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"minimum_index_compatibility_version"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"6.0.0-beta1"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(",\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"tagline"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"You Know, for Search"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br")])]),t("p",[t("strong",[s._v("关于名字的作用：")])]),s._v(" "),t("p",[s._v("以后我们想启动上次配置的 ElasticSearch，用  "),t("code",[s._v("docker start 容器名字")]),s._v(" 即可，不需要在重新配置")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker start elasticsearch")]),s._v("\nelasticsearch\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker ps")]),s._v("\nCONTAINER ID   IMAGE                 COMMAND                  CREATED             STATUS         PORTS                                                                                  NAMES\nd49fb1463f0a   elasticsearch:7.6.2   "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/local/bin/dock…"')]),s._v("   About an hour ago   Up "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" seconds   "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:9200-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("/tcp, :::9200-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("/tcp, "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:9300-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v("/tcp, :::9300-"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9300")]),s._v("/tcp   elasticsearch\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-0-6-centos ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ")]),s._v("\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br")])]),t("p",[s._v("如果我们要使用 kibana , 如果配置连接上我们的es呢？网络该如何配置呢？")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Docker.assets/08.Docker-%E5%8F%AF%E8%A7%86%E5%8C%96.assets/img_34.png",alt:"img_34"}})]),s._v(" "),t("h2",{attrs:{id:"可视化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#可视化"}},[s._v("#")]),s._v(" 可视化")]),s._v(" "),t("p",[s._v("Portainer是Docker的图形化管理工具，提供状态显示面板、应用模板快速部署、容器镜像网络数据卷 的基本操作（包括上传下载镜像，创建容器等操作）、事件日志显示、容器控制台操作、Swarm集群和 服务等集中管理和操作、登录用户管理和控制等功能。功能十分全面，基本能满足中小型单位对容器管理的全部需求。")]),s._v(" "),t("p",[s._v("如果仅有一个docker宿主机，则可使用单机版运行，Portainer单机版运行十分简单，只需要一条语句即可启动容器，来管理该机器上的 docker 镜像、容器等数据。")]),s._v(" "),t("ul",[t("li",[s._v("安装并运行Portainer：")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("docker run -d -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8088")]),s._v(":9000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n--restart"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always -v /var/run/docker.sock:/var/run/docker.sock --privileged"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("true portainer/portainer\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("访问：")])]),s._v(" "),t("p",[s._v("http://IP:8088")]),s._v(" "),t("p",[s._v("首次加载比较慢，且登陆需要注册用户，给admin用户设置密码：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Docker.assets/08.Docker-%E5%8F%AF%E8%A7%86%E5%8C%96.assets/image-20210604155648194.png",alt:"image-20210604155648194"}})]),s._v(" "),t("p",[s._v("单机版这里选择local即可，选择完毕，点击Connect即可连接到本地docker：")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/Docker.assets/08.Docker-%E5%8F%AF%E8%A7%86%E5%8C%96.assets/img_38.png",alt:"img_38"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);