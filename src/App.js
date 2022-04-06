import { useState, useEffect } from 'react';

import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


const App = () => {

  console.log('render');

  const [searchField, setSearchField] = useState('');  //[value, setValue]//
  const [cats, setCats] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setCats(users));
  }, []);

  //EventValue
  const onSearchChange = (event) => {
      const searchFieldString = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
  }

  // create the new array
  const filteredCat = cats.filter((cat) => {
    return cat.name.toLocaleLowerCase().includes(searchField);
  });

  return(
    <div className="App">
        <h1 className='app-title'>Neko Directory</h1>

        <SearchBox 
          onChangeHandler = { onSearchChange } 
          placeholder='Search Friends' 
          className='cats-search-box'
        />
        <Cardlist cats = { filteredCat } />
      </div>
  );
};


export default App;
