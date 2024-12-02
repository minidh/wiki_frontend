import './App.css';
import { useState } from 'react';
import { Route,Routes, useNavigate } from 'react-router-dom';
import WikiPage from './WikiPage';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handlekeyPress = (e) => {
    if (e.key === 'Enter') {
      console.log(searchQuery)
      navigate(`/wiki/${searchQuery}`)
    }
  };

  return (
    <div className='container'>
      <header>
        <h1>Restaurants Wiki</h1>
        <div className='search-container'>
          <div className='search-icon'>🔍</div>
          <input 
            type='text' 
            className='search-input' 
            placeholder='검색하기' 
            onChange={(e) => setSearchQuery(e.target.value)} 
            onKeyDown={handlekeyPress}
          ></input>
        </div>
      </header>
      <main>
      <Routes>
        <Route path='/wiki/:searchQuery' element={<WikiPage></WikiPage>}>+</Route>
      </Routes>
      </main>
    </div>
  )
};

export default App;
