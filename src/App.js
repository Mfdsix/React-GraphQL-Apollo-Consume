import logo from './logo.png'
import './App.css'
import Dragon from './components/Dragon'
import { ApolloProvider } from '@apollo/client'
import client from './client/dragon'

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="dragon logo" />
        </header>

        <div style={{ padding: "50px" }}>
          <Dragon/>
        </div>
      </div>
    </ApolloProvider>
    );
  }
  
  export default App;
  