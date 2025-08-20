import React, { useState, useEffect } from 'react';
import CardLivro from '../components/CardLivro';
import ModalLivro from '../components/ModalLivro';
import SecaoNoticias from '../components/SecaoNoticias';

const HomePage = ({ termoBusca, categoriaSelecionada }) => {
  const [livros, setLivros] = useState([]);
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/livros'); 
        const data = await response.json();
        setLivros(data);
      } catch (error) {
        console.error("Erro ao buscar livros:", error);
      }
    };
    fetchLivros();
  }, []);

  const livrosFiltrados = livros
    .filter(livro => !categoriaSelecionada || livro.categoria === categoriaSelecionada)
    .filter(livro =>
      livro.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      livro.autor.toLowerCase().includes(termoBusca.toLowerCase())
    );

  return (
    <>
      <SecaoNoticias />

      <div className="section-header">
        <h1>Publicações</h1>
        <p>Explore nossa coleção de livros gratuitos.</p>
      </div>
      <div className="book-list-container">
        {livrosFiltrados.length > 0 ? (
          livrosFiltrados.map((livro) => (
            <CardLivro
              key={livro.id}
              livro={livro}
              onCardClick={() => setLivroSelecionado(livro)}
            />
          ))
        ) : (
          <p className="no-results-message">Nenhum livro encontrado.</p>
        )}
      </div>

      {livroSelecionado && (
        <ModalLivro 
          livro={livroSelecionado} 
          onClose={() => setLivroSelecionado(null)} 
        />
      )}
    </>
  );
};

export default HomePage;
