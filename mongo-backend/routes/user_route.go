package routes

import (
	"mongo-backend/controllers"

	"github.com/gofiber/fiber/v2"
)

func UserRoute(app *fiber.App) {
	// routes
	app.Post("/insertResult", controllers.CreateResult)

	app.Get("/operation/:resultId", controllers.GetResult)

	app.Get("/operations", controllers.GetAllOperatons)
}
