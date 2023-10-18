package main

import (
	"github.com/chavozoom/gRPC-fullcycle/application/grpc"
	db "github.com/chavozoom/gRPC-fullcycle/infrastructure/database"
)

func main() {
	database := db.ConnectDB()
	port := 50051
	grpc.StartGrpcServer(database, port)
}
