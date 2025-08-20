import React, { useState, useEffect } from 'react';
import './SecaoNoticias.css';

const noticiasDeExemplo = [
  { id: 1, imagemUrl: 'https://placehold.co/600x400/333/FFF?text=Notícia+1', titulo: 'Agora é Lei - Carnaval de Juiz de Fora terá pontos de apoio para combate ao assédio e aos abusos', descricao: 'A partir de agora, os eventos de Carnaval, em Juiz de Fora, vão contar com pontos de apoio para combate ao assédio, abusos, discriminação e preconceito.'},
  { id: 2, imagemUrl: 'https://placehold.co/600x400/555/FFF?text=Notícia+2', titulo: 'Agora é Lei - Carnaval de Juiz de Fora terá pontos de apoio para combate ao assédio e aos abusos', descricao: 'A partir de agora, os eventos de Carnaval, em Juiz de Fora, vão contar com pontos de apoio para combate ao assédio, abusos, discriminação e preconceito.'},
  { id: 3, imagemUrl: 'https://placehold.co/600x400/777/FFF?text=Notícia+3', titulo: 'Agora é Lei - Carnaval de Juiz de Fora terá pontos de apoio para combate ao assédio e aos abusos', descricao: 'A partir de agora, os eventos de Carnaval, em Juiz de Fora, vão contar com pontos de apoio para combate ao assédio, abusos, discriminação e preconceito.'},
];

const SecaoNoticias = () => {
  const [noticias, setNoticias] = useState([]);

  useEffect(() => {
    setNoticias(noticiasDeExemplo);
  }, []);

  return (
    <section className="secao-noticias-container">
      <div className="noticias-grid">
        {noticias.map(noticia => (
          <div key={noticia.id} className="noticia-card">
            <img src={noticia.imagemUrl} alt={noticia.titulo} className="noticia-imagem" />
            <div className="noticia-conteudo">
              <h3 className="noticia-titulo">{noticia.titulo}</h3>
              <p className="noticia-descricao">{noticia.descricao}</p>
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
