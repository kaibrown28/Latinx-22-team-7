//whitelists all urls that can make a request to the server
const whitelist = ["*"]

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist[0] === "*") {
            callback(null, true)
        }else {
            if (whitelist.indexOf(origin) !== -1) {
                callback(null, true)
            } else {
                callback(new Error("not allowed by CORS"))
            }
        }
    },
}

module.exports = corsOptions