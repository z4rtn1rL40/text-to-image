import { createCanvas } from 'canvas'
import { CANVAS_HEIGHT, CANVAS_WIDTH } from '../utils/constants.js'

const MAIN_RED = '#DC2626'
const FONT_MAIN_WHITE = '#e3e3e3'
const FONT_STYLE = 'bold 40px "Roboto"'
const TEXT_ALIGN = 'center'

export default async (...args) => {
    try {
        const canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
        const ctx = canvas.getContext('2d')
        ctx.fillStyle = MAIN_RED
        ctx.textAlign = TEXT_ALIGN
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        ctx.fillStyle = FONT_MAIN_WHITE
        ctx.font = FONT_STYLE

        args.forEach((s, i) => {
            ctx.fillText(
                s.toUpperCase(),
                (CANVAS_WIDTH - s.length) / 2,
                100 + i * 250,
            )
        })

        return canvas.toBuffer()
    } catch (e) {
        throw new Error(e)
    }
}
