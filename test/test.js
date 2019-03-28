// const assert = require('assert');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised).should();

const Todo = require('../models/todo');

// describe('Sanity Check',  () => {
//     it('should be 2', () => {
//         expect(1 + 1).to.equal(2);
//     });
// });

// adds section for todo tests
describe('Todo model', () => {
    it('should be able to grab an array of todo items', async () => {
        const theTodoArray = await Todo.getAll();
        expect(theTodoArray).to.be.instanceOf(Array);
        console.log(theTodoArray)
    })

    it('should be able to grab a todo by id', async () => {
        const theTodoItem = await Todo.getById(4);
        expect(theTodoItem).to.be.instanceOf(Todo);
    })

    it('should allow a todo item to be marked as "done"', async () => {
        const theTodoItem = await Todo.getById(4);
        theTodoItem.status = "done";

        await theTodoItem.save();
        const alsoTodoItem = await Todo.getById(4);
        expect(alsoTodoItem.status).to.equal('done');
        
    })

    it('should allow a todo item to be marked as "pending"', async () => {
        const theTodoItem = await Todo.getById(4);
        theTodoItem.status = "pending";
        
        await theTodoItem.save();
        const alsoTodoItem = await Todo.getById(4);
        expect(alsoTodoItem.status).to.equal('pending');
    })
})