import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import { mongoConnect } from "./database/mongo";
//import mainRoutes from './routes/admin';
import adminRoutes from './routes/admin'
dotenv.config();

mongoConnect();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({extended: true}));

server.use('/admin',adminRoutes);

server.use((req: Request, res: Response)=>{
    res.status(404).render('pages/404');
});

server.listen(process.env.PORT);