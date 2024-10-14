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

// MongoDB connection URL
const connectionUrl = "mongodb+srv://notegobmsce:CUG6jysyvSXcVqZO@cluster1.q0uhg.mongodb.net/NoteGo?retryWrites=true&w=majority&appName=Cluster1";

// Connection options with connection pool settings
const options = {
  maxPoolSize: 10,           // Maximum number of connections in the pool (default is 100)
  minPoolSize: 5,            // Minimum number of connections in the pool
  serverSelectionTimeoutMS: 5000, // Timeout for selecting a server
};

// Create a new MongoClient with options
const client = new mongodb.MongoClient(connectionUrl, options);

let db;

// Function to connect to MongoDB
async function connectToMongoDB() {
  try {
    // Connect to the database
    await client.connect();  // Await the connection
    console.log("Connected to MongoDB");

    // Assign the database instance to the 'db' variable
    db = client.db('NoteGo');  // You can specify the DB name if needed, like client.db('NoteGo')
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
}

// Call the connection function immediately
connectToMongoDB();

// Export the database object for use in other parts of the app
module.exports = db;
