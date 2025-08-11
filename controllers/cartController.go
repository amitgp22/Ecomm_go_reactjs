package controllers

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"

	"ecommerce-api/config"
	"ecommerce-api/models"

	"github.com/gorilla/mux"
)

// Get all cart items for a user
func GetCart(w http.ResponseWriter, r *http.Request) {
	userIDStr := r.URL.Query().Get("user_id") // e.g., /cart?user_id=1
	if userIDStr == "" {
		http.Error(w, "user_id is required", http.StatusBadRequest)
		return
	}
	userID, _ := strconv.Atoi(userIDStr)

	var cartItems []models.Cart
	config.DB.Where("user_id = ?", userID).Find(&cartItems)
	json.NewEncoder(w).Encode(cartItems)
}

// Add an item to the cart
// func AddToCart(w http.ResponseWriter, r *http.Request) {
// 	var cart models.Cart
// 	if err := json.NewDecoder(r.Body).Decode(&cart); err != nil {
// 		http.Error(w, "Invalid input", http.StatusBadRequest)
// 		return
// 	}

// 	// Check if product already in cart
// 	var existing models.Cart
// 	result := config.DB.Where("user_id = ? AND product_id = ?", cart.UserID, cart.ProductID).First(&existing)
// 	if result.Error == nil {
// 		// Product already in cart → increase quantity
// 		existing.Quantity += cart.Quantity
// 		config.DB.Save(&existing)
// 		json.NewEncoder(w).Encode(existing)
// 		return
// 	}

// 	// Otherwise create new cart entry
// 	config.DB.Create(&cart)
// 	json.NewEncoder(w).Encode(cart)
// }

func AddToCart(w http.ResponseWriter, r *http.Request) {
	var cartItem models.Cart
	json.NewDecoder(r.Body).Decode(&cartItem)

	// 1️⃣ Get product details from DB
	var product models.Product
	if err := config.DB.First(&product, cartItem.ProductID).Error; err != nil {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(map[string]string{"error": "Product not found"})
		return
	}

	// 2️⃣ Check stock availability
	if cartItem.Quantity > product.Stock {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{
			"error": fmt.Sprintf("Only %d items in stock", product.Stock),
		})
		return
	}

	// 3️⃣ Insert into cart if valid
	if err := config.DB.Create(&cartItem).Error; err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{"error": "Failed to add to cart"})
		return
	}

	json.NewEncoder(w).Encode(cartItem)
}

// Update cart item quantity
func UpdateCart(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["id"]

	var cart models.Cart
	if err := config.DB.First(&cart, id).Error; err != nil {
		http.Error(w, "Cart item not found", http.StatusNotFound)
		return
	}

	if err := json.NewDecoder(r.Body).Decode(&cart); err != nil {
		http.Error(w, "Invalid input", http.StatusBadRequest)
		return
	}

	config.DB.Save(&cart)
	json.NewEncoder(w).Encode(cart)
}

// Remove an item from the cart
func RemoveFromCart(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	id := params["id"]

	if err := config.DB.Delete(&models.Cart{}, id).Error; err != nil {
		http.Error(w, "Failed to delete cart item", http.StatusInternalServerError)
		return
	}

	json.NewEncoder(w).Encode(map[string]string{"message": "Item removed from cart"})
}
