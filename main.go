package main

import (
	"thepulse/backend/db"
	"thepulse/backend/routes"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	godotenv.Load()

	dbURL := os.Getenv("DATABASE_URL")

	if dbURL == "" {
		panic("DATABASE_URL not in environment locally or on render.com")
	}

	db.Connect(dbURL)

	router := gin.Default()

	router.Static("/static", "./frontend/static")
	// router.LoadHTMLGlob("frontend/templates/*")

	routes.RegisterRoutes(router)

	router.Run(":8080")
}
