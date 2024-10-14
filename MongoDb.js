// const mongodb=require('mongodb')

// // const connectionUrl = "mongodb+srv://notegobmsce:SpMVp1TnwezwT0HM@cluster1.q0uhg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
// // const connectionUrl = "mongodb://localhost:27017/NoteGo"
// const connectionUrl = "mongodb+srv://notegobmsce:CUG6jysyvSXcVqZO@cluster1.q0uhg.mongodb.net/NoteGo?retryWrites=true&w=majority&appName=Cluster1";
// // const connectionUrl = "mongodb+srv://notegobmsce:SpMVp1TnwezwT0HM@cluster1.q0uhg.mongodb.net/NoteGo?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true";

// // const connectionUrl = "mongodb+srv://notegobmsce:SpMVp1TnwezwT0HM@cluster1.q0uhg.mongodb.net/NoteGo?retryWrites=true&w=majority&appName=Cluster1";


// const client=new mongodb.MongoClient(connectionUrl)

// var db;

// try{
    
//     client.connect();
//     console.log("Connected to Mongodb")
//     db=client.db()
// }

// catch(err)
// {
//     console.log(err)
// }

// module.exports=db
const mongodb = require('mongodb');

// Connection URL for MongoDB
const connectionUrl = "mongodb+srv://notegobmsce:CUG6jysyvSXcVqZO@cluster1.q0uhg.mongodb.net/NoteGo?retryWrites=true&w=majority&appName=Cluster1";

// Create a new MongoClient with increased pool size for more users
const client = new mongodb.MongoClient(connectionUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    maxPoolSize: 2000,  // Increase the pool size to handle up to 5000 users or more
    minPoolSize: 50,
    serverSelectionTimeoutMS: 5000,
});

let db;

async function connectToMongoDB() {
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB");
        db = client.db();
    } catch (err) {
        console.log("Error connecting to MongoDB: ", err);
    }
}

// Call the connection function
connectToMongoDB();

module.exports = db;
