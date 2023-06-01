import express from 'express'

const postRouter = express.Router()

postRouter.get('/post', (req, res) => {
    res.send('Hent alle Post');
})

postRouter.post('/post', (req, res) => {
    res.send('Hent alle Post1');
})

postRouter.put('/post', (req, res) => {
    res.send('Hent alle Post2');
})

postRouter.delete('/post', (req, res) => {
    res.send('Hent alle Post3');
})

export { postRouter }

