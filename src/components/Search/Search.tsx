import React, {FC} from 'react';


const Search: FC = () => {

    return (
        <div>
            <input type='text' placeholder='Search a movie here'/>
            <button>Search</button>
        </div>
    );
};

export {
    Search
};