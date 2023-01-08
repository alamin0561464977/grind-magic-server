const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.port || 5000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('Grind Magic App is Running')
});

try {

    const { MongoClient, ServerApiVersion } = require('mongodb');
    const uri = "mongodb+srv://<username>:<password>@cluster0.blopt.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

}
catch (err) {
    // if any error, Code throws the error
}
finally {
    // Always run this code regardless of error or not
    //this block is optional
}


app.listen(port, () => console.log('Grind Magic App is Running on Port:', port))


// const collection = client.db("test").collection("devices");