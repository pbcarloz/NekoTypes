import { Component } from 'react';
import Cardlist from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';


class App extends Component {

  constructor () {
    super();

    this.state = {
      cats: [],
      searchField: ''
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
          return { cats: users };
          }, 
          () => {
          console.log(this.state)
          }
        )
      );
  }

  // to avoid annonimous functions
  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
    
  }

  render () {
    console.log('render');

// destructuring 
    const { cats, searchField } = this.state;
    const { onSearchChange } = this;

// create the new array
    const filteredCat = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchField);
    });
    
    return (
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
  }
}


export default App;
