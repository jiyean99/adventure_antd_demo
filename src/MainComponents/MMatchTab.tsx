import React, {Fragment} from 'react'
import '../App.css'
import '../index.css'
import '../style/style.css'
import { Tabs } from 'antd';
import MGameTab from './MGameTab'

const { TabPane } = Tabs;

const MMatchTab: React.FC = () => {

  return (
    <div className="MMatchTab">
      <Tabs type="card" className="match-tab-list">
        <TabPane tab="스포츠" key="1">
          <MGameTab />
        </TabPane>
        <TabPane tab="라이브" key="2">
          <MGameTab />
        </TabPane>
      </Tabs>
    </div>
  )
}

export default MMatchTab