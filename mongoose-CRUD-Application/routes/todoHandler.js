const {
  allTodoGetController,
  TodoGetByIdController,
  TodoPostController,
  TodoMultiplePostController,
  TodoPutController,
  TodoDeleteController,
} = require("../controllers/todosController");

const router = require("express").Router();

//TODO: GET ALL THE TODOS
router.get("/", allTodoGetController);

//TODO: GET A TODO BY ID
router.get("/:id", TodoGetByIdController);

//TODO: POST TODO
router.post("/", TodoPostController);

//TODO: POST MULTIPLE TODO
router.get("/all", TodoMultiplePostController);

//TODO: PUT TODO
router.put("/:id", TodoPutController);

//TODO: DELETE TODO ID
router.delete("/:id", TodoDeleteController);

module.exports = router;
