const express = require('express');
const {sendGPT} = require("./chatgpt");
const app = express();

app.get('/', async (req, res) => {
    const data = await sendGPT();
    console.log(data)
    res.send({status: 'ok', data: data});

})

try {
    app.listen(3000);
    console.log('App listening on port 3000');
    console.log(await sendGPT())

} catch (e) {
    console.log(e.message)
}
