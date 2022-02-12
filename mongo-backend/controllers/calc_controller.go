package controllers

import (
	"context"
	"mongo-backend/configs"
	"mongo-backend/models"
	"mongo-backend/responses"
	"net/http"
	"time"

	"github.com/go-playground/validator/v10"
	"github.com/gofiber/fiber/v2"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
	"go.mongodb.org/mongo-driver/mongo"
)

var calcCollection *mongo.Collection = configs.GetColletionsFromDB(*configs.DB, "calc")
var validate = validator.New()

func CreateResult(c *fiber.Ctx) error {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	var operation models.CalcResult
	defer cancel()

	// Validate the request body sent
	if err := c.BodyParser(&operation); err != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{
			Status:  http.StatusBadRequest,
			Message: "error",
			Data: &fiber.Map{
				"data": err.Error(),
			},
		})
	}

	// Use the validator to validate fields from the body
	if validatorError := validate.Struct(&operation); validatorError != nil {
		return c.Status(http.StatusBadRequest).JSON(responses.UserResponse{
			Status:  http.StatusBadRequest,
			Message: "error",
			Data: &fiber.Map{
				"data": validatorError.Error(),
			},
		})
	}

	newOperation := models.CalcResult{
		Id_result: primitive.NewObjectID(),
		Number1:   operation.Number1,
		Number2:   operation.Number2,
		Operator:  operation.Operator,
		Result:    operation.Result,
		TimeAt:    time.Now(),
	}

	if newOperation.Operator == "+" {
		newOperation.Result = newOperation.Number1 + newOperation.Number2
	}

	if newOperation.Operator == "-" {
		newOperation.Result = newOperation.Number1 + newOperation.Number2
	}

	if newOperation.Operator == "*" {
		newOperation.Result = newOperation.Number1 * newOperation.Number2
	}

	if newOperation.Operator == "/" {
		newOperation.Result = newOperation.Number1 / newOperation.Number2
	}

	result, err := calcCollection.InsertOne(ctx, newOperation)

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{
			Status:  http.StatusInternalServerError,
			Message: "error",
			Data: &fiber.Map{
				"data": err.Error(),
			},
		})
	}

	return c.Status(http.StatusCreated).JSON(responses.UserResponse{
		Status:  http.StatusCreated,
		Message: "The result has been inserted in the DB",
		Data: &fiber.Map{
			"data": result,
		},
	})

}

// Get result from mongo db
func GetResult(c *fiber.Ctx) error {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)
	operationId := c.Params("resultId")

	var operation models.CalcResult
	defer cancel()

	objId, _ := primitive.ObjectIDFromHex(operationId)

	err := calcCollection.FindOne(ctx, bson.M{"id": objId}).Decode(&operation)

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{
			Status:  http.StatusInternalServerError,
			Message: "error",
			Data: &fiber.Map{
				"data": err.Error(),
			},
		})

	}

	return c.Status(http.StatusOK).JSON(responses.UserResponse{
		Status:  http.StatusOK,
		Message: "SI",
		Data: &fiber.Map{
			"data": operation,
		},
	})

}

// Get all operations from mongo db
func GetAllOperatons(c *fiber.Ctx) error {

	ctx, cancel := context.WithTimeout(context.Background(), 10*time.Second)

	var operations []models.CalcResult
	defer cancel()

	dataResults, err := calcCollection.Find(ctx, bson.M{})

	if err != nil {
		return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{
			Status:  http.StatusInternalServerError,
			Message: "error",
			Data: &fiber.Map{
				"data": err.Error(),
			},
		})
	}

	// Reading from db
	defer dataResults.Close(ctx)
	for dataResults.Next(ctx) {
		var singleResult models.CalcResult

		if err = dataResults.Decode(&singleResult); err != nil {
			return c.Status(http.StatusInternalServerError).JSON(responses.UserResponse{
				Status:  http.StatusInternalServerError,
				Message: "error",
				Data: &fiber.Map{
					"data": err.Error(),
				},
			})
		}

		operations = append(operations, singleResult)
	}

	return c.Status(http.StatusOK).JSON(responses.UserResponse{
		Status:  http.StatusOK,
		Message: "Success! ",
		Data: &fiber.Map{
			"data": operations,
		},
	})
}
