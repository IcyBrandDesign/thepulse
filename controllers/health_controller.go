package controllers

import (
	"gofun/utils"

	"github.com/gin-gonic/gin"
)

// func HealthPage(c *gin.Context) {
// 	c.HTML(http.StatusOK, "health.html", gin.H{
// 		"title": "Health",
// 		"bmi":   "BMI Calculator",
// 	})
// }

func HealthPage(c *gin.Context) {
	utils.RenderTemplate(c, "health.html", gin.H{
		"title": "Health",
		"bmi":   "BMI Calculator",
	})
}
