const express = require ("express");
const cors = require('cors');
const app = express();
const port = 8000;

require("./config/mongoose.config");
app.use(
    cors({
        origin: 'http://localhost:5173',
        credentials: true,
    }),
    express.json(), 
    express.urlencoded({ extended: true })
)

require("./routes/shopRoutes")(app);
// require("./routes/userRoutes")(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));