package db

import (
	"database/sql"
	"log"

	_ "github.com/lib/pq"
)

var DB *sql.DB

// Connects to database
func Connect() {
	connStr := "host=localhost port=5432 user=postgres password=Brussin83#6sdhc dbname=thepulsedb sslmode=disable"
	var err error
	DB, err = sql.Open("postgres", connStr)
	if err != nil {
		log.Fatal("Error opening database", err)
	}

	err = DB.Ping()
	if err != nil {
		log.Fatal("Error connecting to database", err)
	}
	log.Println("Connected to database")
}

// InsertIp setter IP inn i database
func InsertIp(ip, userAgent, apiPath string) error {
	_, err := DB.Exec(
		"INSERT into visitor_ips (ip_address, user_agent, api_path) VALUES ($1, $2, $3)",
		ip, userAgent, apiPath,
	)
	return err
}
