const  express =  require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('<h1>jolo</h1>')
})

app.get('/comida', async(req,res)=>{
  await res.status(200).send('estatus 200')

})
app.listen(port,(req,res)=>{
    console.log(`escuchando en el port ${port}`)
})