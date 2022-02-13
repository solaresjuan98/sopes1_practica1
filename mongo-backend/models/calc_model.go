package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type CalcResult struct {
	Id_result primitive.ObjectID `json:"id,omitempty"`
	Number1   float64            `json:"n1" validate:"required"`
	Number2   float64            `json:"n2" validate:"required"`
	Operator  string             `json:"operator" validate:"required"`
	Result    float64            `json:"result"`
	TimeAt    time.Time          `json:"time"`
}
