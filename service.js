const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000


app.use(bodyParser.text({inflate: true, limit: '100kb', type: '*/*'}));


app.post('/', (req, res) => {

        var roversimulation = require('./lib/roversimulation.js');
        roversimulation._output = [];
        roversimulation.processInstructions(req.body);
        res.send(roversimulation._output);

});


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

