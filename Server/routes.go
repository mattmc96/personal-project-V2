package main


import (
    "log"
    "net/http"

    "github.com/gorilla/mux"
)

func setStaticFolder(route *mux.Router) {
    fs := http.FileServer(http.Dir("./public/"))
    route.PathPrefix("/public/").Handler(http.StripPrefix("/public/", fs))
}

// AddApproutes will add the routes for the application
func AddApproutes(route *mux.Router) {
    log.Println("Loading Routes...")

    setStaticFolder(route)

    route.HandleFunc("/", RenderHome)

    route.HandleFunc("/isUsernameAvailable/{username}", handlers.IsUsernameAvailable)

    route.HandleFunc("/users/{name}", GetUsers).Methods("Get")

    log.Println("routes are loaded")
}
