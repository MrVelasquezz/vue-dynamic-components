const express = require('express')

const app = express()
app.use(express.static('./dist'))

/*app.get('/', (req, res) => {
    console.log(1)
    console.log(req)
    res.sendFile(__dirname+'/dist/index.html')
})*/

app.listen(3000, () => console.log('Started'))