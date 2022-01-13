const express = require('express');
const app = express();

//Tell the app object to host your static content from the dist folder
app.use(express.static( __dirname + '/dist/library'));

//...
//Add your API endpoints here
//You may have a folder called server, and have a separate.js file ofr each API endpoint
//Register all your API endpoints, and in the handler use mongo or whatever to save the data

/* app.get('/', (req, res)=>{
    res.status(200).send('node works!');
}); */

//Here, you're catching all the invalid routes

app.all('*', (req, res)=>{
    res.status(200).sendFile( __dirname + '/dist/library/index.html');
});

app.listen(process.env.PORT || 8080, ()=>{
    console.log('App is listening to port 8080!');
});
