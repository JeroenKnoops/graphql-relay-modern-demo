import React, { Component } from 'react';
import ListPage from './ListPage';

import logo from './logo.svg';
import './App.css';

import {
  QueryRenderer,
  graphql
} from 'react-relay'

import environment from './Environment'


const AppListPageQuery = graphql`
  query AppListPageQuery {
    persons {
      ...ListPageAllPersons
    }
  }
`

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
          <QueryRenderer
             environment={environment}
             query={AppListPageQuery}
             render={({error, props}) => {
        if (error) {
          return <div>{error.message}</div>
        } else if (props) {
          console.log(props)
          return <ListPage data={props.persons} />
        }
        return <div>Loading</div>
      }}
    />
      </div>
    );
  }
}

export default App
