const crypto = require('crypto')
const express = require('express')
const app = express()

const port = 6125
let n = 1

app.get('/encrypt', (req, res) => {
    crypto.pbkdf2(req.query.password, '..............', 200, 64, 'sha1', (err, derivedKey) => {
      if (err) throw err
      res.json({'password':derivedKey.toString('hex')});
    })
    console.log(`Request #${n++}`)
})

app.listen(port, (err) => {
    console.log('Started on port '+port)
})