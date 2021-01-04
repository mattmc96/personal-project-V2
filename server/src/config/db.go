package config

import (
    "context"
    "go.mongodb.org/mongo-driver/mongo"
    "go.mongodb.org/mongo-driver/mongo/options"
    "log"
)

// MongoDBClient is exported Mongo Database client
var MongoDBClient *mongo.Client

func ConnectDatabase() {
    log.Println("Database connecting...")

    // Set client options
    clientOptions := options.Client().ApplyURI("mongodb+srv://mattmc1:7BeePO5iSIbi5PGl@cluster0.cvsqx.mongodb.net/db?retryWrites=true&w=majority")

    // Connect to MongoDB
    client, err := mongo.Connect(context.TODO(), clientOptions)
    MongoDBClient = client
    if err != nil {
        log.Fatal(err)
    }

    // Check the connection
    err = MongoDBClient.Ping(context.TODO(), nil)

    if err != nil {
        log.Fatal(err)
    }

    log.Println("Database Connected.")
}
