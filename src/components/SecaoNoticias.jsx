import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './SecaoNoticias.css';

const SecaoNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    const fetchNoticias = async () => {
      try {
        const response = await fetch('http://192.168.0.250:3001/api/noticiashome');
        if (!response.ok) {
          throw new Error('Falha na resposta da rede');
        }
        const data = await response.json();
        setNoticias(data.slice(0, 3)); 
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
          <Link key={noticia.id} to={`/noticias/${noticia.id}`} className="noticia-card-link">
            <div className="noticia-card">
              <img 
                src={'https://www.camarajf.mg.gov.br/www/conteudo/anexo/' + noticia.filename} 
                alt={noticia.titulo} 
                className="noticia-imagem" 
              />
              <div className="noticia-conteudo">
                <h3 className="noticia-titulo">{noticia.titulo}</h3>
                <p className="noticia-descricao">{noticia.subtitulo}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="botao-container">
        <Link to="/noticias" className="botao-mais-noticias">+ Notícias</Link>
      </div>
    </section>
  );
};

export default SecaoNoticias;
