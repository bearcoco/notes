(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{520:function(t,a,v){"use strict";v.r(a);var _=v(20),s=Object(_.a)({},(function(){var t=this,a=t.$createElement,v=t._self._c||a;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("ul",[v("li",[v("a",{attrs:{href:"#mq-%E7%9A%84%E7%9B%B8%E5%85%B3%E6%A6%82%E5%BF%B5"}},[t._v("MQ 的相关概念")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#%E4%BB%80%E4%B9%88%E6%98%AFmq"}},[t._v("什么是MQ")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E4%B8%BA%E4%BB%80%E4%B9%88%E8%A6%81%E7%94%A8mq"}},[t._v("为什么要用MQ")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#mq-%E7%9A%84%E5%88%86%E7%B1%BB"}},[t._v("MQ 的分类")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#mq-%E7%9A%84%E9%80%89%E6%8B%A9"}},[t._v("MQ 的选择")])])])]),t._v(" "),v("li",[v("a",{attrs:{href:"#rabbitmq"}},[t._v("RabbitMQ")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"#rabbitmq-%E7%9A%84%E6%A6%82%E5%BF%B5"}},[t._v("RabbitMQ 的概念")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E5%9B%9B%E5%A4%A7%E6%A0%B8%E5%BF%83%E6%A6%82%E5%BF%B5"}},[t._v("四大核心概念")])]),t._v(" "),v("li",[v("a",{attrs:{href:"#%E5%90%84%E4%B8%AA%E5%90%8D%E8%AF%8D%E4%BB%8B%E7%BB%8D"}},[t._v("各个名词介绍")])])])])]),t._v(" "),v("h2",{attrs:{id:"mq-的相关概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mq-的相关概念"}},[t._v("#")]),t._v(" MQ 的相关概念")]),t._v(" "),v("h3",{attrs:{id:"什么是mq"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是mq"}},[t._v("#")]),t._v(" 什么是MQ")]),t._v(" "),v("p",[t._v("MQ(message queue)，从字面意思上看，本质是个队列，FIFO 先入先出，只不过队列中存放的内容是 message 而已，还是一种跨进程的通信机制，用于上下游传递消息。在互联网架构中，MQ 是一种非常常 见的上下游“逻辑解耦+物理解耦”的消息通信服务。使用了 MQ 之后，消息发送上游只需要依赖 MQ，不 用依赖其他服务。")]),t._v(" "),v("h3",{attrs:{id:"为什么要用mq"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#为什么要用mq"}},[t._v("#")]),t._v(" 为什么要用MQ")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("流量消峰")])])]),t._v(" "),v("p",[t._v("举个例子，如果订单系统最多能处理一万次订单，这个处理能力应付正常时段的下单时绰绰有余，正常时段我们下单一秒后就能返回结果。但是在高峰期，如果有两万次下单操作系统是处理不了的，只能限制订单超过一万后不允许用户下单。使用消息队列做缓冲，我们可以取消这个限制，把一秒内下的订单分散成一段时间来处理，这时有些用户可能在下单十几秒后才能收到下单成功的操作，但是比不能下单的体验要好。")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("应用解耦")])])]),t._v(" "),v("p",[t._v("以电商应用为例，应用中有订单系统、库存系统、物流系统、支付系统。用户创建订单后，如果耦合 调用库存系统、物流系统、支付系统，任何一个子系统出了故障，都会造成下单操作异常。当转变成基于 消息队列的方式后，系统间调用的问题会减少很多，比如物流系统因为发生故障，需要几分钟来修复。在 这几分钟的时间里，物流系统要处理的内存被缓存在消息队列中，用户的下单操作可以正常完成。当物流 系统恢复后，继续处理订单信息即可，中单用户感受不到物流系统的故障，提升系统的可用性。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/RabbitMQ/RabbitMQ-00000004.png",alt:"RabbitMQ-00000004"}})]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("异步处理")])])]),t._v(" "),v("p",[t._v("有些服务间调用是异步的，例如 A 调用 B，B 需要花费很长时间执行，但是 A 需要知道 B 什么时候可以执行完。")]),t._v(" "),v("p",[t._v("以前一般有两种方式，A 过一段时间去调用 B 的查询 api 查询。或者 A 提供一个 callback api， B 执行完之后调用 api 通知 A 服务。这两种方式都不是很优雅。")]),t._v(" "),v("p",[t._v("使用消息总线，可以很方便解决这个问题， A 调用 B 服务后，只需要监听 B 处理完成的消息，当 B 处理完成后，会发送一条消息给 MQ，MQ 会将此消息转发给 A 服务。这样 A 服务既不用循环调用 B 的查询 api，也不用提供 callback api。同样B 服务也不用 做这些操作。A 服务还能及时的得到异步处理成功的消息。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/RabbitMQ/RabbitMQ-00000005.png",alt:"RabbitMQ-00000005"}})]),t._v(" "),v("h3",{attrs:{id:"mq-的分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mq-的分类"}},[t._v("#")]),t._v(" MQ 的分类")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("**ActiveMQ**")])]),t._v(" "),v("p",[t._v("优点：单机吞吐量万级，时效性 ms 级，可用性高，基于主从架构实现高可用性，消息可靠性较 低的概率丢失数据")]),t._v(" "),v("p",[t._v("缺点：官方社区现在对 ActiveMQ 5.x 维护越来越少，高吞吐量场景较少使用。")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("**Kafka**")])]),t._v(" "),v("p",[t._v("大数据的杀手锏，谈到大数据领域内的消息传输，则绕不开 Kafka，这款为"),v("strong",[t._v("大数据而生")]),t._v("的消息中间件， 以其百万级 TPS 的吞吐量名声大噪，迅速成为大数据领域的宠儿，在数据采集、传输、存储的过程中发挥 着举足轻重的作用。目前已经被 LinkedIn，Uber, Twitter, Netflix 等大公司所采纳。")]),t._v(" "),v("p",[v("strong",[t._v("优点")]),t._v("：性能卓越，单机写入 TPS 约在百万条/秒，最大的优点，就是"),v("strong",[t._v("吞吐量高")]),t._v("。时效性 ms 级可用性非 常高，kafka 是分布式的，一个数据多个副本，少数机器宕机，不会丢失数据，不会导致不可用,消费者采 用 Pull 方式获取消息, 消息有序, 通过控制能够保证所有消息被消费且仅被消费一次;有优秀的第三方Kafka Web 管理界面 Kafka-Manager；在日志领域比较成熟，被多家公司和多个开源项目使用；功能支持： 功能 较为简单，主要支持简单的 MQ 功能，在大数据领域的实时计算以及日志采集被大规模使用")]),t._v(" "),v("p",[v("strong",[t._v("缺点")]),t._v("：Kafka 单机超过 64 个队列/分区，Load 会发生明显的飙高现象，队列越多，load 越高，发送消 息响应时间变长，使用短轮询方式，实时性取决于轮询间隔时间，消费失败不支持重试；支持消息顺序， 但是一台代理宕机后，就会产生消息乱序，"),v("strong",[t._v("社区更新较慢")]),t._v("；")]),t._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[t._v("**RocketMQ**")])]),t._v(" "),v("p",[t._v("RocketMQ 出自阿里巴巴的开源产品，用 Java 语言实现，在设计时参考了 Kafka，并做出了自己的一 些改进。被阿里巴巴广泛应用在订单，交易，充值，流计算，消息推送，日志流式处理，binglog 分发等场 景。")]),t._v(" "),v("p",[t._v("优点："),v("strong",[t._v("单机吞吐量十万级")]),t._v(",可用性非常高，分布式架构，"),v("strong",[t._v("消息可以做到 0 丢失")]),t._v(",MQ 功能较为完善，还是分 布式的，扩展性好,支"),v("strong",[t._v("持 10 亿级别的消息堆积")]),t._v("，不会因为堆积导致性能下降,源码是 java 我们可以自己阅 读源码，定制自己公司的 MQ")]),t._v(" "),v("p",[t._v("缺点："),v("strong",[t._v("支持的客户端语言不多")]),t._v("，目前是 java 及 c++，其中 c++不成熟；社区活跃度一般,没有在MQ 核心中去实现 JMS 等接口,有些系统要迁移需要修改大量代码")]),t._v(" "),v("div",{staticClass:"custom-block note"},[v("p",{staticClass:"custom-block-title"},[t._v("**RabbitMQ**")])]),t._v(" "),v("p",[t._v("2007 年发布，是一个在AMQP(高级消息队列协议)基础上完成的，可复用的企业消息系统，"),v("strong",[t._v("是当前最主流的消息中间件之一。")])]),t._v(" "),v("p",[t._v("优点：由于 erlang 语言的高并发特性，性能较好；吞吐量到万级，MQ 功能比较完备,健壮、稳定、易 用、跨平台、支持多种语言 如：Python、Ruby、.NET、Java、JMS、C、PHP、ActionScript、XMPP、STOMP 等，支持 AJAX 文档齐全；开源提供的管理界面非常棒，用起来很好用,社区活跃度高；更新频率相当高")]),t._v(" "),v("p",[t._v("官网更新："),v("a",{attrs:{href:"https://www.rabbitmq.com/news.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.rabbitmq.com/news.html"),v("OutboundLink")],1)]),t._v(" "),v("p",[t._v("缺点：商业版需要收费,学习成本较高")]),t._v(" "),v("h3",{attrs:{id:"mq-的选择"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mq-的选择"}},[t._v("#")]),t._v(" MQ 的选择")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("Kafka")])])]),t._v(" "),v("p",[t._v("Kafka 主要特点是基于Pull 的模式来处理消息消费，追求高吞吐量，一开始的目的就是用于日志收集 和传输，适合产生大量数据的互联网服务的数据收集业务。大型公司建议可以选用，如果有日志采集功能， 肯定是首选 kafka 了。")]),t._v(" "),v("p",[t._v("尚硅谷官网 kafka 视频教程：http://www.gulixueyuan.com/course/330/tasks")]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("RocketMQ")])])]),t._v(" "),v("p",[t._v("天生为"),v("strong",[t._v("金融互联网")]),t._v("领域而生，对于可靠性要求很高的场景，尤其是电商里面的订单扣款，以及业务削 峰，在大量交易涌入时，后端可能无法及时处理的情况。RoketMQ 在稳定性上可能更值得信赖，这些业务 场景在阿里双 11 已经经历了多次考验，如果你的业务有上述并发场景，建议可以选择 RocketMQ。")]),t._v(" "),v("ul",[v("li",[t._v("RabbitMQ")])]),t._v(" "),v("p",[t._v("结合 erlang 语言本身的并发优势，性能好时效性微秒级，社区活跃度也比较高，管理界面用起来十分 方便，如果你的"),v("strong",[t._v("数据量没有那么大")]),t._v("，中小型公司优先选择功能比较完备的 RabbitMQ。")]),t._v(" "),v("h2",{attrs:{id:"rabbitmq"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq"}},[t._v("#")]),t._v(" RabbitMQ")]),t._v(" "),v("h3",{attrs:{id:"rabbitmq-的概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#rabbitmq-的概念"}},[t._v("#")]),t._v(" RabbitMQ 的概念")]),t._v(" "),v("p",[t._v("RabbitMQ 是一个消息中间件：它接受并转发消息。")]),t._v(" "),v("p",[t._v("你可以把它当做一个快递站点，当你要发送一个包裹时，你把你的包裹放到快递站，快递员最终会把你的快递送到收件人那里，按照这种逻辑 RabbitMQ 是 一个快递站，一个快递员帮你传递快件。")]),t._v(" "),v("p",[t._v("RabbitMQ 与快递站的主要区别在于，它不处理快件而是接收， 存储和转发消息数据。")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/RabbitMQ/image-20210625230930992.png",alt:"image-20210625230930992"}})]),t._v(" "),v("p",[t._v("官网："),v("a",{attrs:{href:"https://www.rabbitmq.com/#features",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.rabbitmq.com/#features"),v("OutboundLink")],1)]),t._v(" "),v("h3",{attrs:{id:"四大核心概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#四大核心概念"}},[t._v("#")]),t._v(" 四大核心概念")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("生产者")]),t._v(" "),v("p",[t._v("产生数据发送消息的程序是生产者")])]),t._v(" "),v("li",[v("p",[t._v("交换机")]),t._v(" "),v("p",[t._v("交换机是 RabbitMQ 非常重要的一个部件，一方面它接收来自生产者的消息，另一方面它将消息 推送到队列中。交换机必须确切知道如何处理它接收到的消息，是将这些消息推送到特定队列还是推 送到多个队列，亦或者是把消息丢弃，这个得有交换机类型决定")])]),t._v(" "),v("li",[v("p",[t._v("队列")]),t._v(" "),v("p",[t._v("队列是 RabbitMQ 内部使用的一种数据结构，尽管消息流经 RabbitMQ 和应用程序，但它们只能存 储在队列中。队列仅受主机的内存和磁盘限制的约束，本质上是一个大的消息缓冲区。许多生产者可 以将消息发送到一个队列，许多消费者可以尝试从一个队列接收数据。这就是我们使用队列的方式")])]),t._v(" "),v("li",[v("p",[t._v("消费者")]),t._v(" "),v("p",[t._v("消费与接收具有相似的含义。消费者大多时候是一个等待接收消息的程序。请注意生产者，消费 者和消息中间件很多时候并不在同一机器上。同一个应用程序既可以是生产者又是可以是消费者。")])])]),t._v(" "),v("h3",{attrs:{id:"各个名词介绍"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#各个名词介绍"}},[t._v("#")]),t._v(" 各个名词介绍")]),t._v(" "),v("p",[v("img",{attrs:{src:"https://cdn.jsdelivr.net/gh/oddfar/static/img/RabbitMQ/RabbitMQ-00000007.png",alt:"RabbitMQ-00000007"}})]),t._v(" "),v("ul",[v("li",[v("p",[t._v("Broker")]),t._v(" "),v("p",[t._v("接收和分发消息的应用，RabbitMQ Server 就是 Message Broker")])]),t._v(" "),v("li",[v("p",[t._v("Virtual host")]),t._v(" "),v("p",[t._v("出于多租户和安全因素设计的，把 AMQP 的基本组件划分到一个虚拟的分组中，类似 于网络中的 namespace 概念。当多个不同的用户使用同一个 RabbitMQ server 提供的服务时，可以划分出 多个 vhost，每个用户在自己的 vhost 创建 exchange／queue 等")])]),t._v(" "),v("li",[v("p",[t._v("Connection")]),t._v(" "),v("p",[t._v("publisher／consumer 和 broker 之间的 TCP 连接")])]),t._v(" "),v("li",[v("p",[t._v("Channel")]),t._v(" "),v("p",[t._v("如果每一次访问 RabbitMQ 都建立一个 Connection，在消息量大的时候建立 TCP Connection 的开销将是巨大的，效率也较低。Channel 是在 connection 内部建立的逻辑连接，如果应用程 序支持多线程，通常每个 thread 创建单独的 channel 进行通讯，AMQP method 包含了 channel id 帮助客 户端和 message broker 识别 channel，所以 channel 之间是完全隔离的。Channel 作为轻量级的 Connection 极大减少了操作系统建立 TCP connection 的开销")])]),t._v(" "),v("li",[v("p",[t._v("Exchange")]),t._v(" "),v("p",[t._v("message 到达 broker 的第一站，根据分发规则，匹配查询表中的 routing key，分发 消息到 queue 中去。常用的类型有：direct (point-to-point), topic (publish-subscribe) and fanout (multicast)")])]),t._v(" "),v("li",[v("p",[t._v("Queue")]),t._v(" "),v("p",[t._v("消息最终被送到这里等待 consumer 取走")])]),t._v(" "),v("li",[v("p",[t._v("Binding")]),t._v(" "),v("p",[t._v("exchange 和 queue 之间的虚拟连接，binding 中可以包含 routing key，Binding 信息被保 存到 exchange 中的查询表中，用于 message 的分发依据")])])])])}),[],!1,null,null,null);a.default=s.exports}}]);