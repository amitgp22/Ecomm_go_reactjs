package controllers

import (
	"encoding/json"
	"net/http"
	"strconv"

	"ecommerce-api/config"
	"ecommerce-api/models"

	"github.com/gorilla/mux"
)

// Get all orders for a user
func GetOrders(w http.ResponseWriter, r *http.Request) {
	userIDStr := r.URL.Query().Get("user_id")
	if userIDStr == "" {
		http.Error(w, "user_id is required", http.StatusBadRequest)
		return
	}
	userID, _ := strconv.Atoi(userIDStr)

	var orders []models.Order
	config.DB.Where("user_id = ?", userID).Find(&orders)
	json.NewEncoder(w).Encode(orders)
}

// Get a single order
func GetOrder(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["id"]

	var order models.Order
	if err := config.DB.First(&order, id).Error; err != nil {
		http.Error(w, "Order not found", http.StatusNotFound)
		return
	}

	json.NewEncoder(w).Encode(order)
}

// Create an order from cart
func CreateOrder(w http.ResponseWriter, r *http.Request) {
	var input struct {
		UserID uint `json:"user_id"`
	}
	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	// Fetch user's cart
	var cartItems []models.Cart
	config.DB.Where("user_id = ?", input.UserID).Find(&cartItems)
	if len(cartItems) == 0 {
		http.Error(w, "Cart is empty", http.StatusBadRequest)
		return
	}

	// Calculate total
	var total float64
	for _, item := range cartItems {
		var product models.Product
		config.DB.First(&product, item.ProductID)
		total += product.Price * float64(item.Quantity)
	}

	// Create the order
	order := models.Order{
		UserID: input.UserID,
		Total:  total,
		Status: "Pending",
	}
	config.DB.Create(&order)

	// Clear the cart
	config.DB.Where("user_id = ?", input.UserID).Delete(&models.Cart{})

	json.NewEncoder(w).Encode(order)
}

// Update order status (Admin/Shop action)
func UpdateOrderStatus(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["id"]

	var order models.Order
	if err := config.DB.First(&order, id).Error; err != nil {
		http.Error(w, "Order not found", http.StatusNotFound)
		return
	}

	var input struct {
		Status string `json:"status"`
	}
	if err := json.NewDecoder(r.Body).Decode(&input); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	order.Status = input.Status
	config.DB.Save(&order)

	json.NewEncoder(w).Encode(order)
}
