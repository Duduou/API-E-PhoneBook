const pool = require('./src/config/db');

async function initDatabase() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS Usuario (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      senha_hash VARCHAR(255) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Estabelecimento (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL,
      descricao TEXT,
      endereco VARCHAR(255),
      longitude VARCHAR(100),
      latitude VARCHAR(100),
      whatsapp VARCHAR(20),
      facebook VARCHAR(255),
      instagram VARCHAR(255)
    );

    CREATE TABLE IF NOT EXISTS Categoria (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Tag (
      id INT AUTO_INCREMENT PRIMARY KEY,
      nome VARCHAR(100) NOT NULL
    );

    CREATE TABLE IF NOT EXISTS Estabelecimento_Categoria (
      estabelecimento_id INT,
      categoria_id INT,
      PRIMARY KEY (estabelecimento_id, categoria_id),
      FOREIGN KEY (estabelecimento_id) REFERENCES Estabelecimento(id) ON DELETE CASCADE,
      FOREIGN KEY (categoria_id) REFERENCES Categoria(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS Estabelecimento_Tag (
      estabelecimento_id INT,
      tag_id INT,
      PRIMARY KEY (estabelecimento_id, tag_id),
      FOREIGN KEY (estabelecimento_id) REFERENCES Estabelecimento(id) ON DELETE CASCADE,
      FOREIGN KEY (tag_id) REFERENCES Tag(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS Categoria_Tag (
      categoria_id INT,
      tag_id INT,
      PRIMARY KEY (categoria_id, tag_id),
      FOREIGN KEY (categoria_id) REFERENCES Categoria(id) ON DELETE CASCADE,
      FOREIGN KEY (tag_id) REFERENCES Tag(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS Telefone (
      id INT AUTO_INCREMENT PRIMARY KEY,
      estabelecimento_id INT,
      numero VARCHAR(20) NOT NULL,
      FOREIGN KEY (estabelecimento_id) REFERENCES Estabelecimento(id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS Email (
      id INT AUTO_INCREMENT PRIMARY KEY,
      estabelecimento_id INT,
      email VARCHAR(100) NOT NULL,
      FOREIGN KEY (estabelecimento_id) REFERENCES Estabelecimento(id) ON DELETE CASCADE
    );
  `);

  console.log("Banco de dados inicializado!");
  process.exit();
}

initDatabase().catch((err) => {
  console.error("Erro ao inicializar o banco:", err);
  process.exit(1);
});
