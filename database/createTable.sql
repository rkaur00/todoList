CREATE TABLE list (
  todoID      INT AUTO_INCREMENT,
   todoItem   VARCHAR(255) NOT NULL UNIQUE,
  todoDateAdded    DATE ,
 todoStatus BOOLEAN ,
    todoDueBy   DATE ,

  PRIMARY KEY     (todoID)
);
