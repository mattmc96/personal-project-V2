package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/mux"
	"github.com/joho/godotenv"

	config "personal-project_v2/src/config"
	utils "personal-project_v2/src/utils"
)

func main() {

	godotenv.Load()

	fmt.Println(
		fmt.Sprintf("%s%s%s%s", "server will start at http://", os.Getenv("HOST"), ":", os.Getenv("PORT")),
	)
	config.ConnectDatabase()

	route := mux.NewRouter()

	AddApproutes(route)

	serverPath := ":" + os.Getenv("PORT")

	cors := utils.GetCorsConfig()

	log.Fatal(http.ListenAndServe(serverPath, cors.Handler(route)))
}
