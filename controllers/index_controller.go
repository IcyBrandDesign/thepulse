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
	iframeURLdagensVaer := "https://www.yr.no/nb/innhold/1-15183/card.html?mode=dark"
	ukensVaerURL := "https://www.yr.no/nb/innhold/1-72837/table.html?mode=dark"

	utils.RenderTemplate(c, "index.html", gin.H{
		"title":               "The Pulse",
		"message":             "Welcome to Jens' House",
		"iframeURLdagensVaer": iframeURLdagensVaer,
		"ukensVaerURL":        ukensVaerURL,
	})
}
