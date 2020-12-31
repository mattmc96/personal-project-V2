package main


import (
    "log"
    "net/http"

    "github.com/gorilla/mux"
)

func setStaticFolder(route *mux.Router) {
    fs := http.FileServer(http.Dir('./public/"))
}

route.HandleFunc("/isUsernameAvailable/{username}", handlers.IsUsernameAvailable)
