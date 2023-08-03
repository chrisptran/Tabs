import React, {useState} from 'react'
import Tab from '../components/Tab'
import Content from '../components/Content'

const TabContent = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (tabIdx) => {
        setSelectedTab(tabIdx);
    };

    return (
        <div>
            <Tab onTabClick={handleTabClick}/>
            <Content selectedTab={selectedTab}/>
        </div>
    )
}

export default TabContent