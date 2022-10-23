function drawGame() {
  document.querySelector('body').innerHTML =
    '<div class="game-window"><div class="buttons"><button class="shuffle button">Shuffle and start</button ><button class="stop button">Stop</button><button class="save button">Save</button><button class="results button">Results</button><button class="sound button">Sound</button></div><div class="moves-and-time"><div class="moves"></div ><div class="time"></div></div><div class="game-field"></div><div class="frame-size"></div><div class="sizes"><a class="sizes__button" href="#">3x3</a><a class="sizes__button" href="#">4x4</a><a class="sizes__button" href="#">5x5</a><a class="sizes__button" href="#">6x6</a><a class="sizes__button" href="#">7x7</a><a class="sizes__button" href="#">8x8</a></div></div></div>'
}

export default drawGame
