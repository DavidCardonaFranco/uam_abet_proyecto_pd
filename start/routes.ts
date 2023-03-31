/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.get("/Rubrics","RubricsController.index");
Route.post("/Rubrics","RubricsController.store");
Route.get("/Rubrics/:id","RubricsController.show");
Route.put("/Rubrics/:id","RubricsController.update");
Route.delete("/Rubrics/:id","RubricsController.destroy");

Route.get("/Subjects","SubjectsController.index");
Route.post("/Subjects","SubjectsController.store");
Route.get("/Subjects/:id","SubjectsController.show");
Route.put("/Subjects/:id","SubjectsController.update");
Route.delete("/Subjects/:id","SubjectsController.destroy");

Route.get("/Leaders","LeadersController.index");
Route.post("/Leaders","LeadersController.store");
Route.get("/Leaders/:id","LeadersController.show");
Route.put("/Leaders/:id","LeadersController.update");
Route.delete("/Leaders/:id","LeadersController.destroy");

Route.get("/Proffesors","ProffesorsController.index");
Route.post("/Proffesors","ProffesorsController.store");
Route.get("/Proffesors/:id","ProffesorsController.show");
Route.put("/Proffesors/:id","ProffesorsController.update");
Route.delete("/Proffesors/:id","ProffesorsController.destroy");

Route.get("/Evaluations","EvaluationsController.index");
Route.post("/Evaluations","EvaluationsController.store");
Route.get("/Evaluations/:id","EvaluationsController.show");
Route.put("/Evaluations/:id","EvaluationsController.update");
Route.delete("/Evaluations/:id","EvaluationsController.destroy");
