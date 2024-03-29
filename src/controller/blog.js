const { exec } = require('../db/mysql')

const getList = async (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc`

    // 返回
    return await exec(sql)
}

const getDetail = async (id) => {
    const sql = `select * from blogs where id='${id}'`
    const rows = await exec(sql)
    if(rows) {
        return rows[0]
    }
}

const newBlog = async (blogData = {}) => {
    // blogData 是一个博客对象， 包含 title content author 属性
    const { title, content, author } = blogData
    const createtime = Date.now()

    const sql = `
        insert into blogs (title, content, author, createtime)
        values ('${title}', '${content}', '${author}', ${createtime})
    `
    const insertData = await exec(sql)
    if(insertData) {
        return {
            id: insertData.insertId
        }
    }
} 

const updateBlog = async (id, blogData = {}) => {
    // id 就是要更新博客的 id
    // blogData 是一个博客对象， 包含 title content 属性

    const { title, content } = blogData
    const sql = `
        update blogs set title='${title}', content='${content}' where id=${id}
    `
    const updateData = await exec(sql)
    if(updateData.affectedRows > 0) {
        return true
    }
    return false
}

const deleteBlog = async (id, author) => {
    // id 就是要删除博客的 id
    const sql = `
        delete from blogs where id=${id} and author='${author}'
    `
    const deleteData = await exec(sql)
    if(deleteData.affectedRows > 0) {
        return true
    }
    return false
}

module.exports = {
    getList,
    getDetail,
    newBlog,
    updateBlog,
    deleteBlog
}