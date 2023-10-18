package db

import (
	"log"

	"github.com/chavozoom/gRPC-fullcycle/domain/model"

	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
	_ "gorm.io/driver/sqlite"
)

func ConnectDB() *gorm.DB {
	var db *gorm.DB
	var err error

	db, err = gorm.Open("sqlite3", ":memory:")

	if err != nil {
		log.Fatalf("Error connecting to database: %v", err)
		panic(err)
	}

	db.LogMode(true)

	db.AutoMigrate(&model.Product{})

	return db
}
