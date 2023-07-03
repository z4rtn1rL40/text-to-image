import { Router } from 'express'
import { generateImage } from '../controllers/images-controller.js'

const PREFIX = '/images'
export const imagesRouter = new Router()

imagesRouter.post(`${PREFIX}/image`, generateImage)
