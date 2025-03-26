const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended:false}));

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
