var express = require("express")
var app = express()
var port = process.env.PORT || 3300


app.use(express.urlencoded({ extended: true }))
app.use(express.json())


app.use(express.static("public"))

var apiroutes = require("./routes/apiroutes")

apiroutes(app)

var htmlroutes = require("./routes/htmlroutes")

htmlroutes(app)

app.listen(port, function () {
    console.log("app is listening on PORT" + port)
});