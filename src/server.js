import express from 'express';
import { Router } from 'express';
const app = express();
const port = 3000;

//capp.use('/', typeCouses());
// app.use('/', cousesLevel());
// app.use('/', studentsLogin());
app.use('/', Router());



app.listen(port);






