INSERT into todos(item_name, task, status)
VALUES
('shopping', 'pick up groceries at TJs', 'pending'),
('exercise', 'pullups an pushups in the park', 'pending'),
('taxes', 'file state and federal taxes', 'pending');

DELETE FROM todos where id < 4;
