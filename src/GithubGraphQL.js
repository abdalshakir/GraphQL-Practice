import { useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com',
    headers: {
        Authorization: `bearer ${process.env.REACT_APP_GITHUB_ACCESS_TOKEN}`    // Access Token
    }
})

function GithubGraphQL() {
    const fetchData_gql =  async (organizationName) => {
         
        const QUERY_ORGANIZATION = `query queryOrganization($organizationName: String!){
            organization(login: $organizationName) {
                name
                description
            }
        }`;
        const res = await api.post('/graphql', {
            query: QUERY_ORGANIZATION,
            variables: {
                organizationName
            }
        });
        console.log('GraphQL Response: ', res)
    }

    useEffect(() => {
        fetchData_gql("qutbiTech")
    }, [])
    
    return (
        <div>
        </div>
    )
}

export default GithubGraphQL;