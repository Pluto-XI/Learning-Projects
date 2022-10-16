const express = require('express');
const app = express();
const path = require('path')

//Start listening for requests
app.listen(8080, () => {
    console.log("Listening on 8080");
})

//Any incoming requests will run with use
// app.use((req, res) => {
//     console.log("A new request!");
//     res.send("<h1>My webpage!</h1>")
// })


// /cats => 'Meow'
// /dogs => 'Woof'
// '/'

//app.get expects a path and a callback function that runs whenever a request comes in matching the path. * can be used for all get requests
//Request contains a parameter property that can be used for dynamic pages. Can be destructured using path name



//You can set settings within Express, this is setting the template engine to EJS and the views path
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, '/views'))


app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    console.log(req.params)
    console.log("This is a subreddit : " + subreddit)
    res.send(`Browsing ${subreddit}`)
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params
    console.log(req.params)
    console.log("This is a subreddit : " + subreddit)
    res.send(`Browsing post: ${postID} on ${subreddit}`)
})


app.get('/', (req, res) => {
    res.render('home')
})


//req.query provides access to URL parameters
app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`Your question was ${q}`)
})