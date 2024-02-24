import { Router } from "express";
import { Film } from "../../models/films.js";
import router from "../api.js";

const routerFilms = Router()

routerFilms.get('/', async(req,res) => {
    console.log(req.usuarioId)
    const films = await Film.findAll()
    res.json(films)
})

routerFilms.post('/',async (req,res) => {
    const film = await Film.create(req.body)
    res.json(film)
})

routerFilms.put('/:filmId', async (req,res) => {
    await Film.update(req.body, {
        where: {id: req.params.filmId}
    })
    res.json({success: 'Se ha modificado'})
})
routerFilms.delete('/:filmId', async (req,res) => {
    await Film.destroy({
        where: {id: req.params.filmId}
    })
    res.json({success : 'Se ha borrado la pelicula'})
})
export default routerFilms