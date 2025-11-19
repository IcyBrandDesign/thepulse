package middleware

import (
	"fmt"
	"gofun/db"
	"log"

	"github.com/gin-gonic/gin"
)

func IpLogger() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		// TODO: Få denne til å sende til db
		clientIP := ctx.ClientIP()
		apiPath := ctx.Request.URL.Path
		userAgent := ctx.Request.UserAgent()

		err := db.InsertIp(clientIP, userAgent, apiPath)

		if err != nil {
			ctx.Error(err)
		}
		if err == nil {
			log.Printf("IP %s successfully inserted", clientIP)
		}
		fmt.Printf("Besøk av IP: %s, på: %s\n", clientIP, apiPath)
		ctx.Next()
	}
}
