
import { getRandomStr, getWinHeight, getWinWidth } from './tools'
import { getColor as _getColor } from './color'



export type TechNumOpts = {
    width?: number
    height?: number
    /** 列宽，默认 20 */
    colWidth?: number
    /** 字体大小，默认 20 */
    fontSize?: number
    /** 字体 */
    font?: string
    /** 每次绘制时，遮罩的颜色，默认 rgba(12, 12, 12, .1) */
    maskColor?: string
    /** 0 ~ 1 的概率值，影响 y 轴数字间隔，默认 0.85 */
    gapRate?: number
    /** 绘制的字符串 */
    getStr?: () => string
    /** 文字颜色函数 */
    getColor?: () => string
    /** 绘制间隔，默认 30 */
    durationMS?: number
}

/**
 * 绘制黑客科技数字墙
 * @param canvas 
 * @param opts 
 * @returns 一个停止和开始函数
 */
export function createTechNum(canvas: HTMLCanvasElement, opts: TechNumOpts = {}) {
    const {
        width = getWinWidth(),
        height = getWinHeight(),
        colWidth = 20,
        fontSize = 20,
        font = 'Roboto Mono',
        maskColor = 'rgba(12, 12, 12, .1)',
        gapRate = 0.85,
        getStr = getRandomStr,
        getColor = _getColor,
        durationMS = 30
    } = opts

    canvas.width = width
    canvas.height = height

    let totalCol: number,
        /** 每列文字 y 轴索引 */
        colNext: number[]

    const ctx = canvas.getContext('2d')!
    let id: number

    initData(width, height)


    function initData(width: number, height: number) {
        canvas.width = width
        canvas.height = height

        totalCol = Math.floor(width / colWidth),
            /** 每列文字 y 轴索引 */
            colNext = Array.from({ length: totalCol }, () => 1)
    }

    function draw() {
        toLight(ctx, canvas, maskColor)
        ctx.fillStyle = getColor()
        ctx.font = `${fontSize}px ${font}`

        for (let i = 0; i < totalCol; i++) {
            const x = i * colWidth,
                // 每画一行 对应一行索引增加
                y = fontSize * colNext[i]++
            ctx.fillText(getStr(), x, y, width)

            // 超出屏幕高度 并且满足概率 重置 y 轴
            if (y >= height && Math.random() > gapRate) {
                colNext[i] = 1
            }
        }
    }

    function start() {
        id = window.setInterval(draw, durationMS)
    }
    function stop() {
        clearInterval(id)
    }

    return {
        start,
        stop,
        /** 重置大小 */
        setSize: initData
    }
}

/**
 * 每次绘制，增加一层蒙层，覆盖掉前面行的颜色
 */
function toLight(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, maskColor: string) {
    const { width, height } = canvas
    ctx.fillStyle = maskColor
    ctx.fillRect(0, 0, width, height)
}
