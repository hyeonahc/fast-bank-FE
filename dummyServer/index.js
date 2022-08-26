const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()
const routerJson = require('./routes.json')

const jwt = require('jsonwebtoken')
const JWT_SECRET_KEY =
  require('./node_modules/json-server-auth/dist/constants').JWT_SECRET_KEY
const auth = require('json-server-auth')

server.db = router.db

server.use(middlewares)
server.use(jsonServer.bodyParser)
server.post('/search', (req, res, next) => {
  const searchedList = find(req.body)

  res.statusCode = 200
  res.json({ products: searchedList })
})

server.get('/auth', (req, res, next) => {
  const user = getUserAuth(req, res)
  if (!user) return

  res.statusCode = 200
  res.json({ user })
})

server.get('/products', (req, res, next) => {
  const user = getUserAuth(req, res)
  if (!user) return

  console.log(user)

  const products = [
    ...findKeyword({ keyword: user.job }).value(),
    ...findKeyword({ keyword: user.age }).value(),
  ]
  res.statusCode = 200
  res.json({ products })
})

server.post('/signup', (req, res, next) => {
  const { name, job, age } = req.body
  if (name && job && age) {
    req.body.fav = []
    req.body.cart = []

    next()
    return
  }

  res.statusCode = 400
  res.send()
})

listCRUD('/fav', 'fav')
listCRUD('/cart', 'cart')

server.use(jsonServer.rewriter(routerJson))
server.use(auth)
server.use(router)
server.listen(8000, () => {
  console.log(`JSON Server is running ${8000}`)
})

function find({ word, catalog, keyword }) {
  const db = router.db //lowdb instance
  const list = db.get('productList')

  const searchedList = list.filter((obj) => {
    const hasWord =
      word === undefined ||
      obj.name.includes(word) ||
      obj.description.includes(word)
    const hasCatalog =
      catalog === undefined || obj.category.toString().includes(catalog)
    const hasKeyword =
      keyword === undefined || obj.keyword.toString().includes(keyword)

    return hasWord && hasCatalog && hasKeyword
  })

  return searchedList
}

function findKeyword({ keyword }) {
  const db = router.db //lowdb instance
  const list = db.get('productList')

  const searchedList = list.filter((obj) => {
    const hasKeyword =
      keyword !== undefined && obj.keyword.toString().includes(keyword)
    return hasKeyword
  })

  return searchedList
}

function getUserAuth(req, res) {
  const tokenStr = req.headers.authorization
  const token = tokenStr ? tokenStr.replace('Bearer ', '') : null
  if (token) {
    try {
      const data = jwt.verify(token, JWT_SECRET_KEY)

      const db = router.db
      const users = db.get('users')

      const idx = users.findIndex({ email: data.email }).value()
      if (idx < 0) throw new Error()

      return users.nth(idx).value()
    } catch (e) {}
  }

  res.statusCode = 401
  res.json({ error: { name: 'User not authorized' } })
}

function listCRUD(path, key) {
  server.get(path, (req, res, next) => {
    const user = getUserAuth(req, res)
    if (!user) return

    res.statusCode = 200
    res.json({ [key]: user[key] })
  })

  function getValue(req, res) {
    const value = req.body[key]
    if (!value) {
      res.statusCode = 400
      res.send()
      return undefined
    }
    return value
  }

  server.post(path, (req, res, next) => {
    const value = getValue(req, res)
    if (!value) return

    const user = getUserAuth(req, res)
    if (!user) return

    user[key] = [...new Set([...user[key], value])]
    router.db.write()

    res.statusCode = 200
    res.json({ [key]: user[key] })
  })

  server.delete(path, (req, res, next) => {
    const value = getValue(req, res)
    if (!value) return

    const user = getUserAuth(req, res)
    if (!user) return

    user[key] = user[key].filter((id) => id !== value.toString())
    router.db.write()

    res.statusCode = 200
    res.json({ [key]: user[key] })
  })
}
