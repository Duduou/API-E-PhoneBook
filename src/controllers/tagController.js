const Tag = require('../models/tagModel');

exports.getAll = async (req, res) => {
  try {
    const tags = await Tag.findAll();
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tags' });
  }
};

exports.getById = async (req, res) => {
  try {
    const tag = await Tag.findById(req.params.id);
    if (!tag) return res.status(404).json({ error: 'Tag não encontrada' });
    res.json(tag);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar tag' });
  }
};

exports.create = async (req, res) => {
  try {
    const nova = await Tag.create(req.body);
    res.status(201).json(nova);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar tag' });
  }
};

exports.update = async (req, res) => {
  try {
    const atualizado = await Tag.update(req.params.id, req.body);
    if (atualizado === 0) return res.status(404).json({ error: 'Tag não encontrada' });
    res.json({ message: 'Tag atualizada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar tag' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletado = await Tag.delete(req.params.id);
    if (deletado === 0) return res.status(404).json({ error: 'Tag não encontrada' });
    res.json({ message: 'Tag deletada com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar tag' });
  }
};
