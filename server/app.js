import express from 'express';
import routes from './routes/routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true }))

app.use('/',routes)

app.use((req, res) =>
  res.status(404).json({
    status: 404,
    error: ' PAGE NOT FOUND '
  })
);

export default app;
