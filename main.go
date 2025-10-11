package main

import (
	"gofun/routes"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()
	routes.RegisterRoutes(router)

	router.Static("/static", "./frontend/static")
	router.LoadHTMLGlob("frontend/templates/*")

	router.Run(":8080")
}
