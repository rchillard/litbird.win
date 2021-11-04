import {
  json,
  missing,
  error,
  status,
  withContent,
  withParams,
  ThrowableRouter,
} from 'itty-router-extras'
import { nanoid } from 'nanoid'

// create an error-safe itty router
const router = ThrowableRouter({ base: '/api' })

router.get('/test', async request => {
  console.log(`Received new request: ${request.url}`)
  return new Response("Test GET", { status: 200 });
})

// GET collection of books
router.get('/books', async request => {
  console.log(`Received new request: ${request.url}`)
  let books = await TITLES.list()
  console.log(JSON.stringify(books))
  return json(books.keys)
})

// GET a single book
router.get('/books/:id', withParams, async request => {
  console.log(`Received new request: ${request.url}`)
  let book = await TITLES.get(request.id)
  console.log(book)
  return book ? json(book) : missing('That book was not found.')
})

// POST to the collection of books
router.post('/books', withContent, async request => {
  console.log(`Received new request: ${request.url}`)
  let body = request.content

  // Future upgrade: Need to base64 encode the title and use as Key in KV, so we can easily test for duplicate titles
  if ('title' in body) {
    let bookid = nanoid();
    let { title, author, synopsis } = body;
    let bookObject = {
      title: title,
      author: author,
      synopsis: synopsis
    }

    await TITLES.put(bookid, JSON.stringify(bookObject))

    return new Response(`Book created: ${JSON.stringify(bookObject)}`, { status: 200 })
  } else {
    return new Response("Missing title", { status: 400 })
  }
})

router.put('/books/:id', withContent, withParams, async request => {
  console.log(`Received new request: ${request.url}`)
  let body = request.content

  if ('title' in body) {
    let { title, author, synopsis } = body;
    let bookObject = {
      title: title,
      author: author,
      synopsis: synopsis
    }

    let book = await TITLES.get(request.id)
    if (book) {
      await TITLES.put(request.id, JSON.stringify(bookObject))
      return new Response(`Book modified: ${JSON.stringify(bookObject)}`, { status: 200 })
    } else {
      return new Response("No book found with that id", { status: 400 })
    }
  } else {
    return new Response("Missing title", { status: 400 })
  }
})

router.delete('/books/:id', withParams, async request => {
  console.log(`Received new request: ${request.url}`)
  let book = await TITLES.get(request.id)
  if (book) {
    let bookObject = await TITLES.delete(request.id)
    return new Response(`Book deleted: ${request.id}`, { status: 200 })

  } else {
    return new Response("No book found with that id", { status: 400 })
  }
})

// 404 for everything else
router.all('*', () => missing("Are you sure about that?"))

// attach the router "handle" to the event handler
addEventListener('fetch', event =>
  event.respondWith(router.handle(event.request))
)