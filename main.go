package main

import (
	"gofun/db"
	"gofun/routes"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	local := false
	if local {
		const localDB string = "host=localhost port=5432 user=postgres password=Brussin83#6sdhc dbname=thepulsedb sslmode=disable"
		db.Connect(localDB)
	} else {
		// const neonDB string = ""
		dbURL := os.Getenv("DATABASE_URL")

		db.Connect(dbURL)
	}

	router := gin.Default()

	router.Static("/static", "./frontend/static")
	// router.LoadHTMLGlob("frontend/templates/*")

	routes.RegisterRoutes(router)

	router.Run(":8080")
}
