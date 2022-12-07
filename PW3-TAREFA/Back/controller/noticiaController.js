const express = require('express');

const router = express.Router();

const modelnoticias = require('../model/noticiasModel');

router.get('/listarnoticias', (req, res)=>{

    modelnoticias.findAll()
        .then(
            (noticias)=>{
                return res.status(200).json(noticias);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do noticia',
                    erroBancoDados: erro
                });
            }
        );

});

router.get('/listarnoticia/:id',(req, res)=>{

    let {id} = req.params;

    modelnoticias.findByPk(id)
        .then(
            (noticia)=>{
                res.status(200).json(noticia);
            }
        ).catch(
            (erro)=>{
                return res.status(400).json({
                    erroStatus: true,
                    erroMessagem: 'Houve um erro ao selecionar os dados do noticia',
                    erroBancoDados: erro
                });
            }
        );

});

router.post('/inserirnoticia', (req, res)=>{
    let {nome_noticia}  = req.body ;
    modelnoticias.create(
        {nome_noticia}
    ).then(
        ()=>{
                return res.status(201).json({
                    erroStatus: false,
                    menssagemStatus: 'noticia inserido com sucesso!'
            });
        }
    ).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao cadastrar o noticia',
                        erroBancoDados: erro
                    });
        }
    );

});

router.put('/alterarnoticia', (req, res)=>{

    let {id, nome_noticia} = req.body;

    modelnoticias.update(
        {nome_noticia},
        {where:{id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'noticia alterado com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao alterar o noticia',
                        erroBancoDados: erro
                    });
        }
    );

});

router.delete('/excluirnoticia/:id', (req, res)=>{

    let {id} = req.params;

    modelnoticias.destroy(
        {where: {id}}
    ).then( ()=>{

        return res.status(200).json({
            erroStatus: false,
            menssagemStatus: 'noticia excluido com sucesso!'
        });

    }).catch(
        (erro)=>{
                    return res.status(400).json({
                        erroStatus: true,
                        erroMessagem: 'Houve um erro ao excluir o noticia',
                        erroBancoDados: erro
                    });
        }
    );

});

module.exports = router;