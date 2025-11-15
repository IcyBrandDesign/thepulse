package routes

import (
	"gofun/controllers"
	"gofun/middleware"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(router *gin.Engine) {

	router.Use(middleware.SecurityHeaders())
	router.Use(middleware.IpLogger())

	router.GET("/", controllers.IndexPage)
	router.GET("/health", controllers.HealthPage)

	api := router.Group("/api")
	{
		api.GET("/index", controllers.IndexAPI)
	}
}
