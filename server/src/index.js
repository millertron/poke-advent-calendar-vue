const express = require('express')
const db = require('./helpers/database')
const pocketRoutes = require('./routes/pockets')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3200

app.get('/', (req, res) => res.send("For the advent calendar app, please navigate to &#39;/adventcalendar/&#39;" 
    + " followed by the URL key provided by the administrator."))

app.use(cors())
app.use(express.json())
app.use('/pockets', pocketRoutes)

db.connect((err, client) => {
    if (process.env.NODE_ENV === `production`) {
        app.use(express.static(path.resolve(__dirname, 'dist')))
        app.get('/*', (req, res) => {
            res.sendFile(path.resolve(__dirname, 'dist/index.html'))
        })
    }

    app.listen(port, ()=>(console.log(`Poke Express Running on Port ${port}!`)));
})
