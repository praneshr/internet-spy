const speedtest = require('speedtest-net')
const notify = require('node-notifier')
const config = require('./config.json')


const init = () => {
  const Test = speedtest({
    maxTime: 5000,
  })

  Test.on('data', (data) => {
    if (data.speeds.download < config.downloadSpeed) {
      notify.notify({
        title: 'Warning',
        message: 'Download speed is low',
        sound: true,
      })
    }
  })
}

setInterval(init, 10000)
init()
