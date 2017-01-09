import {expect} from 'chai';
import supertest from 'supertest';
import app from '../app';
const agent = supertest(app);

describe('api tests', ()=>{
    it('should get faked data', done=>{
        agent.get('/api')
        .end((err,res)=>{
            expect(res.body.rows).to.have.length(100);
            done();
        })
    })
});