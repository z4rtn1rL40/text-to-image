import joi from 'joi'
import { STRING_MAX_LENGTH, STRING_MIN_LENGTH } from '../constants.js'
export default joi.object({
    title: joi
        .string()
        .alphanum()
        .min(STRING_MIN_LENGTH)
        .max(STRING_MAX_LENGTH)
        .required(),
    author: joi
        .string()
        .alphanum()
        .min(STRING_MIN_LENGTH)
        .max(STRING_MAX_LENGTH)
        .required(),
    content: joi
        .string()
        .alphanum()
        .min(STRING_MIN_LENGTH)
        .max(STRING_MAX_LENGTH)
        .required(),
})
