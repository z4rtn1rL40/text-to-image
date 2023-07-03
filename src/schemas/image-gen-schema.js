import joi from 'joi'
import { STRING_MAX_LENGTH, STRING_MIN_LENGTH } from '../utils/constants.js'
export default joi.object({
    title: joi
        .string()
        .min(STRING_MIN_LENGTH)
        .max(STRING_MAX_LENGTH)
        .required(),
    author: joi
        .string()
        .min(STRING_MIN_LENGTH)
        .max(STRING_MAX_LENGTH)
        .required(),
    content: joi
        .string()
        .min(STRING_MIN_LENGTH)
        .max(STRING_MAX_LENGTH)
        .required(),
})
