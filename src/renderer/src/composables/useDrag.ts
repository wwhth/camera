class Drag {
  private PageX = 0
  private PageY = 0
  private body?: HTMLBodyElement
  constructor() { }
  public run(): void {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.querySelector('body')!
      this.body.addEventListener('mousedown', this.mouseDown.bind(this))

    })
  }
  private mouseDown(e: MouseEvent): void {
    console.log(e)
    this.PageX = e.pageX
    this.PageY = e.pageY
    const mouseMoveCallback = this.mouseMove.bind(this)
    this.body?.addEventListener('mousemove', mouseMoveCallback)
    this.body?.addEventListener('mouseup', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
    this.body?.addEventListener('mouseout', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
  }
  private mouseMove(e: MouseEvent): void {
    const x = e.pageX - this.PageX
    const y = e.pageY - this.PageY
    window.api.drag({ x, y })
  }
}

export default () => {
  const drag = new Drag()
  return { drag }
}
