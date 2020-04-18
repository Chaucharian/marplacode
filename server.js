const express = require('express');
const app = express();
const router = express.Router();
const port = process.env.PORT || 8080;

router.use((req,res,next) => {
  console.log('/' + req.method);
  next();
});

app.use(express.static('dist'));
app.use('/examples', express.static('examples'));
app.use('/not-gamp-machine', express.static('not-gamp-machine/dist'));
app.use('/', router);

app.listen(port, '0.0.0.0',() => console.log(`Serving UI at ${port}!`));

router.get('/', (req,res) => res.sendFile('index.html') );
