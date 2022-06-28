import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import userRoutes from "./routes/users.js"

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(cors())

app.use("/", userRoutes)

app.get("/", (req, resp) => resp.send("Hello"))
app.all("*", (req, resp) => resp.send("Nie ma takiego zapytania"))

app.listen(port, () =>
	console.log(`Server is listening on port : http://localhost:${port}`)
)
