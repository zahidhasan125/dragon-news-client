import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://my-dragon-news-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (

        <div>
            <h4>All Category: {categories.length}</h4>
            <div>
                {
                    categories.map(category => <p key={category.id}>
                        <Link to={`/category/${category.id}`}>{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNav;