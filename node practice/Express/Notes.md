## Express Notes ##
Express is just code someone else wrote. Inversion of control, a library is something that can be integrated at any point(methods, functions, etc.).
Frameworks have tradeoffs, this flow of control is inverted and the <b>FRAMEWORK</b> controls how projects are built. Flexibility is traded for speed,
and features. 


Express can listen to incoming requests to the web server and process a response.
-Start up a server
-Parse requests(Text information)
-Match requests to particular routes
-Create the http response and associated content.


## Dev
Import/Require Express,
execute express() and assign to variable, usually named app
//To see what methods/functions express allows use console.dir(app)


Start listening for requests with <b>app.listen(portNum, callback)</b>
ex: app.listen(3000, () => {
    console.log("listening on 3000")
})

In order to respond, two objects need to be used. Request and Response. req, res are common names and callback arguments.

# Request
    -This object contains a ton of data about the request, including URL and http headers. Express parses the http request and makes this object.
    This is passed as the first argument in the app.use((REQUEST, RESPONSE) => {}) call back.
    Different requests can be made(GET, POST, etc)
# Response
    -Bundles info and sends an http response to the client. Can respond with string(html), object(json) and it will be received by the client.


## Routing
Routing is not specific to Express. It's a common term that refers to taking incoming requests and a path and matching it to code and a response.
Ex. A path could be /search or /help, /anything.
Note: The server can only send back one request, any time something is sent back you are done for the one request. One http request one response.


## PATH PARAMETERS && DYNAMIC ROUTES
    To avoid having to create every single route on a webapp, you can make a pattern. For example, reddit has /r/subreddit. They do not go into their
    backend and make a route for every single subreddit, it's automatic and depending on patterns. 
    === Express has syntax for this, app.get('/r/:subreddit'). Use the ":" ===

    request.params will give you an object with your parameters and their key. Ex: /r/cats would be {subreddit: "cats"}
    you can have dynamic routes using :. ex: /r/:subreddit/comments/:commentID

## Query Strings
    Query strings are a property on the request object.
    req.query returns an object with query strings. ex: search?q=red would return as {q: red}


/////////////////////////////

## HTML AND DYNAMIC TEMPLATING
Templating allows us to define a preset 'pattern' for a webpage, that we can dynamically modify.
For example, we could define a single "Search" template that displays all the results for a given term. We don't know what the term is,
or how many results there are ahead of time. The page is created on the fly.

You can use a <b>templating engine</b> such as EJS, PUG, handlebars, etc.

Use app.set to change view engine to your templating engine. app.set('view engine', 'ejs')
You can place templates within a "views" directory. Express automatically assumes that this is the location so you don't need to specify path.
NOTE//
The default views directory will only work if you are running the app from within the same directory where the index.js is.
If you want to change this, you need to change the default directory.
By default the directory is process.cwd()/views

const path = require('path')
app.set("views", path.join(__dirname, '/views'))
//