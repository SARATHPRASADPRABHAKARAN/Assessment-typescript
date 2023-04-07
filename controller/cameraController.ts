import {Camera } from "../models/cameras";
import { CameraNetworks } from "../models/cameraNetworks";

export const camCreate = async (req:any, res:any) => {
  try{
    const name:string = req.body.name;
    const description:string = req.body.description;
    const url:string = req.body.url;
    const payload ={name,description,url }
    console.log('sssfss',payload)
    const create = await Camera.create(payload);
    res.status(200).json({ data: create })
}
catch(error){
    console.log(error)

}
  };


  export const camUpdate= async (req:any, res:any) => {
    try{
       
        const id:number = req.body.id;
        const name:string = req.body.name;
        const description:string = req.body.description;
        const url:string = req.body.url;
        console.log(id)
        const payload ={ name:name,description:description,url:url }
        const create = await Camera.update(payload,{where:{id:id}});
        res.status(200).json({ data: create })
  }
  catch(error){
      console.log(error)
  
  }
    };


    export const camGetOne= async (req:any, res:any) => {
        try{
          
          const id:number=req.body.id;
          const create = await Camera.findOne({where:{id:id}});
          res.status(200).json({ data: create })
      }
      catch(error){
          console.log(error)
      
      }
        };
  

        export const camgetall = async (req:any, res:any) => {
            try{ 
              
              const create = await Camera.findAll();
              res.status(200).json({ data: create })
          }
          catch(error){
              console.log(error)
          
          }
            };

            export const camDelete = async (req:any, res:any) => {
                try{ 
                  
                  const id:number = req.body.id;
                  const create = await Camera.update({deletedAt: new Date()},{where:{id:id}});
                  console.log(create)
                  const network = await CameraNetworks.update({deletedAt: new Date()},{where:{cameras:id}});
                  res.status(200).json({ data: "deleted" })
              }
              catch(error){
                  console.log(error)
              
              }
                }; 