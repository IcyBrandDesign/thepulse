package routes

import (
	"gofun/controllers"

	"github.com/gin-gonic/gin"
)

func RegisterRoutes(router *gin.Engine) {

	router.Use(func(c *gin.Context) {
		c.Header("Content-Security-Policy", "default-src 'self'; frame-src https://www.yr.no;")
		c.Header("X-Content-Type-Options", "nosniff")
		c.Header("X-Frame-Options", "SAMEORIGIN")
		c.Header("Referrer-Policy", "no-referrer")
		c.Header("X-XSS-Protection", "1; mode=block")
		c.Next()
	})

	router.GET("/", controllers.IndexPage)
	router.GET("/health", controllers.HealthPage)

	api := router.Group("/api")
	{
		api.GET("/index", controllers.IndexAPI)
	}
}
