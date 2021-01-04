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

	route.HandleFunc("/isUsernameAvailable/{username}", handlers.IsUsernameAvailable)

	route.HandleFunc("/login", handler.Login).Methods("POST")

	route.HandleFunc("/register", handlers.Register).Methods("POST")

	route.HandleFunc("/userSessionCheck/{userID}", handlers.UserSessionCheck)

	route.HandleFunc("/getConversation/{toUserID}/{fromUserID}", handlers.GetMessageHandler)

	route.HandleFunc("/us/{userID}", func(responseWriter http.ResponseWriter, request *http.Request) {
		var upgrader = websocket.Upgrader{
			ReadBufferSize:  1024,
			WriteBufferSize: 1024,
		}

		userID := mux.Vars(request)["userID"]

		upgrader.CheckOrigin = func(r *http.Request) bool { return true }

		connection, err := upgrader.Upgrade(responseWriter, request, nil)
		if err != nil {
			log.Println(err)
			return
		}

		handlers.CreateNewSocketUser(hub, connection, userID)
	})

	log.Println("Routes are loaded")
}
