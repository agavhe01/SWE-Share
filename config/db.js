const mongoose = require('mongoose')

const config = require('config');

const db = config.get('mongoURI');

// [MONGOOSE] DeprecationWarning: Mongoose: the `strictQuery` option will be switched back to `false` by default in Mongoose 7. Use `mongoose.set('strictQuery', false);` if you want to prepare for this change. Or use `mongoose.set('strictQuery', true);` to suppress this warning.
// (Use `node --trace-deprecation ...` to show where the warning was created)
mongoose.set("strictQuery", false);

const connectDB = async () => {
    try{
        await mongoose.connect(db, {
            useNewUrlParser: true
           
        });
        console.log('Mongo DB Connected....');
    }
    catch(err){
        console.error(err.message);
        // Exit process with filur
        process.exit(1);

    }
}

module.exports = connectDB;