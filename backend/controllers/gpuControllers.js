const asyncHandler = require("express-async-handler")
const GPUs = require("../models/gpuModel")
const Users = require("../models/usersModel")

// const lend_gpu = asyncHandler(async function(req,res){
//     const {lender_id, time, cores, memory, gpu_count} = req.body




//     if(!time || !req.body.communityName || !req.body.idea ){
//                 // If the input to these fields arent given error
//         return res.status(400).send({message : "Please fill important fields"})
//     }
//     if(req.body.users.length <2 ){
//         return res.status(400).send("Add atleast 1 user")
//     }
//     let participantUsers
//     try{
//         participantUsers = await Users.find({_id: {$in: req.body.users}},{password : 0})
//     }catch(e){
//         console.error(e);
//     }
//     console.log(req.user);
//     participantUsers.push(req.user)
//     console.log("Result : ",participantUsers);
    
//     try{
//         const addCommunity =  await Community.create({
//             communityName : req.body.communityName,
//             creator :  req.user._id,
//             idea : req.body.idea,
//             existsFor : req.body.existsFor,
//             participants : participantUsers
//         })
//         if(addCommunity){
//             res.status(201).json({
//                 _id : addCommunity._id,
//                 communityName : addCommunity.communityName,
//                 creator :  addCommunity.creator,
//                 idea : addCommunity.idea,
//                 existsFor : addCommunity.existsFor,
//                 participants : addCommunity.participants
//             })
//         }else{
//             res.status(400) 
//             err = new Error("Failed to Create New User")
//             throw err
//         }
//     }
//     catch(err){
//         console.log(err);
//     }
// })

// const propertyChange = asyncHandler(async function(req, res){
//     const { communityId, newName, newIdea, newLogo} = req.body

//     const updates = {}
//     if (newName) {
//         updates.communityName = newName
//     }
//     if (newIdea) {
//         updates.idea = newIdea
//     }
//     if (newLogo) {
//         updates.communityLogo = newLogo
//     }
//     console.log(updates);
//     const updateChat = await Community.findByIdAndUpdate({_id : communityId},updates,{
//         new : true
//     })
//     if(updateChat){
//         res.json(updateChat)
//     }else{
//         res.status(400) 
//         err = new Error("Failed to Rename the Community")
//         throw err
//     }
// })

// Request GPU for clients

// const request_gpu = asyncHandler(async function(req,res){

//     const {lender_id, time, cores, memory, gpu_count} = req.body

//     const checkGpu = await GPUs.findOne({
//         lender_id: lender_id,
//         time: time,
//         cores: cores,
//         memory: memory,
//         gpu_count: gpu_count
//       }).select("-password");
    
//     if(!checkGpu){
//         return res.status(404).send("No GPU found")
//     }


//     ////////////////////////////

//     const assignGpu = await Community.findByIdAndUpdate({_id : checkGpu._id},
//         {$push : {gpu_status : "Active"}},
//         { new: true }
//     )
    
//     if(assignGpu) {
//         res.status(201).json(assignGpu)
//     }else{
//         res.status(201)
//         throw new Error("Assigning of GPU failed")
//     }
// })

// const removeFromGroup = asyncHandler(async function(req,res){

//     const { communityId, userId } = req.body
//     const removeUser = await Users.findById({_id : userId}).select("-password" )
//     console.log("Hlo");
//     console.log(removeUser)
//     const removed = await Community.findByIdAndUpdate({_id : communityId},
//         {$pull : {participants : { $in: [removeUser] }}},
//         {new : true}
//     )
//     console.log("Hlo");
//     if(removed) {
//         console.log("removal Successful")
//         res.status(201).json(removed)
//     }else{
//         res.status(201)
//         throw new Error("Participant removal failed")
//     }
// })

// const showCommunity = asyncHandler(async function(req,res){
//     const communities = await Community.find()
//     res.status(201).json(communities)
// })

module.exports = {request_gpu}