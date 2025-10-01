import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './NoticiaDetalhePage.css';

const NoticiaDetalhePage = () => {
  const [noticia, setNoticia] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchNoticiaUnica = async () => {
      try {
        const response = await fetch(`http://192.168.0.250:3001/api/noticia/${id}`);
        if (!response.ok) {
          throw new Error('Falha ao buscar os detalhes da notícia');
        }
        const data = await response.json();
        setNoticia(data);
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchNoticiaUnica();
  }, [id]);

  if (!noticia) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="detalhe-noticia-container">
      <h1 className="detalhe-noticia-titulo">{noticia.titulo}</h1>
      <p className="detalhe-noticia-data">{new Date(noticia.data).toLocaleDateString('pt-BR')}</p>
      <img 
        src={`https://www.camarajf.mg.gov.br/www/conteudo/anexo/${noticia.filename}`} 
        alt={noticia.titulo}
        className="detalhe-noticia-imagem"
      />
      <div 
        className="detalhe-noticia-conteudo"
        dangerouslySetInnerHTML={{ __html: noticia.texto }}
      />
    </div>
  );
};

export default NoticiaDetalhePage;
