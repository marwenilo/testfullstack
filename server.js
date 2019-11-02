const express = require('express');
const connectDB = require('./config/db');
// const path = require ('path'); 
// const bodyParser = require('body-parser');



// const users = require('./routes/api/users');
// const profile = require('./routes/api/profile');
// const posts = require('./routes/api/posts');

const app = express();

 // connect DB
connectDB();
// Body parser middleware
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

//DB Config
const db = require('./config/default').mongoURI;  

//Init Middleware
app.use(express.json({ extended: false}));

// Connect to MongoDB
// mongoose
//   .connect(db)
//   .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));

// Passport middleware

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.

// Passport Config
// require('./config/passport')(passport);

// Use Routes
app.use('/api/users', require('./routes/api/users') );
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/auth', require('./routes/api/auth'));


//server static assets in production
// if (process.env.NODE_ENV === 'production') {
  //set static folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) => {
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// }
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));