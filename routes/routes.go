package routes

import (
	"gofun/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(router *gin.Engine) {

	router.GET("/", controllers.IndexPage)
	router.GET("/health", controllers.HealthPage)

	api := router.Group("/api")
	{
		api.GET("/index", controllers.IndexAPI)
	}
}
