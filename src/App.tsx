import React, {Fragment} from 'react'
import './App.css'
import './index.css'
import MHeader from './MainComponents/MHeader'
import MNoticeBar from './MainComponents/MNoticeBar'
import MClubNotice from './MainComponents/MClubNotice'
import MMatchTab from './MainComponents/MMatchTab'
import MBottomBar from './MainComponents/MBottomBar'


const App: React.FC = () => {

    return (
        <Fragment>
            <MHeader />
            <MNoticeBar />
            <MClubNotice />
            <MMatchTab />
            <MBottomBar />
        </Fragment>
    )
}

export default App