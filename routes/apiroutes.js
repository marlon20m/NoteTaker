

var db = require("../db/db.json")
var fs = require("fs")
function apiroutes(app) {
    app.get("/api/notes", function (req, res) {
        res.json(db)
    })

    app.post("/api/notes", function (req, res) {
        console.log(req.body)
        db.push(req.body)

        fs.writeFile("./db/db.json", JSON.stringify(db), function () {
            res.json(db)

        })

    })

    app.delete("/api/notes/:id", function (req, res) {
        console.log("delete", req.body)
        db.pop(req.body)
        res.json(db);
    })

}

module.exports = apiroutes