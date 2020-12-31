package utils

import (
	"github.com/rs/cors"
)

// GetCorsConfig will return the CORS values
func GetCorsConfig() *cors.Cors {
	return cors.New(cors.Options{
		AllowedOrigins: []string{"*"},
		AllowedMethods: []string{"GET", "POST", "OPTIONS", "DELETE", "PUT"},
	})
}
