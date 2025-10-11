package controllers

import (
	"gofun/utils"

	"github.com/gin-gonic/gin"
)

// func IndexPage(c *gin.Context) {
// 	c.HTML(http.StatusOK, "index.html", gin.H{
// 		"title":   "The Pulse",
// 		"message": "Welcome to Jens' House",
// 	})
// }

func IndexPage(c *gin.Context) {
	utils.RenderTemplate(c, "index.html", gin.H{
		"title":   "The Pulse",
		"message": "Welcome to Jens' House",
	})
}
