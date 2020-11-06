const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan("dev"))

app.use("/dogs", require("./dogRouter"))


app.listen(9000, () => {
    console.log("Server is all good!")
})