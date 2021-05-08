const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect( process.env.MONGODB_CNN, {
            useNewUrlParser:    true,
            useUnifiedTopology: true,
            useCreateIndex:     true,
            useFindAndModify:   false,
        } );

        console.log('db online');

    } catch (error) {
        console.log(error);
        throw new Error(error);
    }

}



module.exports = {
    dbConnection
};