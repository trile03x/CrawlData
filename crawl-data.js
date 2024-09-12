const browser = require("./browser")
const crawlCategogy = (browser, url) => new Promise(async (resolve, rejects) => {
    try {
        let page = await browser.newPage()
        console.log("Browser start...")
        await page.goto(url)
        console.log("Accessing " + url)
        await page.waitForSelector("#webpage")
        console.log("Website has finish loading")
        const datacategogy = await page.$$eval("#navbar-menu > ul > li", els => {
            datacategogy = els.map(el => {
                return {
                    categogy: el.querySelector("a").innerText,
                    link: el.querySelector("a").href
                }
            })
            return datacategogy
        })
        console.log(datacategogy);
        await page.close()
        resolve()
    } catch (error) {
        console.log("Crawl data categogy " + error)
        rejects(error)
    }
})
module.exports = {
    crawlCategogy
}
