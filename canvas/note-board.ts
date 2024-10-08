import type { TransferType } from './types'
import { clearAllCvs, createCvs } from './tools'
import { getCvsImg, type CvsToDataOpts, type HandleImgReturn } from './handleImg'


/**
 * 画板，可以用来签名
 */
export class NoteBoard {

    public ctx: CanvasRenderingContext2D
    public cvs: HTMLCanvasElement
    private opts: NoteBoardOptions

    private isDrawing = false
    private start = { x: 0, y: 0 }

    private onMousedown = this._onMousedown.bind(this)
    private onMousemove = this._onMousemove.bind(this)
    private onMouseup = this._onMouseup.bind(this)

    constructor(opts?: NoteBoardOptions) {
        this.opts = this.mergeOpts(opts)

        const {
            canvas,
            width,
            height
        } = this.opts

        if (!canvas) {
            const { ctx, cvs } = createCvs(width, height)
            this.ctx = ctx
            this.cvs = cvs
        }
        else {
            this.cvs = canvas
            canvas.width = width
            canvas.height = height
            this.ctx = canvas.getContext('2d')
        }

        this.init()
    }

    /**
     * 获取画板内容，默认为 base64
     * @param resType 需要返回的文件格式，默认 `base64`
     * @param type 图片的 MIME 格式
     * @param quality 压缩质量
     */
    shotImg<T extends TransferType>(
        resType: T = 'base64' as T,
        mimeType?: string,
        quality?: number
    ): HandleImgReturn<T> {
        return getCvsImg<T>(this.cvs, resType, mimeType, quality)
    }

    /**
     * 清空画板
     */
    clear() {
        clearAllCvs(this.ctx, this.cvs)
        this.drawBgAndBorder()
    }

    /**
     * 设置画板配置
     */
    setOptions(opts: NoteBoardOptions) {
        this.opts = this.mergeOpts(opts)
        this.drawBgAndBorder()
    }

    /** 移除所有事件 */
    rmEvent() {
        this.cvs.removeEventListener('mousedown', this.onMousedown)
        this.cvs.removeEventListener('mousemove', this.onMousemove)
        this.cvs.removeEventListener('mouseup', this.onMouseup)
    }

    private init() {
        this.drawBgAndBorder()
        this.bindEvent()
    }

    private bindEvent() {
        this.cvs.addEventListener('mousedown', this.onMousedown)
        this.cvs.addEventListener('mousemove', this.onMousemove)
        this.cvs.addEventListener('mouseup', this.onMouseup)
    }

    private _onMousedown(e: MouseEvent) {
        this.isDrawing = true
        const { offsetX, offsetY } = e
        this.start = { x: offsetX, y: offsetY }
    }

    private _onMousemove(e: MouseEvent) {
        if (!this.isDrawing) return
        const { offsetX, offsetY } = e
        const { ctx, start } = this

        ctx.strokeStyle = this.opts.storkeColor
        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(offsetX, offsetY)
        ctx.stroke()

        this.start = { x: offsetX, y: offsetY }
    }

    private _onMouseup() {
        this.isDrawing = false
    }

    private drawBg() {
        const { ctx, cvs } = this
        const { bgColor } = this.opts
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, cvs.width, cvs.height)
    }

    private drawBorder() {
        const { ctx, cvs } = this
        const { borderColor } = this.opts
        ctx.strokeStyle = borderColor
        ctx.strokeRect(0, 0, cvs.width, cvs.height)
    }

    private drawBgAndBorder() {
        this.drawBg()
        this.drawBorder()
    }

    private mergeOpts(opts: NoteBoardOptions = {}) {
        return {
            ... {
                storkeColor: '#000',
                borderColor: '#000',
                bgColor: '#fff',
                width: 800,
                height: 600,
                storkeWidth: 1
            },
            ...opts,
        }
    }
}

export type NoteBoardOptions = {
    canvas?: HTMLCanvasElement
    /** 背景色，默认白色 */
    bgColor?: string
    /** 边框颜色，默认黑色 */
    borderColor?: string
    /** 宽度，默认 800 */
    width?: number
    /** 高度，默认 600 */
    height?: number
    /** 画笔粗细，默认 1 */
    storkeWidth?: number
    /** 画笔颜色，默认黑色 */
    storkeColor?: string
}