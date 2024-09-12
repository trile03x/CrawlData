const puppeteer = require("puppeteer")
const startBrowser = async () => {
    let browser
    try {
        browser = await puppeteer.launch({
            headless: false,
            args: ["--disable-setuid-sandbox"],
            'ignoreHTTPSErrors': true
        })
    } catch (error) {
        console.log("Don't create browser " + error)
    }
    return browser
}
module.exports = startBrowser
