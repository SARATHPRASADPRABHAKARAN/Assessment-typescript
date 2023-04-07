import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import { apiRoutes } from './routes/router';

const app = express();
const port = 3003;
app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(bodyParser.json());
app.use(cors());


app.use('/api',apiRoutes)

  


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
