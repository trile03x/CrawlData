const crawls = require("./crawl-data")
const controllerCrawlData = async (browserInstance) => {
    const url = 'https://phongtro123.com/'
    try {
        let browser = await browserInstance
        let categogy = crawls.crawlCategogy(browser, url)
    } catch (error) {
        console.log("Don't start browser " + error)
    }
}
module.exports = controllerCrawlData
