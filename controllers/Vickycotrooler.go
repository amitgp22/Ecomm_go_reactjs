package controllers

import (
	"ecommerce-api/config"
	"ecommerce-api/models"
	"encoding/json"
	"net/http"
)

func GetProducts1(w http.ResponseWriter, r *http.Request) {
	var products []models.Products22
	config.DB.Find(&products)
	json.NewEncoder(w).Encode(products)
}
