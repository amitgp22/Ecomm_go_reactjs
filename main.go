package main

import (
	"ecommerce-api/config"
	"ecommerce-api/models"
	"ecommerce-api/routes"
	"log"
	"net/http"
	"path/filepath"

	"github.com/gorilla/handlers"
)

func main() {
	config.Connect()

	// Migrate models
	config.DB.AutoMigrate(&models.Product{}, &models.Cart{}, &models.Order{})

	// Register routes
	r := routes.RegisterRoutes()

	// ==== Serve React build ====
	buildPath := "./frontend/build"
	staticHandler := http.FileServer(http.Dir(buildPath))
	r.PathPrefix("/static/").Handler(staticHandler) // Serve static files

	// Catch-all route: serve index.html for React Router
	r.PathPrefix("/").HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, filepath.Join(buildPath, "index.html"))
	})

	log.Println("🚀 Server running on http://localhost:8081")

	// Enable CORS for React frontend on port 3000
	http.ListenAndServe(":8081", handlers.CORS(
		handlers.AllowedOrigins([]string{"http://localhost:3000"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "DELETE", "OPTIONS"}),
		handlers.AllowedHeaders([]string{"Content-Type"}),
	)(r)) // 👈 Fixed here: use 'r' instead of 'router'
}
