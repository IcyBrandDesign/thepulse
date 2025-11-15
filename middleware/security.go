package middleware

import "github.com/gin-gonic/gin"

func SecurityHeaders() gin.HandlerFunc {
	return func(ctx *gin.Context) {
		ctx.Header("Content-Security-Policy", "default-src 'self'; frame-src https://www.yr.no https://www.youtube.com https://www.youtube-nocookie.com https://thepulse.onrender.com/;")
		ctx.Header("X-Content-Type-Options", "nosniff")
		ctx.Header("X-Frame-Options", "SAMEORIGIN")
		ctx.Header("Referrer-Policy", "no-referrer")
		ctx.Header("X-XSS-Protection", "1; mode=block")
		ctx.Next()
	}
}
