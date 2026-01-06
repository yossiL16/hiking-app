import express from 'express';
import {isSafeToHike} from './utils/safeToHike.js';

export const app = express();
const PORT = 3000 || 3001;
app.use(express.json());


app.post('/check-weather', async (req,res) => {
    const {temperature, windSpeed} = req.body;
    const result = isSafeToHike(temperature, windSpeed)
    res.status(200).json(result)
});


// app.listen(PORT, () => {
//   console.log(`Server is running on port http://localhost:${PORT}`);
// });