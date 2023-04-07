import { CameraNetworks } from "../models/cameraNetworks";



export const createNetwork = async (req:any, res:any) => {
  try{
    const name:string = req.body.name;
    const descriptions:string = req.body.descriptions;
    const cameras:number = req.body.cameras;
    const payload ={ name,descriptions,cameras }
    const create = await CameraNetworks.create(payload);
    res.status(200).json({ data: create })
}
catch(error){
    console.log(error)

}
  };


  export const netWorkUpdate= async (req:any, res:any) => {
    try{
        const id:number = req.body.id;
        const name:string = req.body.name;
        const descriptions:string = req.body.descriptions;
        const cameras:number = req.body.cameras;
        const payload ={ name,descriptions,cameras }
        const create = await CameraNetworks.update(payload,{where:{id:id}});
        res.status(200).json({ data: create })
  }
  catch(error){
      console.log(error)
  
  }
    };


    export const getOneNetwork = async (req:any, res:any) => {
        try{
          
          const id:number=req.body.id;
          const create = await CameraNetworks.findOne({where:{id:id}});
          res.status(200).json({ data: create })
      }
      catch(error){
          console.log(error)
      
      }
        };
  

        export const allNetwork = async (req:any, res:any) => {
            try{ 
              
              const create = await CameraNetworks.findAll();
              res.status(200).json({ data: create })
          }
          catch(error){
              console.log(error)
          
          }
            };

            export const Delete = async (req:any, res:any) => {
                try{ 
                  
                  const id:number=req.body.id;
                  const create = await CameraNetworks.update({deletedAt: new Date()},{where:{id:id}});
                  res.status(200).json({ data: "network deleted"})
              }
              catch(error){
                  console.log(error)
              
              }
                };