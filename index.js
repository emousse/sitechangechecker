require('dotenv').config()
const fetchPage = require('./fetch.js')
const fs = require('fs')
const notify = require('./notify.js')
const comparePage = require('./compare')

const checkingFrequency = 5 * 1000; //first number represent the checkingFrequency in seconds

async function siteCheckPNG(url) {
  if (fs.existsSync('img/baseline.png')) {
    await fetchPage.pagePNG(url, 'compare')
    const result = await comparePage.pngDiff()
    notify(result)
  } else {
    let done = await fetchPage.pagePNG(url, 'baseline')
  }
}

async function siteCheckTXT(url, selector) {
  if (fs.existsSync('txt/baseline.txt')) {
    await fetchPage.pageTXT(url, 'compare', selector)
    const result = comparePage.txtDiff()
    notify(result)
  } else {
    let done = await fetchPage.pageTXT(url, 'baseline', selector)
  }
}

if (process.env.TYPE === 'PNG') {
  setInterval(()=>{
    siteCheckPNG(process.env.SITEURL)
  },checkingFrequency)
} else if (process.env.TYPE ==='TXT') {
  siteCheckTXT(process.env.SITEURL, process.env.SELECTOR)
}

