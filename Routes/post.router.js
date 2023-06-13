import express from 'express'

const postRouter = express.Router()

postRouter.get('/post', (req, res) => {
    res.send('Hent alle Post');
})

postRouter.post('/post', (req, res) => {
    console.log(req);
    res.send('Opretter post');
})

postRouter.put('/post', (req, res) => {
    res.send('Opdater post');
})

postRouter.delete('/post', (req, res) => {
    res.send('Sletter posts');
})

export { postRouter }

