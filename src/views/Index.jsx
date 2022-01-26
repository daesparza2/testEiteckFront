import { useEffect, useState } from 'react'
import { CardCharacter } from '../components/CardCharacter';
import { getCharacters, searchCharacter } from '../services/CharacterService';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from 'react-paginate';
import paginator from '../css/Paginator.module.css';


  const MAXPAGENUM = 8;
export const Index = () => {

  const [valueSearch, setValueSearch] = useState('');

  const [characters, setCharacters] = useState([]);
  

  const submitvalueSearch = (e) => {
    e.preventDefault();
    searchCharacter(valueSearch).then(({ results }) => {
      setCharacters(results);
    });
  };

  useEffect(() => {

    getCharacters().then(({ results }) => {
      setCharacters(results);
    });

  }, []);

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
  
    if(characters){
      const endOffset = itemOffset + MAXPAGENUM;
      setCurrentItems(characters.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(characters.length / MAXPAGENUM));
    }
    
  }, [itemOffset,characters]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * MAXPAGENUM) % characters.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="App" >
      <header>
        <form onSubmit={submitvalueSearch}>
          <input placeholder='Search' value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} />
        </form>
      </header>
      
      <main>
        <section>
          <div >
            <ul className="modeGrid">
              {currentItems.map(value => {
                return <CardCharacter key={value.id} character={value} />
              })}
            </ul>
          </div>
          <div className={paginator.center}>
          <ReactPaginate
            className={paginator.Paginator}
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={8}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
          />
          </div>
        </section>
      </main>

    </div>
  )
};
