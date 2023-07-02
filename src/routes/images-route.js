import { Router } from 'express'
import { generateImage } from '../controllers/images-controller.js'

const PREFIX = '/images'
export const imagesRouter = new Router()

imagesRouter.post(`${PREFIX}/image`, (req, res, next) => {
    console.log('req >>> ', req.body)
    return generateImage(req, res, next)
})
