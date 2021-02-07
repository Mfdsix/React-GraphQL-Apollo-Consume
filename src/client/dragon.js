import { ApolloClient, InMemoryCache } from '@apollo/client'

const dragon = new ApolloClient({
    uri: 'http://localhost:5000/dragons',
    cache: new InMemoryCache(),
})

export default dragon