import express from 'express';
const app = express();
import notFound from './src/middlewares/not-found.js';
import servicesRouter from './src/routes/services.router.js';

const PORT = process.env.PORT ?? 3000;

app.get('/', (request, response) => {
  response.json({
    message: 'Welcome to my API',
  });
});

app.use('/api', servicesRouter);

app.use(notFound);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
