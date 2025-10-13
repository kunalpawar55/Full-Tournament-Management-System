import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function MyMatches() {
    const [showdata, setdata] = useState([]);
const userData = JSON.parse(localStorage.getItem('user'));
const email = userData?.email;

    useEffect(() => {
        if (email) {
            axios.get(`http://localhost:8080/mymatches?email=${email}`)
                .then((res) => {
                    setdata(res.data);
                })
                .catch(err => console.log(err));
        }
    }, [email]);

    return (
        <div>
            <h1>Hello</h1>
            {showdata.length > 0 ? (
                showdata.map((item) => (
                    <div key={item.id}>
                        <h2>ID: {item.id}</h2>
                        <p>Tournament: {item.tournamentName}</p>
                    </div>
                ))
            ) : (
                <p>No matches found</p>
            )}
        </div>
    );
}
