import styleString from "./css.js"

const player = {
  id: undefined,
  n: 1,
  time: 100,
  ui: {
    html: document.querySelector('#html'),
    css: document.querySelector('#css')
  },
  events: {
    ".button.pause": "pause",
    ".button.play": "play",
    ".button.slow": "slow",
    ".button.normal": "normal",
    ".button.fast": "fast",
  },
  init: () => {
    player.ui.html.innerText = styleString.substring(0, player.n)
    player.ui.css.innerHTML = styleString.substring(0, player.n)
    player.bindEvents()
    player.play()
  },
  bindEvents: () => {
    for (let key in player.events) {
      // 是否不在链上
      if(player.events.hasOwnProperty(key)){
        const value = player.events[key]
        document.querySelector(key).onclick = player[value]
      }
    }
  },
  start: () => {
    player.ui.html.innerText = styleString.substring(0, player.n)
    player.ui.css.innerHTML = styleString.substring(0, player.n)
    player.ui.html.scrollTop = player.ui.html.scrollHeight
    // 如果元素滚动到底，下面等式返回true，没有则返回false.
    // element.scrollHeight - element.scrollTop === element.clientHeight
    player.n += 1
    if (player.n >= styleString.length + 1) {
      window.clearInterval(player.id)
    }
  },
  play: () => {
    player.pause()
    player.id = setInterval(player.start, player.time)
  },
  pause: () => {
    // console.log("pause")
    window.clearInterval(player.id)
  },
  normal: () => {
    // console.log("normal")
    player.pause()
    player.time = 100
    player.play()
  },
  slow: () => {
    // console.log("slow")
    player.pause()
    player.time = 300
    player.play()
  },
  fast: () => {
    // console.log("fast")
    player.pause()
    player.time = 0
    player.play()
  }
}

player.init()

