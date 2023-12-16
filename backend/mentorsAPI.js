const exp = require('express')
const mentorsapp = exp.Router()
const {ObjectId} = require('mongodb')

//body parser
mentorsapp.use(exp.json());



//retriving of all New Mentors
mentorsapp.get('/get-New-Mentors' , (request,response)=>{
    const NewMentorsCollection = request.app.get("NewMentorsCollection" )

    NewMentorsCollection.find().toArray()
    .then((listOfNewMentors)=>{
        console.log(listOfNewMentors);
        response.send({
            message:"List of New Mentors :",
            payload: listOfNewMentors
        })
    })
    .catch(err => {
        console.log("Error at New Mentors(L:7) :",err);
        response.send({message:"Error" , payload:err})
    }  )
})




//posting of NewMentors
mentorsapp.post('/create-New-Mentors' , (request,response)=>{
    const  NewMentorsCollection = request.app.get("NewMentorsCollection" )
    let data = request.body;
    console.log(data)
    NewMentorsCollection.insertOne(data)
    .then((dbRes)=>{
        console.log("DB response:" , dbRes)
        response.send({message:"Success"})
    }

    )
    .catch(err=>{
        console.log("Error :" ,err)
        response.send({message:"Erroe is :",payload :err})
    })

})

//deleteing of NewMentors
mentorsapp.delete('/delete-New-Mentors/:id' , (request,response)=>{
    const  NewMentorsCollection = request.app.get("NewMentorsCollection" )
    let data = (request.params.id);
    console.log(data)
    const objectIdInstance = new ObjectId(data);
    NewMentorsCollection.deleteOne({_id:objectIdInstance})
    .then((dbRes)=>{
        console.log("DB response:" , dbRes)
        response.send({message:"Success"})
    }

    )
    .catch(err=>{
        console.log("Error :" ,err)
        response.send({message:"Erroe is :",payload :err})
    })

})

//retriving of all Mentors
mentorsapp.get('/get-All-Mentors' , (request,response)=>{
    const AllMentorsCollection = request.app.get("AllMentorsCollection" )

    AllMentorsCollection.find().toArray()
    .then((listOfAllMentors)=>{

        response.send({
            message:"List of All Mentors :",
            payload: listOfAllMentors
        })
    })
    .catch(err => {
        console.log("Error at All Mentors(L:7) :",err);
        response.send({message:"Error" , payload:err})
    }  )
})




//posting of NewMentors
mentorsapp.post('/create-All-Mentors' , (request,response)=>{
    const  AllMentorsCollection = request.app.get("AllMentorsCollection" )
    let data = request.body;
    console.log(data)
    AllMentorsCollection.insertOne(data)
    .then((dbRes)=>{
        console.log("DB response:" , dbRes)
        response.send({message:"Success"})
    }

    )
    .catch(err=>{
        console.log("Error :" ,err)
        response.send({message:"Erroe is :",payload :err})
    })

})

module.exports=mentorsapp;