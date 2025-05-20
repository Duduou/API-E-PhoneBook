const Categoria = require('../models/categoriaModel');

exports.getAll = async (req, res) => {
  try {
    const categorias = await Categoria.findAll();
    res.json(categorias);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categorias' });
  }
};

exports.getById = async (req, res) => {
  try {
    const categoria = await Categoria.findById(req.params.id);
    if (!categoria) return res.status(404).json({ error: 'Categoria não encontrada' });
    res.json(categoria);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar categoria' });
  }
};

exports.create = async (req, res) => {
  try {
    const nova = await Categoria.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar categoria' });
  }
};

exports.update = async (req, res) => {
  try {
    const atualizado = await Categoria.update(req.params.id, req.body);
    if (atualizado === 0) return res.status(404).json({ error: 'Categoria não encontrada' });
    res.json({ message: 'Categoria atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar categoria' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletado = await Categoria.delete(req.params.id);
    if (deletado === 0) return res.status(404).json({ error: 'Categoria não encontrada' });
    res.json({ message: 'Categoria deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar categoria' });
  }
};
