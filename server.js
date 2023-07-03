import 'dotenv/config'
import express from 'express'
import { imagesRouter } from './src/routes/images-route.js'

const app = new express()

app.use(express.json())

const errorLogger = (err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err.stack)
    next(err)
}
const errorSender = (err, req, res, next) => {
    if (res.headersSend) {
        next(err)
    }

    res.status(err.statusCode).send(err.message).json()
}
app.listen(process.env.APP_PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`[Server]: Running at http://localhost:${process.env.APP_PORT}`)
})

app.use(imagesRouter)
app.use(errorSender)
app.use(errorLogger)
