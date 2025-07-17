import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();
const port = 3001; // Porta onde o servidor Node.js vai rodar (diferente da porta do React)

app.use(cors()); 
app.use(express.json());

const dbConfig = {
  host: '192.168.0.2',
  user: 'root',
  password: 'marawiJF12',
  database: 'camara_municipal_site'
};

app.get('/api/livros', async (req, res) => {
  try {
    const connection = await mysql.createConnection(dbConfig);
    const sqlQuery = `
      SELECT 
        id, 
        \`AZ titulo\` AS titulo, 
        \`AZ autor\` AS autor, 
        \`AZ ano\` AS ano, 
        \`AZ categoria\` AS categoria, 
        sinopse, 
        paginas, 
        capa 
      FROM mdl_livro 
      WHERE \`AZ ativo\` = 'S'
    `;
    const [rows] = await connection.execute(sqlQuery);
    await connection.end();
    res.json(rows);

  } catch (error) {
    console.error('Erro ao conectar ou buscar no banco de dados:', error);
    res.status(500).json({ error: 'Falha ao buscar os livros no servidor.' });
  }
});
app.listen(port, () => {
  console.log(`🚀 Servidor Node.js rodando na porta ${port}`);
  console.log(`Acesse a API em http://localhost:${port}/api/livros`);
});