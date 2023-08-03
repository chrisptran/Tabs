import React from 'react'

const Tab = (props) => {

    const handleTabClick = (tabIdx) => {
        props.onTabClick(tabIdx);
    };

    return (
        <div className='tabs'>
            <button onClick={() => handleTabClick(0)}>Tab 1</button>
            <button onClick={() => handleTabClick(1)}>Tab 2</button>
            <button onClick={() => handleTabClick(2)}>Tab 3</button>
        </div>
    )
}

export default Tab