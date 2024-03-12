import mongoose from "mongoose";


const { Schema } = mongoose;

const urlSchema = new Schema({
    urlID: {type:String,required:true,unique:true}, // String is shorthand for {type: String}
    longURL: {type:String,required:true},
    shortURL: {type:String,required:true},
    clicks : {type:Number, default: 0}
}, { timestamps: true });

const url = mongoose.model('url', urlSchema);
export default url;