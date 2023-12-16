const exp = require('express')
const competitionapp = exp.Router()

//body parser



competitionapp.use(exp.json());



//retriving of all competition
competitionapp.get('/getall' , (request,response)=>{
    const competitionapp = request.app.get("competitionapp" )

    competitionapp.find().toArray()
    .then((listOfcompets)=>{
        console.log(listOfcompets);
        response.send({
            message:"List of Clubs :",
            payload: listOfcompets
        })
    })
    .catch(err => {
        console.log("Error at competitionapp(L:7) :",err);
        response.send({message:"Error" , payload:err})
    }  )
})




//posting of competitions
competitionapp.post('/create' , (request,response)=>{
    const  competitionapp = request.app.get("competitionapp" )
    let data = request.body;
    console.log(data)
    competitionapp.insertOne(data)
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

module.exports=competitionapp;