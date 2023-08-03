import React from 'react'

const Content = (props) => {

const tabContents = [
    'Tab 1 Content info',
    'Tab 2 Content info',
    'Tab 3 Content info'
]
    return (
        <div className='contentContainer'>
            {
                tabContents[props.selectedTab]
        }
        </div>
    )
}

export default Content