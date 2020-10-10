const fetch = require("node-fetch")

module.exports = {
    PostHastebin: async function (String) {
        if (!String) return Error(`Please Give Something As Data!`);
        if (String.length > 1500) return Error("String Length Limit - 1500");

        let res = await fetch("https://hasteb.in/documents", {
            method: "POST",
            body: String,
            headers: {
                "Content-Type": "text/plain"
            }
        });

        let json = await res.json();

        if (!json.key) return Error(`Something Went Wrong, Try Again Later!`);

        let Link = `https://hasteb.in/${json.key}.js`;

        let Data = {
            embed: {
                color: "RANDOM",
                description: `Hastebin Link : [Click Me](${Link})`,
                timestamp: new Date()
            }
        };
        return Data.embed;
    },
    Reverse: function (str) {
        if (!str) throw Error(`Missing arguments`)
        str.join(' ').split('').reverse().join('')
        return str;
    },
    MC: function (String) {
        if (!String) return Error("Please Give Something As Data!");
        if (String.length > 15) return Error("String Length Limit - 15");

        let Link = `https://api.alexflipnote.dev/achievement?text=${String}`;

        let Data = {
            embed: {
                color: "RANDOM",
                image: {
                    url: Link
                },
                timestamp: new Date()
            }
        };
        return Data.embed;
    },
    capitalise: function (str) {
        if (!str) throw TypeError(`Missing 1 argument`)
        str.charAt(0).toUpperCase() + str.slice(1);
        return str;
    },
    date: function () {
        var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
        var date = new Date(),
            year = date.getFullYear(),
            month = months[date.getMonth()],
            day = days[date.getDay()],
            time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
        return {
            date,
            year,
            month,
            day,
            time
        }
    }
}