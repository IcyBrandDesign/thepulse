package controllers

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func IndexPage(c *gin.Context) {
	c.HTML(http.StatusOK, "index.html", gin.H{
		"title":   "The Pulse",
		"message": "Welcome to Jens' House",
	})
}
