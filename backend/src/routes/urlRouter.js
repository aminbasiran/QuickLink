import express from "express"
import {validateURL} from "../utils/validateURL.js"
import url from "../schema/schema.js"

import { nanoid } from 'nanoid'


export const urlRouter = express.Router()

urlRouter.get("/url/:urlID", async (req,res)=>{

    const {urlID} = req.params

    try {
        let foundURL = await url.findOne({urlID})

        if(foundURL){
            const updateURL = await url.findOneAndUpdate({urlID},{$inc: { clicks: 1 }},{new:true})
            
            const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
            res.redirect(proxyUrl+updateURL.longURL)
        }

        else{
            res.status(404).json('Not found')
        }

    } catch (error) {
        res.send(error)
    }

})


urlRouter.post("/url/create", async (req,res)=> {
    
    const {longURL} = req.body
    const urlID = nanoid()

    if (validateURL(longURL)){
        
        try {

            let checkedURL = await url.findOne({longURL})

            if(checkedURL){
                res.send("Associated link already minified!")
            }

            else{

                const requestBody =  {
                    urlID : urlID,
                    longURL : longURL,
                    shortURL :`http://localhost:3000/${urlID}`
                }
                
                const createNewURL  = await url.create(requestBody);
            
                res.send(createNewURL)
            }

        } catch (error) {
            res.send(error)
        }


    }

    
    else{
        res.status(400).send('Invalid Original Url');
    }

})


