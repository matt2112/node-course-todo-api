/* jshint node: true, esversion: 6 */

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('58949227643fa03c423f7469')
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('589367454b61602584483e35')
    }, {
        $set: {
            name: 'Steve'
        },
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });
    // db.close();
});
