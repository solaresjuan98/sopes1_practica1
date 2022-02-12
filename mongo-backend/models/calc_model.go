package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

type CalcResult struct {
	Id_result primitive.ObjectID `json:"id,omitempty"`
	Number1   int                `json:"n1" validate:"required"`
	Number2   int                `json:"n2" validate:"required"`
	Operator  string             `json:"operator" validate:"required"`
	Result    int                `json:"result"`
	TimeAt    time.Time          `json:"time"`
}
