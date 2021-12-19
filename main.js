const mongoose = require('mongoose')
const app = require('./server')
const PORT = 1337

main().catch(err => console.log(err));

async function main(){
    mongoose.connect('mongodb://localhost:27017/minuteApp')
    .then(() => console.log("Successfully connect to MongoDB."))
    .catch(err => console.error("Connection error", err));

    app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`));
}