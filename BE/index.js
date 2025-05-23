import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
const app = express()
const port = 3000

mongoose.connect('mongodb+srv://jeylasgbf206:jeylasgbf206@cluster0.1xsi3cl.mongodb.net/')
  .then(() => console.log('Connected!'))
  .catch(() => console.log('NOT Connected!'))

  app.use(cors())
  app.use(express.json())

  const dataSchema = new mongoose.Schema({
    img: String,
    name: String,
    price: Number
  });
  const Final = mongoose.model('Final', dataSchema);

app.get('/', async (req, res) => {
    const data = await Final.find()
  res.send(data)
})
app.get('/:id', async (req, res) => {
    const {id} = req.params
    const data = await Final.findById(id)
    res.send(data)
})
app.post('/', async (req, res) => {
    const {body} = req
    const data = await Final.create(body)
    res.send(data)
})
app.delete('/:id', async (req, res) => {
    const {id} = req.params
    const {body} = req
    const data = await Final.findByIdAndDelete(id, body)
  res.send(data)
})
app.put('/:id', async (req, res) => {
    const {id} = req.params
    const {body} = req
    const data = await Final.findByIdAndUpdate(id, body)
  res.send(data)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
