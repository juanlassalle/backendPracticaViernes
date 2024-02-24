import { Router } from "express";
import routerFilms from "./api/films.js";
import routerUser from "./api/users.js";
import { checkToken } from "./middlewares.js";

const router = Router()

router.use('/films',checkToken,routerFilms)
router.use('/users',routerUser)

export default router