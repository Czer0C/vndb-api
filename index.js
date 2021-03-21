const express = require('express');
const VNDB = require('vndb-api');

const app = express();
const port = 3000;

const userID = `131608`;
const limit = 100; // ! Maximum number of item per request (though I doubt I'd ever gonna read this many VN)


app.get('/', async (req, res) => {
    const vndb = new VNDB('clientname', {
        minConnection: 1,
        maxConnection: 10,
    });
       
    const query = `get ulist basic,labels (uid=${userID}) {"results": ${limit}}`;

    try {
        const getVNList = await vndb.query(query);

        const items = getVNList.items;

        res.send(items);
    } catch (error) {
        console.error(error);
    }

    vndb.destroy();    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})