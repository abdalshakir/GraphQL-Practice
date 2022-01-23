import { useState, useEffect } from 'react';
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com'
});

function GithubAPI() {
    const [userData, setUserData] = useState(null);
    const [userRepos, setUserRepos] = useState(null);

    useEffect(() => {
        (async () => {
            const user = await api.get('/users/abdalshakir');
            setUserData(user.data);

            const repo = await api.get('/users/abdalshakir/repos');
            setUserRepos(repo.data);
        })()
    }, [])
    return (
        <div>
            User Data
            <pre>
                {userData && JSON.stringify(userData, null, 4)}
            </pre>
            <hr />
            User repos
            <pre>
                {userRepos && JSON.stringify(userRepos, null, 4)}
            </pre>
        </div>
    )
};

export default GithubAPI;