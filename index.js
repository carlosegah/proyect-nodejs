import express from 'express';
const app = express();
import notFound from './src/middlewares/not-found.js';
import productRouter from "./src/routes/products.router.js";

app.get('/', (req, res) => {
    res.json({
        message: "Bienvenidos a mi API REST"
    });
});

app.use("/api", productRouter);
app.use(notFound);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
});