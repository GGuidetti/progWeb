require('./models/index')
const database = require('./sequelize');


const express = require('express')
const app = express()


const path = require('path');
const Pessoa = require('./models/Pessoa');
const { where } = require('sequelize');
const cors = require('cors');
const { STATUS_CODES } = require('http');
app.use(express.json())
const router = express.Router()
app.use(cors())
router.get('/pessoas', async function(req, res) {
    res.send(await Pessoa.findAll({}));
})

router.post('/pessoa', async function(req, res) {
    res.send(await Pessoa.create({...req.body}));
})

router.delete('/pessoa/:id', async function(req, res) {
    const a = await Pessoa.destroy({where:{id: req.params.id}})
    res.send(true);
})


app.use('/', router)


app.listen(process.env.port || 8080, async() => {
    await database.sync();
    await Pessoa.create({nome:"teila"});
    // const pessoa = await Pessoa.findAll({});
    // console.log(pessoa[0].nome);
    // const pessoaone = await Pessoa.findOne({where:{nome:'teil'}});
    // console.log(pessoaone);
    // await Pessoa.update({nome:"jorge"},{where:{nome:"teila"}});
    // const pessoaupd = await Pessoa.findAll({});
    // console.log(pessoaupd[0].nome);
    //await Pessoa.destroy({where:{nome:'teil'}});
})
