const { exec } = require('../db/mysql')

const loginCheck = async (username, password) => {
    const sql = `
        select username, realname from users where username='${username}' and password='${password}'
    `
    const rows = await exec(sql)
    if(rows) {
        return rows[0] || {}
    }
}

module.exports = {
    loginCheck
}