package routes

import (
	"ecommerce-api/controllers"

	"github.com/gorilla/mux"
)

func RegisterRoutes() *mux.Router {
	r := mux.NewRouter()

	// Products
	r.HandleFunc("/products", controllers.GetProducts).Methods("GET")
	r.HandleFunc("/products", controllers.CreateProduct).Methods("POST")
	r.HandleFunc("/products/{id}", controllers.GetProduct).Methods("GET")
	r.HandleFunc("/products/{id}", controllers.UpdateProduct).Methods("PUT")
	r.HandleFunc("/products/{id}", controllers.DeleteProduct).Methods("DELETE")
	// Cart
	r.HandleFunc("/cart", controllers.GetCart).Methods("GET")
	r.HandleFunc("/cart", controllers.AddToCart).Methods("POST")
	r.HandleFunc("/cart/{id}", controllers.UpdateCart).Methods("PUT")
	r.HandleFunc("/cart/{id}", controllers.RemoveFromCart).Methods("DELETE")

	// Orders
	r.HandleFunc("/orders", controllers.GetOrders).Methods("GET")
	r.HandleFunc("/orders/{id}", controllers.GetOrder).Methods("GET")
	r.HandleFunc("/orders", controllers.CreateOrder).Methods("POST")
	r.HandleFunc("/orders/{id}/status", controllers.UpdateOrderStatus).Methods("PUT")

	return r
}
