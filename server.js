import Express from 'express';
import path from 'path';
const app = Express();

app.use(Express.static(path.join(__dirname, 'public')));

app.listen(3000, ()=>{
    console.log('Server is listening on 3000');
});