import 'dotenv/config'
import express from 'express'
import { imagesRouter } from './src/routes/images-route.js'

const app = new express()

app.use(express.json())

app.listen(process.env.APP_PORT, () => {
    console.log(`[Server]: Running at http://localhost:${process.env.APP_PORT}`)
})

app.use(imagesRouter)
