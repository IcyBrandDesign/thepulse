package main

import (
	"fmt"
	"gofun/calculator"
	"gofun/routes"

	"github.com/gin-gonic/gin"
)

const mass = 50
const hight = 160

func main() {
	router := gin.Default()

	router.Static("/static", "./frontend/static")
	// router.LoadHTMLGlob("frontend/templates/*")

	routes.RegisterRoutes(router)

	router.Run(":8080")

	bmi := calculator.BMICalc(hight, mass)
	fmt.Println("BMI =", bmi)
}
