function timer(time, sec, min) {
  if (sec < 10 && min < 10) {
    time.innerText = `Timer: 0${min}:0${sec}`
  } else if (sec < 10) {
    time.innerText = `Timer: ${min}:0${sec}`
  } else if (min < 10) {
    time.innerText = `Timer: 0${min}:${sec}`
  } else {
    time.innerText = `Timer: ${min}:${sec}`
  }
}

export default timer
