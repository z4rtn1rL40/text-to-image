import 'dotenv/config'
import express from 'express'
import { imagesRouter } from './src/routes/images-route.js'

const PORT = process.env.APP_PORT || 3333
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

    res.status(err.statusCode).send({ message: err.message })
}
app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`[Server]: Running at http://localhost:${PORT}`)
})

app.use(imagesRouter)
app.use(errorSender)
app.use(errorLogger)
