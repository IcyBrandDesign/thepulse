package codeBreaker

import (
	"fmt"
	"strconv"
)

func CodeBreaker(pin int) {
	var nums = [10]int{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}
	pinString := fmt.Sprintf("%d", pin)
	// fmt.Println(pinString)
	for _, character := range pinString {
		characterString := string(character)
		// fmt.Println(i, characterString)
		for _, num := range nums {
			numString := strconv.Itoa(num)
			if numString == characterString {
				fmt.Println(characterString)
			}

		}
	}
}
