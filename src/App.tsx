import { useState, useEffect, ChangeEvent } from 'react';

import { getData } from './utils/data.utils';

import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

export type Neko = {
  id: string;
  name: string;
  email: string;
}


const App = () => {

  console.log('render');

  const [searchField, setSearchField] = useState('');  //[value, setValue]//
  const [cats, setCats] = useState<Neko[]>([]);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.json())
    // .then((users) => setCats(users));

    const fetchUsers = async () => {
      const users = await getData<Neko[]>('https://jsonplaceholder.typicode.com/users');
      setCats(users);
    };
    fetchUsers();
  }, []);

  //EventValue
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  }

  // create the new array
  const filteredCat = cats.filter((cat) => {
    return cat.name.toLocaleLowerCase().includes(searchField);
  });

  return (
    <div className="App">
      <h1 className='app-title'>Neko Types</h1>
      <h3 className='app-sub-title'>Start Typing Friends</h3>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder='Search Friends'
        className='cats-search-box'
      />
      <Cardlist cats={filteredCat} />
    </div>
  );
};


export default App;
