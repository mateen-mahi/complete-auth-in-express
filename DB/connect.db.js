import mongoose from'mongoose';


const dbConnection = ()=>{
  mongoose.connect("mongodb+srv://mateenmahismart:n55gtzs0uHeOCyxl@cluster0.u614c.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log('Connected to MongoDB');

  }).catch((err)=>{
console.log('Error connecting to MongoDB , error: ' + err)
  })
}


export default dbConnection