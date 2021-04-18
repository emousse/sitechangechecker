const libnotify = require('node-notifier')

function notify(diffPixels) {
  if (diffPixels > 0) {
    libnotify.notify({
      title: 'Site Checker',
      message: `${process.env.SITEURL} has changed! GAAAAAAAAH!`,
      open: `${process.env.SITEURL}`,
      sound: true
    })
  }
  else {
    console.log('nothing change !');
  }
}

module.exports = notify
