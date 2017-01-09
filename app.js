import Express from 'express';
import path from 'path';
import * as faker from 'faker';
import * as _ from 'lodash';
const app = Express();

app.use(Express.static(path.join(__dirname, 'public')));
let id= 0;

function fakeRow(){
    return {
        id: id++,
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        title: faker.name.jobTitle(),
        city: faker.address.city(),
        state: faker.address.state()
    }
}
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api',(req,res)=>{
    let rows = [];
    _.times(100, ()=>{
        rows.push(fakeRow())
    });
    res.json({rows});
});

export default app;