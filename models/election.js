const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const passportLocalMongoose = require('passport-local-mongoose');

const electionSchema = new Schema({
    election: [{
        candidate: [
            {
                name: "bill",
                color: "green",
                votes: 0
            },
            {
                name: "Jon",
                color: "blue",
                votes: 0
            }
        ],
        results: {
            NY: [{
                name: String,
                votes: Number
            }],

    candidatename: {
      type: String, 
      required: true

    },
      electionstate: Number,
      color: String
    
    });
    
    const Election = mongoose.model("Election", electionSchema);


module.exports = Election;