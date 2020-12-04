const express = require('express')
const cors = require('cors')
const path = require('path')
const db = require('./helpers/database')
const pocketRoutes = require('./routes/pockets')
const userRoutes = require('./routes/users')

const app = express()
const port = process.env.PORT || 3200

app.get('/', (req, res) => res.send("For the advent calendar app, please navigate to &#39;/adventcalendar/&#39;" 
    + " followed by the URL key provided by the administrator."))

if (process.env.NODE_ENV !== 'production') {
    app.use(cors())
}

app.use(express.json())
app.use('/pockets', pocketRoutes)
app.use('/users', userRoutes)

db.connect((err, client) => {
    if (process.env.NODE_ENV === `production`) {
        console.log('Application start up in production mode...')
        app.use(express.static(path.resolve(__dirname, '../dist')))
        app.get('/*', (req, res) => {
            res.sendFile(path.resolve(__dirname, '../dist/index.html'))
        })
    }

    app.listen(port, ()=>(console.log(`Poke Express Running on Port ${port}!`)));
})
