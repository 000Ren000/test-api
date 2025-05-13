const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({status: 'ok'});
})

try {
    app.listen(3000);
    logger.info('App listening on port 3000');
} catch (e) {
    console.log(e.message)
}
