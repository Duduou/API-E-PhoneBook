const EstabelecimentoTag = require('../models/estabelecimentoTagModel');

exports.listTags = async (req, res) => {
  try {
    const tags = await EstabelecimentoTag.findAllByEstabelecimento(req.params.estabelecimento_id);
    res.json(tags);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao listar tags do estabelecimento' });
  }
};

exports.addTag = async (req, res) => {
  try {
    const { estabelecimento_id, tag_id } = req.body;
    const affectedRows = await EstabelecimentoTag.add(estabelecimento_id, tag_id);
    if (affectedRows === 0) return res.status(400).json({ error: 'Não foi possível adicionar a tag' });
    res.status(201).json({ message: 'Tag adicionada ao estabelecimento com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar tag ao estabelecimento' });
  }
};

exports.removeTag = async (req, res) => {
  try {
    const { estabelecimento_id, tag_id } = req.body;
    const affectedRows = await EstabelecimentoTag.remove(estabelecimento_id, tag_id);
    if (affectedRows === 0) return res.status(404).json({ error: 'Relação não encontrada' });
    res.json({ message: 'Tag removida do estabelecimento com sucesso' });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao remover tag do estabelecimento' });
  }
};
