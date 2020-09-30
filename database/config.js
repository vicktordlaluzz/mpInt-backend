const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect("mongodb+srv://express-api:Z74uIixo2InHYGAY@cluster0.fw57x.mongodb.net/cellphone-shop?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('Base de datos conectada');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion a la base de datos');
    }
};

module.exports = {
    dbConnection
}