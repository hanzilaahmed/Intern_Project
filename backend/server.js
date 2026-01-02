import express from 'express'
import userRouter from './router/userRouter.js'


const app = express();

app.use(express.json())


// Request logging middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Response time tracking middleware
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`Response time: ${duration}ms`);
  });
  next();
});


app.get("/" , (req,res) =>{
    res.send("Home ROuter")
})

app.get("/health" , (req , res) =>{
    res.json({status:"ok"})
})

app.get("/api/test", (req, res) => {
  res.json({ message: "API is working" });
});

app.use("/api/user" , userRouter)



const PORT = 5000;

app.listen(PORT , ()=>{
    console.log(`SERVER IS RUNNING ON ${PORT}`)
})