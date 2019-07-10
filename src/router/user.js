const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = async (req, res) => {
    
    // 登录
    if (req.method === 'POST' && req.path === '/api/user/login') {
        const { username, password } = req.body
        const data = await loginCheck(username, password)
        if(data.username) {
            return new SuccessModel('登录成功')
        }
        return new ErrorModel('登录失败')
    }
}

module.exports = handleUserRouter