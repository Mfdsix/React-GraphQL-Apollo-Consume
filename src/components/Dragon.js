import React, { Fragment } from 'react'
import { Query, useQuery, gql } from '@apollo/client'
import { render } from '@testing-library/react'

const DRAGON_QUERY = gql`
query DragonQuery {
    dragons{
        id
        name
        description
    }
}
`

function Dragon(){
    const { loading, error, data } = useQuery(DRAGON_QUERY)
    
    if(loading) return <h4>Calling My Dragons ...</h4>
    if(error) return <h4>Hmm... Looks Like My Dragons Can't Come Now ...</h4>
    if(data){
        if(data.dragons.length == 0){
            return <h4>No Dragons Found ...</h4>
        }else{
            return data.dragons.map(v => (
                <div style={{ border: "1px solid #ddd", padding: "20px", marginBottom: "10px", textAlign: "left", borderRadius: "10px" }}>
                    <b>Dragon Name</b>
                    <p>{ v.name }</p>
                    <b>Description</b>
                    <p>{ v.description }</p>
                </div>
            ))
        }
    }
}
    
export default Dragon