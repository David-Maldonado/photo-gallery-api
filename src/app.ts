//app, sera la app servidor
import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import indexRoutes from './routes'
const app = express();

//settings
app.set('port', process.env.PORT || 5000); //Si existe un puerto tomalo o usa el 5000

//middlewares
app.use(morgan('dev'));
app.use(express.json()); //para que las peticiones lleguen en format json
app.use(cors());
//routes
app.use('/api', indexRoutes);


//this folder for this application will be used store public files 
app.use('/uploads', express.static(path.resolve('uploads'))); //resolve devuelve la ruta de uploads para que sepa donde se almacenara


export default app;