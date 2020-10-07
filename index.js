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

        return Data;
    },
    Reverse: function (str) {
        var spstr = str.split(" ")
        var reversearr = spstr.reverse()
        var ret = reversearr.join(" ")
        return ret;
    }
}