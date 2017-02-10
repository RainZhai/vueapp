import Mock from 'mockjs'

Mock.mock('http://127.0.0.1:3000/article/getIndexImage', { data: { success: true, img: 'https://upload.jackhu.top/blog/index/jinjihu002.jpg-600x1500q80' } })

Mock.mock('http://127.0.0.1:3000/tags/getFrontTagList', {
    data: [{
            '_id': '55c969c066af1ad21c80701d',
            'name': 'node.js',
            'cid': '55c968d466af1ad21c80701a',
            '__v': 0,
            'sort': 1,
            'is_show': true,
            'is_index': true
        },
        {
            '_id': '55c969dd66af1ad21c80701e',
            'name': 'angular',
            'cid': '55c968d466af1ad21c80701a',
            '__v': 0,
            'sort': 1,
            'is_show': true,
            'is_index': true
        }
    ]
})

Mock.mock('http://127.0.0.1:3000/article/getFrontArticleList?currentPage=1&itemsPerPage=10&sortName=publish_time&tagId=', {
    data: [{
            '_id': '57fb7c84cf97d30019b941d0',
            'title': 'docker + rancher + jenkins 实现集成测试和自动部署(CI/CD)',
            'publish_time': '2016-10-10T11:33:24.047Z',
            'like_count': 3,
            'comment_count': 1,
            'visit_count': 898,
            'images': [{
                'url': 'https://upload.jackhu.top/blog/article/1476102450719docker-jenkins-rancher.jpg'
            }]
        },
        {
            '_id': '570a87dc55e9843915ed16fa',
            'title': '服务端渲染(Universal/Isomorphic)之React (上)',
            'publish_time': '2016-04-10T17:05:32.772Z',
            'like_count': 15,
            'comment_count': 41,
            'visit_count': 5534,
            'images': []
        }
    ]
})

Mock.mock('http://127.0.0.1:3000/users/snsLogins', { success: true, data: ['github', 'qq'] })

Mock.mock('http://127.0.0.1:3000/article/57fb7c84cf97d30019b941d0/getPrenext?currentPage=1&itemsPerPage=10&sortName=publish_time&tagId=', {
    data: {
        next: { _id: '57fc5ca3cf97d30019b941d1', title: '使用docker一键启动jackblog的所有版本' },
        prev: { _id: '570a87dc55e9843915ed16fa', title: '服务端渲染(Universal/Isomorphic)之React (上)' }
    }
})

Mock.mock('http://127.0.0.1:3000/comment/57fb7c84cf97d30019b941d0/getFrontCommentList', {
    'data': [{
        '_id': '580f4137ed269300192dd963',
        'aid': '57fb7c84cf97d30019b941d0',
        'content': 'dafasfasdf',
        'user_id': {
            '_id': '580f3fdced269300192dd961',
            'nickname': 'pigchilde',
            'avatar': 'https://avatars.githubusercontent.com/u/5334955?v=3'
        },
        '__v': 0,
        'updated': '2016-10-25T11:25:43.734Z',
        'created': '2016-10-25T11:25:43.734Z',
        'status': 1,
        'replys': [{
            'created': '2016-10-25T11:27:26.747Z',
            'user_info': {
                'nickname': 'pigchilde',
                'id': '580f3fdced269300192dd961'
            },
            'content': '@pigchilde 55245646',
            '_id': '580f419eed269300192dd964'
        }]
    }]
})

Mock.mock('http://127.0.0.1:3000/article/57fb7c84cf97d30019b941d0/getFrontArticle', {
    'data': {
        '_id': '57fb7c84cf97d30019b941d0',
        'title': 'docker + rancher + jenkins 实现集成测试和自动部署(CI/CD)',
        'content': '<p><img src=\'https://upload.jackhu.top/blog/article/1476102450719docker-jenkins-rancher.jpg\' alt=\'docker jenkins rancher\' title=\'docker jenkins rancher\'>\ndocker的火热程度相信不用说了, 只要你漫步在互联网上, 总是能看到docker的身影, 以致于你一天不去了解它, 都会感觉在你的世界里有一块未知地带, 做为立志做全栈的你, 岂能容忍!</p>\n<h5>基础知识及相关网站链接:</h5>\n<ul>\n<li><a href=\'https://docs.docker.com/\'>docker 官方文档</a></li>\n<li><a href=\'https://hub.docker.com/\'>docker 官方镜像仓库</a></li>\n<li><a href=\'https://cloud.docker.com\'>docker云 官方docker容器部署平台</a></li>\n<li><a href=\'http://dockone.io/\'>docker中文网站dockerone</a></li>\n<li><a href=\'http://www.docker.org.cn/index.html\'>docker中文社区</a></li>\n<li><a href=\'http://docs.rancher.com/\'>rancher 官方文档</a></li>\n<li><a href=\'https://jenkins.io/doc/\'>jenkins 官方文档</a></li>\n</ul>\n<p>docker 的安装非常简单, mac os最新的安装方式是Docker for Mac,Docker Toolbox方式已经过时了. 国内下载docker官方镜像的速度比较慢, 可以使用阿里云或daocloud添加加速器, 登录阿里云或daocloud控制台可以查看自己的专属加速器地址.<br>\nMac OS添加到Preferences-&gt;Advanced-&gt;Registory.<br>\nlinux通过修改 /etc/default/docker文件添加一行</p>\n<pre><code>DOCKER_OPTS=&quot;--registry-mirror=\'专属加速器地址\'&quot;\n</code></pre>\n<h3>一, 使用rancher管理docker</h3>\n<p>rancher是一个容器管理和服务编排工具, 有中文界面, 它最大的优点是可以跨云主机管理, 通过rancher-server和rancher-agent保持连接, 主机之间可以相互通信, 阿里云的容器服务也可以实现自动部署, 但是只能在阿里云. 另外国内一些商业容器服务, 如有容云它是基础于rancher开发的, daocloud也可以非常方便的管理不同主机的docker容器, 并实现自动部署, 但是是收费的, 可免费试用两个月.<br>\n安装方法:</p>\n<pre><code>docker run -d --restart=unless-stopped --name=rancher-server -v /opt/rancher/mysql:/var/lib/mysql -p 8080:8080 rancher/server\n</code></pre>\n<p>将/opt/rancher/mysql目录挂载到rancher-server以便将数据保存在本机.rancher/server镜像比较大,安装需要一些时间, 可以通过<code>docker logs -f rancher-server</code>查看是否安装完成.</p>\n<blockquote>\n<p>注意保证mysql目录的权限,<code>chown -R 102:105 /opt/rancher/mysql</code></p>\n</blockquote>\n<p>安装完成后打开localhost:8080, 切换至中文界面, 将访问控制改为本地验证, 即可添加账号.\n<img src=\'https://upload.jackhu.top/blog/article/1476108488235Snip20161010_1.png\' alt=\'rancher01\'>\n接下来就是添加环境, 添加主机, 添加应用栈, 添加服务, 每一个服务就是启动一个docker容器, 原本需要运行docker 命令来启动容器,都可通过界面填写参数来启动.</p>\n<blockquote>\n<p>rancher-compose<br>\ndocker 可以通过docker-compose来批量启动容器, rancher也可以借助rancher-compose来启动编排好的服务. 通过rancher web界面右下角下载rancher-compose工具, 然后需要两个文件, docker-compose.yml和rancher-compose.yml</p>\n</blockquote>\n<p>添加环境API Keys和账号Api Keys, rancher-compose启动服务需要环境api keys, 后面实现自动部署需要账号API keys, 而且密钥只显示一次,先记下来后面会用来.\n<img src=\'https://upload.jackhu.top/blog/article/1476110188949Snip20161010_2.png\' alt=\'rancher02\'></p>\n<h4>二, 利用webhooks触发jenkins测试任务</h4>\n<p>jenkins 分为主/从服务器, 主服务器用来调度, 从服务器来跑相关任务, 当然也可以只用一个主服务器, 我们用rancher-compose来让jenkins在容器中运行. 新建两个文件docker-compose.yml , rancher-compose.yml内容如下.<br>\ndocker-compose.yml</p>\n<pre><code>jenkins-slave-nodejs-6:\n  labels:\n    io.rancher.container.pull_image: always\n    io.rancher.scheduler.affinity:host_label: provider=主机标签\n  tty: true\n  image: jackhu/jenkins-slave-nodejs:6\n  links:\n  - redis:redis\n  - mongo:mongo\n  volumes:\n  - /opt/jenkins/jenkins_slave_nodejs_6:/home/jenkins\n  stdin_open: true\nredis:\n  labels:\n    io.rancher.scheduler.affinity:host_label: provider=主机标签\n  tty: true\n  image: redis\n  stdin_open: true\njenkins-master:\n  ports:\n  - 8090:8080/tcp\n  labels:\n    io.rancher.scheduler.affinity:host_label: provider=主机标签\n  tty: true\n  image: jackhu/jenkins-master-privileged\n  links:\n  - jenkins-slave-nodejs-6:nodejs6\n  privileged: true\n  volumes:\n  - /opt/jenkins/jenkins_home:/var/jenkins_home\n  - /usr/bin/docker:/usr/bin/docker\n  - /var/run/docker.sock:/var/run/docker.sock\n  stdin_open: true\nmongo:\n  labels:\n    io.rancher.scheduler.affinity:host_label: provider=主机标签\n  tty: true\n  image: mongo\n  stdin_open: true\n</code></pre>\n<p>rancher-compose.yml</p>\n<pre><code>jenkins-slave-nodejs-6:\n  scale: 1\n  retain_ip: true\nredis:\n  scale: 1\njenkins-master:\n  scale: 1\nmongo:\n  scale: 1\n</code></pre>\n<blockquote>\n<p>注意jenkins-master的时间不正确可挂载本机的文件如:</p>\n</blockquote>\n<pre><code>  - /etc/localtime:/etc/localtime\n  - /etc/timezone:/etc/timezone\n</code></pre>\n<blockquote>\n<p>上面jenkins-master 挂载了本机的docker文件, 这样才能在jenkins-master中使用docker命令, 而jenkins的数据文件保存在本机的/opt/jenkins/jenkins_home中, 注意保持此目录有jenkins用户的权限.如果在jenkins不能调用docker,查看/var/run/docker.sock文件jenkins用户是否有权限. <code>chown -R 1000 /var/run/docker.sock</code></p>\n</blockquote>\n<p>启动jenkins服务</p>\n<pre><code>rancher-compose --url http://RANCHER_HOST:RANCHER_PORT/v1/ --access-key RANCHER_API_KEY --secret-key RANCHER_API_KEY_SECRET --project-name jenkins --verbose up\n</code></pre>\n<p>稍等片刻,启动成功, 打开localhost:8090既可进入jenkins界面. 第一次启动将提示安装插件和添加管理员用户, 中文界面, 在系统管理-&gt;Configure Global Security中配置好访问控制权限, 后面添加webhooks需要有权限的用户Token.\n<img src=\'https://upload.jackhu.top/blog/article/1476112093733Snip20161010_3.png\' alt=\'jenkins01\'></p>\n<p>添加一个任务jenkins-demo-deploy-01,选择&lt;构建一个自由风格的软件项目&gt;,以<a href=\'https://github.com/jackhutu/jenkins-demo.git\'>https://github.com/jackhutu/jenkins-demo.git</a>为例.如何触发自动构建项目, 配置如下:\n<img src=\'https://upload.jackhu.top/blog/article/1476112596892Snip20161010_4.png\' alt=\'jenkins002\'><br>\n触发构建这里填上自己定义的token, 然后在github项目settings中webhooks项, 点击添加webhooks, Payload URL如下:</p>\n<pre><code>https://\bjenkins用户名:\bjenkins用户token[at]jenkinsServerURL/job/jenkins-demo-test-nodejs6/build?token=自定义的token\n</code></pre>\n<p>默认是仅push时触发. 这样当每次向github仓库push代码时这个jenkins任务就会触发.在jenkins任务构建这一栏可以执行相关测试任务,\n<img src=\'https://upload.jackhu.top/blog/article/1476113318754Snip20161010_5.png\' alt=\'jenkins003\'>\n每次测试失败可邮件通知, 前提是安装邮件通知插件, 配置好邮箱账号.</p>\n<h4>三, 利用rancher api实现自动部署</h4>\n<p>上面是每次push时自动测试, 如果你想每次push后测试完成就自动部署, 可以在Execute Shell里接着添加部署命令,</p>\n<pre><code>docker login -u xxx -p xxx\ndocker build -t images_url $WORKSPACE\ndocker push images_url\n</code></pre>\n<p>上面代码将根据项目目录下的Dockerfile文件, 来构建一个镜像, 并推送到镜像仓库, 镜像仓库你可以自己搭建也可以用官方的,或者阿里云的.都是免费的.</p>\n<p>然后添加另一个任务,在这次任务成功之后运行.如, 新建一个任务jenkins-demo-deploy-02, 在上一个任务jenkins-demo-deploy-01之后执行:\n<img src=\'https://upload.jackhu.top/blog/article/1476113785413Snip20161010_6.png\' alt=\'jenkins004\'>\n执行代码如下:</p>\n<p><img src=\'https://upload.jackhu.top/blog/article/1476114039687Snip20161010_8.png\' alt=\'jenkins005\'><br>\n通过上面的账号API Key调用rancher server api 来实现服务的自己升级, 这样就实现全自动测试部署. rancher升级如果失败,还可以回滚, 而且可以在不中断当前服务无缝升级.</p>\n',
        'visit_count': 939,
        'comment_count': 1,
        'like_count': 3,
        'publish_time': '2016-10-10T11:33:24.047Z'
    }
})


module.exports = Mock