package main

import (
	"fmt"
	"net/http"
)

func indexs(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "asdasd")
}

func main() {
	http.HandleFunc("/", indexs)
	http.ListenAndServe(":8000", nil)
}
