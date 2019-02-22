
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('@koa/cors');
const pool = require('../../db/db')

const app = new Koa()
app.use(bodyParser())
app.use(cors())

app.use(async ctx => {
  const data = await ctx.request.body
  const item = await createPost(data.todoItem, data.todoDate, data.todoStatus,data.todoDueDate)
  ctx.body = `new todoList created, todoID ${item.insertId}`
})

async function createPost(todoItem,todoDate,todoStatus,todoDueDate) {
  try {
    const itemData = await pool.query(`
      INSERT INTO list(todoItem, tododateAdded, todoStatus,todoDueBy) 
      VALUES ("${todoItem}", "${todoDate}", "${todoStatus}", "${todoDueDate}");
    `)
    return itemData
  } catch (error) {
    console.log(error)
  }
}

module.exports = app.callback()