const getList = (author, keyword) => {
    // 先返回假数据 (格式是正确的)
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            author: 'zhangsan',
            createTime: 1562430391113
        },
        {
            id: 2,
            title: '标题B',
            content: '内容B',
            author: 'lisi',
            createTime: 1562430391113
        }
    ]
}

const getDetail = (id) => {
    // 返回假数据
    return {
        id: 1,
        title: '标题A',
        content: '内容A',
        author: 'zhangsan',
        createTime: 1562430391113
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象， 包含 title content 属性
    return {
        id: 3 // 表示新建博客，插入到数据里面的 id
    }
} 

const updateBlog = (id, blogData = {}) => {
    // id 就是要更新博客的 id
    // blogData 是一个博客对象， 包含 title content 属性
    return true
}

const deleteBlog = (id) => {
    // id 就是要删除博客的 id
    return true
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}