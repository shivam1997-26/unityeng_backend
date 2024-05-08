const express = require('express')
const conn = require('./config/db')
const webDetailsRouter = require('./router/webDetail')
const contactRouter = require('./router/contactus')
const productRouter = require('./router/product')
const teamRouter = require('./router/ourTeam')
const authRouter = require('./router/auth')
const cors = require('cors')

const app = express()
const PORT = 8080

conn()

app.use(express.json())
app.use('/website', express.static('public'))

app.use(cors({
    origin: '*'
}));

app.use('/api', webDetailsRouter)
app.use('/api', contactRouter)
app.use('/api', productRouter)
app.use('/api',teamRouter)
app.use('/api',authRouter)

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})