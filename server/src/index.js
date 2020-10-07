const express = require('express')

const app = express()
const port = process.env.PORT || 3200

app.get('/', (req, res) => res.send("For the advent calendar app, please navigate to &#39;/adventcalendar/&#39;" 
    + " followed by the URL key provided by the administrator."))

app.use(express.json())

app.listen(port, ()=>(console.log(`Poke Express Running on Port ${port}!`)));
