package utils

import (
	"html/template"
	"net/http"
	"path/filepath"

	"github.com/gin-gonic/gin"
)

func RenderTemplate(c *gin.Context, view string, data gin.H) {
	files := []string{
		filepath.Join("frontend", "templates", "base.html"),
		filepath.Join("frontend", "templates", view),
	}

	tmpl := template.Must(template.ParseFiles(files...))
	c.Status(http.StatusOK)
	tmpl.ExecuteTemplate(c.Writer, "base", data)
}
