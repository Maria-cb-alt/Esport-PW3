const express = require('express');

const app = express();
const axios = require('axios').default;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//MAPEAMENTO DA PASTA PUBLIC
app.use(express.static('public'));

//CONFIGURA O EJS COMO VIEW ENGINE (REDENRIZA AS PÁGINAS DE FRONT-END)
app.set('view engine', 'ejs');

app.get('',(req,res)=>{
    const urlListagemnoticias = 'http://localhost:3000/listarnoticias';

    axios.get(urlListagemnoticias)
    .then((response)=> {
        let noticias = response.data;
        res.render('noticia/listagemnoticias',{noticias});
    });
})

app.get('/cadastronoticias',(req,res)=>{
    res.render('noticia/index');
})

app.get('/listagemnoticias',(req,res)=>{

    const urlListagemnoticias = 'http://localhost:3000/listarnoticias';

    axios.get(urlListagemnoticias)
    .then((response)=> {
        let noticias = response.data;
        res.render('noticia/listagemnoticias',{noticias});
    });
});

app.get('/formEdicaonoticias/:id', (req, res)=>{
        
    let {id} = req.params;

    const urlListagemnoticias = `http://localhost:3000/listarnoticia/${id}`;
    
    axios.get(urlListagemnoticias)
    .then(
        (response)=>{

            let noticia = response.data;
            res.render('noticia/editarnoticia', {noticia});

        }
    )
});

app.post('/alterarnoticia', (req, res)=>{

    const urlAlterarnoticia = 'http://localhost:3000/alterarnoticia';
    console.log(req.body);

    axios.put(urlAlterarnoticia, req.body)
    .then(
        res.send('ALTERADO!')
    )

});

app.get ('/deletarnoticia/:id',(req, res)=>{
    let id = req.params.id;
    const urlDeletarnoticia = `http://localhost:3000/excluirnoticia/${id}`;
    axios.delete(urlDeletarnoticia, req.body)
    .then(
        res.send('DELETADO')
)});

app.listen(3001, ()=>{
        console.log('SERVIDOR RODANDO EM: http://localhost:3001');
});