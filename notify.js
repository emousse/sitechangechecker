//const libnotify = require('node-notifier')
const PushBullet = require('pushbullet');
const pusher = new PushBullet(`${process.env.PUSHBULLET_API}`);

function notify(diffPixels) {
  if (diffPixels > 0) {
    /*     libnotify.notify({
          title: 'Site Checker',
          message: `${process.env.SITEURL} has changed! GAAAAAAAAH!`,
          open: `${process.env.SITEURL}`,
          sound: true
        }) */
    pusher.link(`${process.env.PUSHBULLET_EMAIL}`, 'Site Checker', `${process.env.SITEURL}`, `${process.env.SITEURL} has changed! GAAAAAAAAH!`, function (error, response) { console.log(response); });

  }
  else {
    console.log('nothing change !');
    

  }
}

module.exports = notify
