import express from 'express';
import mysql from 'mysql2/promise';
import cors from 'cors';

const app = express();

app.use(cors());

const dbConfig = {
  host: '192.168.0.2',
  user: 'root',
  password: 'marawiJF12',
  database: 'camara_municipal_site'
};

app.get('/api/livros', async (req, res) => {
  try {

    const connection = await mysql.createConnection(dbConfig);
    

    const sql = `
      SELECT 
        id,
        titulo,
        autor,
        ano,
        categoria,
        sinopse,
        paginas,
        ativo,
        CONCAT('https://www.camarajf.mg.gov.br/www/conteudo/livro/', capa) AS capa,
        CONCAT('https://www.camarajf.mg.gov.br/www/conteudo/livro/', livro) AS urlPdf
      FROM 
        mdl_livro 
      WHERE 
        ativo = 's'`;


    const [rows] = await connection.execute(sql);
    

    await connection.end();


    res.json(rows);

  } catch (error) {

    console.error('Erro ao buscar dados do banco:', error);
    res.status(500).json({ message: 'Erro interno no servidor' });
  }
});


const PORT = 3001; 
app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta http://localhost:${PORT}`);
});