const { getList, getDetail, newBlog, updateBlog, deleteBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = async (req, res) => {
    const id = req.query.id
    
    // 获取博客列表
    if (req.method === 'GET' && req.path === '/api/blog/list') {
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author, keyword)
        // return new SuccessModel(listData)
        // const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
        // const result = await getList(author, keyword)
        // return new SuccessModel(result)
    }

    // 获取博客详情
    if (req.method === 'GET' && req.path === '/api/blog/detail') {
        const detailData = getDetail(id)
        return new SuccessModel(detailData)
    }

    // 新建一篇博客
    if (req.method === 'POST' && req.path === '/api/blog/new') {
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }

    // 更新一篇博客
    if (req.method === 'POST' && req.path === '/api/blog/update') {
        const result = updateBlog(id, req.body)
        if (result) {
            return new SuccessModel()
        }
        return new ErrorModel('更新博客失败')
    }

     // 删除一篇博客
     if (req.method === 'POST' && req.path === '/api/blog/delete') {
        const result = deleteBlog(id)
        if (result) {
            return new SuccessModel()
        }
        return new ErrorModel('删除博客失败')
    }
}

module.exports = handleBlogRouter