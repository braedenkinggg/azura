const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
    name: "garfield",
    description: "Sends a random garfield comic",

    async execute(message) {
        const start = new Date(1978, 6, 19);
        const end = new Date();

        const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        const dateYear = date.getFullYear();
        const dateMonth = date.getMonth() + 1;
        const dateDay = date.getDate();
        const dateFormatted = [dateYear,dateMonth,dateDay].join("/")

        await axios.get(`https://www.gocomics.com/garfield/${dateFormatted}`)
            .then(res => {
                const $ = cheerio.load(res.data);
                const comic = $('.item-comic-image > img').attr('src');
                message.channel.send(comic);
            })
            .catch(err => {
                message.channel.send("Something went wrong, please try again later...")
            });
    }
}

