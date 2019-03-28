const db = require('./conn');

// declare the Todo Class

class Todo {
    constructor(id, item_name, task, status) {
        this.id = id;
        this.itemName = item_name;
        this.task = task;
        this.status = status
    }


    static getAll() {
        return db.any(`select * from todos`);
    }
    
    static getById(id) {
        return db.one(`
        select * from todos
        where id=${id}
        `)
        .then ((todoData) => {
            const todoInstance = new Todo(todoData.id, todoData.item_name, todoData.task, todoData.status);
            console.log(todoInstance)
            return todoInstance;
        })
    }

    save() {
        return db.result(`
        update todos set
            item_name='${this.itemName}',
            task='${this.task}',
            status='${this.status}'
        where id=${this.id}
        `)
    }
}



module.exports = Todo;