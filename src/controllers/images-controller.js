import imageGenSchema from '../schemas/image-gen-schema.js'
import imageGenerator from '../services/image-generator.js'

export const generateImage = async (req, res, next) => {
    const isValid = imageGenSchema.validate(req.body)
    // FIXME: Error handling
    if (isValid.error) {
        next(isValid.error)
    }

    const image = await imageGenerator(Object.values(req.body))
    res.setHeader('Content-Type', 'image/png')
    res.setHeader('Content-Length', image.length)
    res.send(image)
}
