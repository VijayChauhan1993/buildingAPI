const { MongoClient } = require('mongodb');

const _uri = 'mongodb+srv://Vijay:Ensuredit@cluster0.pixh0.mongodb.net/sample_mflix?retryWrites=true&w=majority';

const dbConnect = function (collection,callbackFunction) {
    MongoClient.connect(_uri)
        .then(async function (client) {
            const db = client.db('sample_mflix').collection(collection);
            await callbackFunction(db);
            client.close();
        })
        .catch();

}

module.exports = dbConnect;