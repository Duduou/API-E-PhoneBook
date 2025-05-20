const Email = require('../models/emailModel');

exports.listByEstabelecimento = async (req, res) => {
  try {
    const emails = await Email.findAllByEstabelecimento(req.params.estabelecimento_id);
    res.json(emails);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar emails' });
  }
};

exports.getById = async (req, res) => {
  try {
    const email = await Email.findById(req.params.id);
    if (!email) return res.status(404).json({ error: 'Email não encontrado' });
    res.json(email);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar email' });
  }
};

exports.create = async (req, res) => {
  try {
    const novoEmail = await Email.create(req.body);
    res.status(201).json(novoEmail);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar email' });
  }
};

exports.update = async (req, res) => {
  try {
    const atualizado = await Email.update(req.params.id, req.body);
    if (atualizado === 0) return res.status(404).json({ error: 'Email não encontrado' });
    res.json({ message: 'Email atualizado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar email' });
  }
};

exports.remove = async (req, res) => {
  try {
    const deletado = await Email.delete(req.params.id);
    if (deletado === 0) return res.status(404).json({ error: 'Email não encontrado' });
    res.json({ message: 'Email deletado com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao deletar email' });
  }
};
