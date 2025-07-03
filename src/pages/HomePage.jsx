import React, { useState } from 'react';
import CardLivro from '../components/CardLivro';
import ModalLivro from '../components/ModalLivro';

const listaDeLivros = [
  { id: 1, titulo: 'Dom Casmurro', autor: 'Machado de Assis', avaliacao: 5, categoria: 'Clássico', imagemCapa: '/images/domcasmurro-capa.jpg', urlPdf: 'http://www.dominiopublico.gov.br/download/texto/bv00180a.pdf', ano: 1899, paginas: 256, sinopse: 'Uma das obras-primas de Machado de Assis, narrada pelo protagonista Bentinho, que conta a história de seu amor por Capitu e o ciúme que o consome, levantando a famosa dúvida sobre a traição.' },
  { id: 2, titulo: 'Iracema', autor: 'José de Alencar', avaliacao: 4, categoria: 'Clássico', imagemCapa: '/images/josedealencar-capa.jpg', urlPdf: '#', ano: 1865, paginas: 150, sinopse: 'Um romance que retrata o amor entre a "virgem dos lábios de mel", Iracema, e o guerreiro branco Martim, simbolizando a origem do povo cearense e brasileiro.' },
  { id: 3, titulo: 'O Alquimista', autor: 'Paulo Coelho', avaliacao: 5, categoria: 'Ficção', imagemCapa: '/images/paulocoelho-capa.jpg', urlPdf: '#', ano: 1988, paginas: 208, sinopse: 'A história de Santiago, um pastor andaluz que viaja em busca de um tesouro, mas acaba encontrando a si mesmo e aprendendo sobre a importância de seguir seus sonhos.' },
  { id: 4, titulo: 'A Descoberta do Mundo', autor: 'Clarice Lispector', avaliacao: 4, categoria: 'Ficção', imagemCapa: '/images/claricelispector-capa.jpg', urlPdf: '#', ano: 1984, paginas: 464, sinopse: 'Uma coletânea de crônicas publicadas no Jornal do Brasil, onde a autora reflete sobre o cotidiano, a vida, a morte e a condição humana com sua escrita introspectiva única.' },
  { id: 5, titulo: 'O Pequeno Príncipe', autor: 'Antoine De Saint-Exupéry', avaliacao: 5, categoria: 'Aventura', imagemCapa: '/images/antoinedesaint-capa.jpg', urlPdf: '#', ano: 1943, paginas: 96, sinopse: 'Um piloto cai com seu avião no deserto e ali encontra uma criança, o Pequeno Príncipe, que o leva a uma jornada filosófica sobre a vida, o amor e a perda.' },
  { id: 6, titulo: 'Livro 6', autor: 'Autor 6', avaliacao: 5, categoria: 'Romance', imagemCapa: 'https://placehold.co/300x400/F1C40F/000?text=Livro%206', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 6.' },
  { id: 7, titulo: 'Livro 7', autor: 'Autor 7', avaliacao: 4, categoria: 'Aventura', imagemCapa: 'https://placehold.co/300x400/E67E22/FFF?text=Livro%207', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 7.' },
  { id: 8, titulo: 'Livro 8', autor: 'Autor 8', avaliacao: 5, categoria: 'Romance', imagemCapa: 'https://placehold.co/300x400/9B59B6/FFF?text=Livro%208', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 8.' },
  { id: 9, titulo: 'Livro 9', autor: 'Autor 9', avaliacao: 3, categoria: 'Ficção', imagemCapa: 'https://placehold.co/300x400/1ABC9C/FFF?text=Livro%209', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 9.' },
  { id: 10, titulo: 'Livro 10', autor: 'Autor 10', avaliacao: 4, categoria: 'Clássico', imagemCapa: 'https://placehold.co/300x400/34495E/FFF?text=Livro%2010', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 10.' },
  { id: 11, titulo: 'Livro 11', autor: 'Autor 11', avaliacao: 5, categoria: 'Aventura', imagemCapa: 'https://placehold.co/300x400/D35400/FFF?text=Livro%2011', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 11.' },
  { id: 12, titulo: 'Livro 12', autor: 'Autor 12', avaliacao: 4, categoria: 'Romance', imagemCapa: 'https://placehold.co/300x400/C0392B/FFF?text=Livro%2012', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 12.' },
  { id: 13, titulo: 'Livro 13', autor: 'Autor 13', avaliacao: 5, categoria: 'Ficção', imagemCapa: 'https://placehold.co/300x400/8E44AD/FFF?text=Livro%2013', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 13.' },
  { id: 14, titulo: 'Livro 14', autor: 'Autor 14', avaliacao: 3, categoria: 'Clássico', imagemCapa: 'https://placehold.co/300x400/2980B9/FFF?text=Livro%2014', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 14.' },
  { id: 15, titulo: 'Livro 15', autor: 'Autor 15', avaliacao: 4, categoria: 'Aventura', imagemCapa: 'https://placehold.co/300x400/27AE60/FFF?text=Livro%2015', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 15.' },
  { id: 16, titulo: 'Livro 16', autor: 'Autor 16', avaliacao: 5, categoria: 'Romance', imagemCapa: 'https://placehold.co/300x400/F39C12/000?text=Livro%2016', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 16.' },
  { id: 17, titulo: 'Livro 17', autor: 'Autor 17', avaliacao: 4, categoria: 'Ficção', imagemCapa: 'https://placehold.co/300x400/D2D2D2/000?text=Livro%2017', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 17.' },
  { id: 18, titulo: 'Livro 18', autor: 'Autor 18', avaliacao: 5, categoria: 'Clássico', imagemCapa: 'https://placehold.co/300x400/7F8C8D/FFF?text=Livro%2018', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 18.' },
  { id: 19, titulo: 'Livro 19', autor: 'Autor 19', avaliacao: 3, categoria: 'Aventura', imagemCapa: 'https://placehold.co/300x400/16A085/FFF?text=Livro%2019', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 19.' },
  { id: 20, titulo: 'Livro 20', autor: 'Autor 20', avaliacao: 4, categoria: 'Romance', imagemCapa: 'https://placehold.co/300x400/5438dc/FFF?text=Livro%2020', urlPdf: '#', ano: 2023, paginas: 300, sinopse: 'Sinopse do Livro 20.' },
];

const HomePage = ({ termoBusca, categoriaSelecionada }) => {
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  const livrosFiltrados = listaDeLivros
    .filter(livro => !categoriaSelecionada || livro.categoria === categoriaSelecionada)
    .filter(livro =>
      livro.titulo.toLowerCase().includes(termoBusca.toLowerCase()) ||
      livro.autor.toLowerCase().includes(termoBusca.toLowerCase())
    );

  return (
    <>
      <div className="section-header">
        <h1>Novidades</h1>
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
