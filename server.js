// npm packages
const express = require('express');
const path = require('path');
// turn on routes
const htmlRoutes = require("./routes/api/apiRoutes");
const apiRoutes = require("./routes/api/htmlRoutes");


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//staticly hosting our public folder/files(html, css & javascript)
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// turn on routes
// app.use(router);

// turn on server
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });