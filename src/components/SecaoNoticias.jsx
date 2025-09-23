import React, { useState, useEffect } from 'react';
import './SecaoNoticias.css';

const SecaoNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('http://192.168.0.250:3001/api/noticias');
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
      }
    };

    fetchNoticias();
  }, []);

  return (
    <section className="secao-noticias-container">
      <div className="noticias-grid">
        {noticias.map(noticia => (
          <div key={noticia.id} className="noticia-card">
            <img src={'https://www.camarajf.mg.gov.br/www/conteudo/anexo/' + noticia.filename} alt={noticia.titulo} className="noticia-imagem" />
            <div className="noticia-conteudo">
              <h3 className="noticia-titulo">{noticia.titulo}</h3>
              <p className="noticia-descricao">{noticia.subtitulo}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="botao-container">
        <button className="botao-mais-noticias">+ Notícias</button>
      </div>
    </section>
  );
};

export default SecaoNoticias;