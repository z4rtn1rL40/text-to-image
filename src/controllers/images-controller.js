import imageGenSchema from '../schemas/image-gen-schema.js'
import imageGenerator from '../services/image-generator.js'
import { HTTP_STATUS_CODES } from '../utils/constants.js'

export const generateImage = async (req, res, next) => {
    const isValid = imageGenSchema.validate(req.body)
    if (isValid.error) {
        const err = new Error(isValid.error.message)
        err.statusCode = HTTP_STATUS_CODES.NotAcceptable
        return next(err)
    }

    const image = await imageGenerator(...Object.values(req.body))
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Content-Length', image.length)
    res.send(image)
}
