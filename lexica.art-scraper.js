const axios = require("axios");
const cheerio = require("cheerio");

// const url = "https://lexica.art/prompt/e55f5843-fb69-468b-b2d2-b0d14e51a663";
const url = "https://lexica.art/?prompt=82630386-1eca-46eb-b570-8d807df47ffe";

async function scrapeLexica() {
    try {
        const { data } = await axios.get(url);
        const $ = cheerio.load(data);

        const prompt = $(
            "div > div > div.w-full.flex-shrink-0.overflow-hidden.text-base.px-5.flex.flex-col.h-auto > div.mt-6.px-4.py-3.bg-zinc-700.rounded-xl.shadow.bg-opacity-50.font-light.flex.flex-col.space-y-5 > p"
        )
            .text()
            .replace(/[\n\r]+/g, "")
            .trim();

        const img1 = $("div > div > div.flex.flex-wrap.overflow-hidden.flex-1.items-start.justify-start.thin-scrollbar.h-auto.pb-2 > img:nth-child(1)").attr("src");
        const img2 = $("div > div > div.flex.flex-wrap.overflow-hidden.flex-1.items-start.justify-start.thin-scrollbar.h-auto.pb-2 > img:nth-child(2)").attr("src");
        const img3 = $("div > div > div.flex.flex-wrap.overflow-hidden.flex-1.items-start.justify-start.thin-scrollbar.h-auto.pb-2 > img:nth-child(3)").attr("src");
        const img4 = $("div > div > div.flex.flex-wrap.overflow-hidden.flex-1.items-start.justify-start.thin-scrollbar.h-auto.pb-2 > img:nth-child(4)").attr("src");
        
        // const _ = $("").text().trim();
        // const _ = $("").attr("");
        const lexicaObject = {
            prompt,
            img1,
            img2,
            img3,
            img4,
            url
        };
        console.log(lexicaObject);
    } catch (err) {
        console.error(err);
    }
}
scrapeLexica();

// some comment on this project....
// Finally done....
// at
// Mon Oct 23 2023 04:14:46 GMT+0600 (Bangladesh Standard Time)
// thanks to: [ Allah, siam, freeCodeCamp, internet &&
// everyone else in between... ]
// this scraper is my 2nd successful scraper....
// this app is made by "Md Sakif Hossain"
