const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email : {
        type: String,
        required : true
    }
});

// // Support both CommonJS and ES module default export
const _passportLocalMongoose = passportLocalMongoose && passportLocalMongoose.default ? passportLocalMongoose.default : passportLocalMongoose;
userSchema.plugin(_passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);