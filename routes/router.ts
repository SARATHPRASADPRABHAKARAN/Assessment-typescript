import express from 'express'; 
export const apiRoutes = express.Router();

import * as Cameracontroller from '../controller/cameraController'
import * as NetworkController from '../controller/networkController'

apiRoutes.post('/cameras',Cameracontroller.camCreate)
apiRoutes.put('/camupdate',Cameracontroller.camUpdate)
apiRoutes.get('/getcam',Cameracontroller.camGetOne)
apiRoutes.get ('/allcam',Cameracontroller.camgetall)
apiRoutes.put ('/deletecam',Cameracontroller.camDelete)


apiRoutes.post('/networks',NetworkController.createNetwork)
apiRoutes.put('/network',NetworkController.netWorkUpdate)
apiRoutes.get('/getnetwrk',NetworkController.getOneNetwork)
apiRoutes.get ('/allnetwrk',NetworkController.allNetwork)
apiRoutes.put ('/deletenetwrk',NetworkController.Delete)