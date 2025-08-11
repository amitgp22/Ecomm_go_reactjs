package controllers

import (
	"ecommerce-api/config"
	"ecommerce-api/models"
	"encoding/json"
	"net/http"

	"github.com/gorilla/mux"
)

func GetProducts(w http.ResponseWriter, r *http.Request) {
	var products []models.Product
	config.DB.Find(&products)
	json.NewEncoder(w).Encode(products)
}

func CreateProduct(w http.ResponseWriter, r *http.Request) {
	var product models.Product
	json.NewDecoder(r.Body).Decode(&product)
	config.DB.Create(&product)
	json.NewEncoder(w).Encode(product)
}

func GetProduct(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var product models.Product
	config.DB.First(&product, params["id"])
	json.NewEncoder(w).Encode(product)
}

func UpdateProduct(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var product models.Product
	config.DB.First(&product, params["id"])
	json.NewDecoder(r.Body).Decode(&product)
	config.DB.Save(&product)
	json.NewEncoder(w).Encode(product)
}

func DeleteProduct(w http.ResponseWriter, r *http.Request) {
	params := mux.Vars(r)
	var product models.Product
	config.DB.Delete(&product, params["id"])
	json.NewEncoder(w).Encode("Product deleted")
}
