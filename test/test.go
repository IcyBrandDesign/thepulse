package main

import "fmt"

func main() {
	var name int = 23
	variabel := 55
	pointer := &variabel
	fmt.Println(pointer)
	fmt.Println(*pointer)
	fmt.Println(*&variabel)
	fmt.Println(name)
}
