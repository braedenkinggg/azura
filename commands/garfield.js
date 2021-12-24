module.exports = {
    name: "garfield",
    description: "Sends a random garfield comic",
    execute(message) {
        let randNum = Math.floor(Math.random() * 4567);

        switch (randNum.toString().length) {
            case 1: 
                randNum = "000" + randNum;
            case 2: 
                randNum = "00" + randNum;
            case 3:
                randNum = "0" + randNum;
        }

        message.channel.send(`https://www.mezzacotta.net/garfield/comics/${randNum}.png`);
    }
}

