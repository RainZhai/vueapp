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
module.exports = Mock