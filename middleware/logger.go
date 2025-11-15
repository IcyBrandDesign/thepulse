package middleware

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func IpLogger() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		clientIP := ctx.ClientIP()
		path := ctx.Request.URL.Path
		fmt.Printf("Besøk av IP: %s, på: %s\n", clientIP, path)
		ctx.Next()
	}
}
