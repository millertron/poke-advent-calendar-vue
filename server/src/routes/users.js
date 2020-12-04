const express = require("express")
const db = require('../helpers/database')

const router = express.Router({})

router.patch('/', (req, res) => {
    const {lang, urlKey} = req.body
    const database = db.get()
    database.collection('urlKeys').updateOne(
        { key: urlKey, active: true }, 
        { $set: { lang: lang } },
        (err, res) => {
            if (err) throw err
            console.log(`${res.result.nModified} records updated`)
        })

})

module.exports = router
