const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    // 返回 promise
    return exec(sql)
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