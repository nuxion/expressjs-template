import bodyParser from 'body-parser';
import express from 'express'
import morgan from 'morgan';
const app = express()
const router = express.Router()
const port = process.env.WEB_PORT || 3000;
const addr = process.env.WEB_ADDR || "localhost";

app.use(express.json());
app.use(bodyParser.json())
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  res.json({msg: 'Hello from A!'})
})
app.use((req, res, next) => {
    res.status(404).json({msg: "Sorry can't find that!"})
  })
  
  // custom error handler
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({msg: 'Something broke!'})
})
app.listen(port, addr, () => { 
    console.log(`Server is listening on port ${addr}:${port}`); 
});