import { Router } from "express";
import  bcrypt  from "bcryptjs"
import { User } from "../../models/users.js";
import { check, validationResult } from "express-validator";
import moment from "moment";
import jwt from "jwt-simple"

const routerUser = Router()

routerUser.post('/register',[
    check('username', 'El nombre de usuario es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('email','El mail deber estar correcto').isEmail()
],async (req,res) => {
    const errors = validationResult(req)

    if(!errors.isEmpty()){
        return res.status(422).json({errores: errors.array()})
    }

    req.body.password = bcrypt.hashSync(req.body.password, 10)
    const user =await User.create(req.body)
    res.json(user)
})

routerUser.post('/login', async (req,res) => {
    const user = await User.findOne({where: {email: req.body.email}})//me devuelve uno  si existe ninguno si no existe

    if (user) {
        const iguales = bcrypt.compareSync(req.body.password, user.password)
        if (iguales) {
            res.json({succes: createToken(user)})
        } else {
            res.json({error: 'Error en usuario y/o contraseña'})
        }
    } else {
        res.json({error: 'Error en usuario y/o contraseña'})
    }

})

const createToken = (user) => {
    const payload = {
        usuarioId: user.id,
        createAt: moment().unix(),
        expired: moment().add(5,'minutes').unix()
    }

    return jwt.decode(payload,'frase secreta')
}
export default routerUser