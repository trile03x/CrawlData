const startBrowser = require("./browser")
const crawlController = require("./controller")
let browser = startBrowser()
crawlController(browser)
