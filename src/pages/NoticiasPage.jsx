import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NoticiasPage.css';

const NoticiasPage = () => {
  const [noticias, setNoticias] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodasNoticias = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch('http://192.168.0.250:3001/api/noticias');
        if (!response.ok) {
          throw new Error(`Erro na rede: ${response.statusText}`);
        }
        const data = await response.json();
        setNoticias(data);
      } catch (error) {
        console.error("Erro ao buscar notícias:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTodasNoticias();
  }, []);

  if (loading) {
    return <div className="info-mensagem">A carregar notícias...</div>;
  }

  if (error) {
    return <div className="info-mensagem erro">Erro ao carregar notícias: {error}. Verifique se o servidor back-end está a funcionar e o endereço IP está correto.</div>;
  }

  return (
    <div className="noticias-page-container">
      <h1 className="noticias-page-titulo">Todas as Notícias</h1>
      <div className="noticias-lista">
        {noticias.length > 0 ? (
          noticias.map(noticia => (
            <Link key={noticia.id} to={`/noticias/${noticia.id}`} className="noticia-item-lista">
              <img 
                src={`https://www.camarajf.mg.gov.br/www/conteudo/anexo/${noticia.filename}`} 
                alt={noticia.titulo}
                className="noticia-item-imagem"
              />
              <div className="noticia-item-conteudo">
                <p className="noticia-item-data">{new Date(noticia.data).toLocaleDateString('pt-BR')}</p>
                <h2 className="noticia-item-titulo">{noticia.titulo}</h2>
                <p className="noticia-item-resumo">{noticia.subtitulo}</p>
              </div>
            </Link>
          ))
        ) : (
          <div className="info-mensagem">Nenhuma notícia encontrada.</div>
        )}
      </div>
    </div>
  );
};

export default NoticiasPage;

