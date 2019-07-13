import React from 'react';

const NotFound = (match) => {
    console.log(match)
    return (
        <div>
            {match.location.pathname} is not found!
        </div>
    )
}

export default NotFound;