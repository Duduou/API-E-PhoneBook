import express from 'express';
import helmet from 'helmet';

const app = express();
app.use(helmet());
app.use(express.json());

import path from 'path';
app.use('/uploads', express.static(path.resolve('uploads')));

import usuarioRoutes from './routes/usuario.routes';
app.use('/usuarios', usuarioRoutes);

import authRoutes from './routes/auth.routes';
app.use(authRoutes);

import estabelecimentoRoutes from './routes/estabelecimento.routes';
app.use('/estabelecimentos', estabelecimentoRoutes);

import estabelecimentoSubroutes from './routes/estabelecimento.subroutes';
app.use(estabelecimentoSubroutes);

import categoriaRoutes from './routes/categoria.routes';
app.use('/categorias', categoriaRoutes);

import tagRoutes from './routes/tag.routes';
app.use('/tags', tagRoutes);

import associacaoRoutes from './routes/associacao.routes';
app.use(associacaoRoutes);

import buscaRoutes from './routes/busca.routes';
app.use(buscaRoutes);

import fotoRoutes from './routes/foto.routes';
app.use(fotoRoutes);

import horarioRoutes from './routes/horario.routes';
app.use(horarioRoutes);

import favoritaRoutes from './routes/favorita.routes';
app.use(favoritaRoutes);

//const PORT = process.env.PORT || 3000;
app.listen(3000, '0.0.0.0',() => {
  console.log(`Servidor rodando em http://localhost:3000`);
});
