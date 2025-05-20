const express = require('express');
const app = express();
// você pode importar mais rotas aqui

app.use(express.json());

// Rotas principais

const usuarioRoutes = require('./routes/usuarioRoutes');
app.use('/usuarios', usuarioRoutes);

const estabelecimentoRoutes = require('./routes/estabelecimentoRoutes');
app.use('/estabelecimentos', estabelecimentoRoutes);

const categoriaRoutes = require('./routes/categoriaRoutes');
app.use('/categorias', categoriaRoutes);

const tagRoutes = require('./routes/tagRoutes');
app.use('/tags', tagRoutes);

const telefoneRoutes = require('./routes/telefoneRoutes');
app.use('/telefones', telefoneRoutes);

const emailRoutes = require('./routes/emailRoutes');
app.use('/emails', emailRoutes);

const estabelecimentoCategoriaRoutes = require('./routes/estabelecimentoCategoriaRoutes');
app.use('/estabelecimento-categoria', estabelecimentoCategoriaRoutes);

const estabelecimentoTagRoutes = require('./routes/estabelecimentoTagRoutes');
app.use('/estabelecimento-tag', estabelecimentoTagRoutes);

const categoriaTagRoutes = require('./routes/categoriaTagRoutes');
app.use('/categoria-tag', categoriaTagRoutes);

// outras rotas: /estabelecimentos, /categorias, etc.

module.exports = app;
