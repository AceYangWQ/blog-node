const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = async (req, res) => {
    const id = req.query.id
    
    // 获取博客列表
    if (req.method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        
        // promise
        // const result = getList(author, keyword)
        // return result.then(listData => {
        //     return new SuccessModel(listData)
        // })

        // await
        const listData = await getList(author, keyword)
        return new SuccessModel(listData)
    }

    // 获取博客详情
    if (req.method === 'GET' && req.path === '/api/blog/detail') {
        // await
        const detailData = await getDetail(id)
        return new SuccessModel(detailData)
    }

    // 新建一篇博客
    if (req.method === 'POST' && req.path === '/api/blog/new') {
        // await
        req.body.author = 'wangwu' // 假数据，待开发登录时再改成真实数据
        const data = await newBlog(req.body)
        return new SuccessModel(data)
    }

    // 更新一篇博客
    if (req.method === 'POST' && req.path === '/api/blog/update') {
        const val = await updateBlog(id, req.body)
        if (val) {
            return new SuccessModel('更新博客成功')
        }
        return new ErrorModel('更新博客失败')
    }

     // 删除一篇博客
     if (req.method === 'POST' && req.path === '/api/blog/delete') {
        const author = 'zhangsan' // 假数据，待开发登录时再改成真实数据
        const val = await deleteBlog(id, author)
        if (val) {
            return new SuccessModel('删除博客成功')
        }
        return new ErrorModel('删除博客失败')
    }
}

module.exports = handleBlogRouter