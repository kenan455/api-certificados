const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());

app.get("/body", (req, res) => {
  const body = req.body;
  console.log(body);

  const soma = body.n1 + body.n2;
  res.send(`O resultado da soma é ${soma}`);
});

app.get("/headers", (req, res) => {
  const headers = req.headers;
  console.log(headers);

  res.send(`O resultado da soma é`);
});

app.get("/query", (req, res) => {
  const query = req.query;
  console.log(query);

  const soma = Number(query.n1) + Number(query.n2);
  res.send(`O resultado da soma é ${soma}`);
});

app.listen(port, () =>
  console.info(`Aplicação rodando em http://localhost/${port}`)
);
//api-certificados
