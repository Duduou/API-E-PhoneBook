const Telefone = require('../models/telefoneModel');

exports.listByEstabelecimento = async (req, res) => {
  try {
    const telefones = await Telefone.findAllByEstabelecimento(req.params.estabelecimento_id);
    res.json(telefones);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar telefones' });
  }
};

exports.getById = async (req, res) => {
  try {
    const telefone = await Telefone.findById(req.params.id);
    if (!telefone) return res.status(404).json({ error: 'Telefone não encontrado' });
    res.json(telefone);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar telefone' });
  }
};

exports.create = async (req, res) => {
  try {
    const novoTelefone = await Telefone.create(req.body);
    res.status(201).json(novoTelefone);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar telefone' });
  }
};

exports.update = async (req, res) => {
  try {
    const atualizado = await Telefone.update(req.params.id, req.body);
    if (atualizado === 0) return res.status(404).json({ error: 'Telefone não encontrado' });
    res.json({ message: 'Telefone atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar telefone' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletado = await Telefone.delete(req.params.id);
    if (deletado === 0) return res.status(404).json({ error: 'Telefone não encontrado' });
    res.json({ message: 'Telefone deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar telefone' });
  }
};
