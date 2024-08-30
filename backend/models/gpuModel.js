// lender_id
// time
// cores
// memory
// gpu_count
// gpu_status

const mongoose = require("mongoose")
const gpuModel = mongoose.Schema(
    {
        lender_id : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "Users"
        },

        time : {
            type : Number
        },

        cores : {
            type : Number
        },

        memory : {
            type : Number
        },

        gpu_count : {
            type : Number
        },

        gpu_status : {
            type : String,
            enum : ["Active", "Inactive"]
        }

    }, 
    {
        timestamps : true
    }
);

const GPUs = mongoose.model("GPUs", gpuModel)

module.exports = GPUs;