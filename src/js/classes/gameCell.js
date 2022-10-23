class GameCell {
  constructor(width, height) {
    this.width = width
    this.height = height
    this.cell = document.createElement('div')
  }

  drawCell() {
    this.cell.classList.add('cell')
    this.cell.style.width = `${this.width}%`
    this.cell.style.height = `${this.height}%`
    return this.cell
  }
}

export default GameCell
