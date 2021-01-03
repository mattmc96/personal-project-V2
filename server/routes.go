package main


import (
    "log"
    "net/http"

    "github.com/gorilla/mux"
    "github.com/gorilla/websocket"

    handlers "connect-server/src/handlers"
)

// func setStaticFolder(route *mux.Router) {
//     fs := http.FileServer(http.Dir("./public/"))
//     route.PathPrefix("/public/").Handler(http.StripPrefix("/public/", fs))
// }

func AppRoutes(route *mux.Router) {

    log.Println("Loading Routes...")

    hub := handlers.NewHub()
    go hub.Run()

    // setStaticFolder(route)

    route.HandleFunc("/", RenderHome)

    route.HandleFunc("/users/{name}", GetUsers).Methods("GET")

    // route.HandleFunc("/isUsernameAvailable/{username}", handlers.IsUsernameAvailable)

    log.Println("Routes are loaded")
}
