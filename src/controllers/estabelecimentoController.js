const Estabelecimento = require('../models/estabelecimentoModel');

exports.getAll = async (req, res) => {
  try {
    const estabelecimentos = await Estabelecimento.findAll();
    res.json(estabelecimentos);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estabelecimentos' });
  }
};

exports.getById = async (req, res) => {
  try {
    const estabelecimento = await Estabelecimento.findById(req.params.id);
    if (!estabelecimento) return res.status(404).json({ error: 'Estabelecimento não encontrado' });
    res.json(estabelecimento);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar estabelecimento' });
  }
};

exports.create = async (req, res) => {
  try {
    const novo = await Estabelecimento.create(req.body);
    res.status(201).json(novo);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar estabelecimento' });
  }
};

exports.update = async (req, res) => {
  try {
    const atualizado = await Estabelecimento.update(req.params.id, req.body);
    if (atualizado === 0) return res.status(404).json({ error: 'Estabelecimento não encontrado' });
    res.json({ message: 'Estabelecimento atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar estabelecimento' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletado = await Estabelecimento.delete(req.params.id);
    if (deletado === 0) return res.status(404).json({ error: 'Estabelecimento não encontrado' });
    res.json({ message: 'Estabelecimento deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar estabelecimento' });
  }
};

exports.search = async (req, res) => {
  const termo = req.query.q;

  if (!termo) {
    return res.status(400).json({ error: 'Informe o parâmetro "q"' });
  }

  try {
    const results = await Estabelecimento.searchByTerm(termo);
    res.json(results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar estabelecimentos' });
  }
};