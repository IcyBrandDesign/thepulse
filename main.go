package main

import (
	"gofun/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Static("/static", "./frontend/static")
	// router.LoadHTMLGlob("frontend/templates/*")

	routes.RegisterRoutes(router)

	router.Run(":8080")
}
