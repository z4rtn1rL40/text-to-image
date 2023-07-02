import { createCanvas } from 'canvas'
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../constants.js'

export default async (...args) => {
    try {
        const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = 'lightblue'
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        ctx.fillStyle = 'black'
        ctx.font = '30px Arial'
        args.forEach((s) => ctx.fillText(s + '\n', 50, 200))
        return canvas.toBuffer()
    } catch (e) {
        throw new Error(e)
    }
}
