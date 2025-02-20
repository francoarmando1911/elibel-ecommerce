import mongoose from "mongoose"

const MONGO_URL = "mongodb://localhost:27017/elibeldb"

export const conectMongoDb = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Conectado a la base de datos exitosamente.');
    } catch (error) {
        console.log(error)
    }
}