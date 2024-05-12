const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const userRouter=require('./routes/user.routes');
const propertyRouter=require('./routes/property.routes');
const cookieParser=require('cookie-parser');
const dotenv=require('dotenv');
dotenv.config();


//middleware config
app.use(express.json());
app.use(express.urlencoded ({ extended: false }));
app.use(cors());
app.use(cookieParser());


const port=process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});

// app.get('/',(req,res)=>{
//     res.send('Hello there ');
// });
mongoose.connect(process.env.MONGO)
.then(()=>{
    console.log('Connected to database');
})
.catch((err)=>{
    console.log('Error connecting to database');
    console.log(err);
});


app.use('/user', userRouter);
app.use('/property', propertyRouter);


app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });


//pre-installation guide yet to be done