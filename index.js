import express from 'express';
import { connectDB } from './db/db.js';
import productRoute from './routes/productRoute.js';
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
connectDB();
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('app runnig');
});
app.get('/', (req, res) => {
  res.send('Hello ');
});
app.use('/api/v1', productRoute);
export default app;
