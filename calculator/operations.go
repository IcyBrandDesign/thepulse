package calculator

func Add(x int, y int) float32 {
	return float32(x + y)
}

func IntDivider(nevner int, teller int) int {
	var divideQuotient int = 0
	for nevner >= teller {
		divideQuotient += 1
		nevner += -teller
	}
	return divideQuotient
}

func Abc(a float32, b float32, c float32) float32 {
	
}