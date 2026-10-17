package main

import (
	"gofun/db"
	"gofun/routes"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	// local endres etter om det er lokal testing eller live
	local := false
	if local {
		const localDB string = "postgresql://neondb_owner:npg_pqXOCUli7D2Z@ep-nameless-bread-aga4otwo-pooler.c-2.eu-central-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require"
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
