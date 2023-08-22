const { Users } = require('../models/index')
const ApiError = require('../error/apiError')
class UserController {
    async getAll(req, res, next){
        try{
            const users = await Users.findAll()
            return res.json(users)
        } catch (e) {
            throw new Error(e)
        }   
        
    }

    async createUser(req, res, next){
        try{
            const {name, age} = req.body
            const isUser = await Users.findOne({where:{name}})
            
            if(isUser) {
                throw new Error('User has been declared')
            } else {
                const user = await Users.create({name, age})
                return res.json(user)
            }
        } catch(e){
            next(ApiError.badRequest(e.message))
        }
    }
}

module.exports = new UserController()