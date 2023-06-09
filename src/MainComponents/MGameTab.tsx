import React, {Fragment} from 'react'
import '../App.css'
import '../index.css'
import '../style/style.css'
import { Tabs, Radio, Button  } from 'antd';
import MBanner from './Mbanner'
import MDivideBoard from './MDivideBoard'


const MGameTab: React.FC = () => {

  const { TabPane } = Tabs;

  return (
    <div className="MGameTab">
      <div className="MSticky">
        <Tabs type="card">
          <TabPane tab="전체" key="1">
            {/*contents*/}
          </TabPane>
          <TabPane tab="축구" key="2">
            {/*S-contents*/}
          </TabPane>
          <TabPane tab="농구" key="3">
            {/*B-contents*/}
          </TabPane>
          <TabPane tab="야구" key="4">
            {/*B-contents*/}
          </TabPane>
          <TabPane tab="배구" key="5">
            {/*V-contents*/}
          </TabPane>
          <TabPane tab="아이스하키" key="6">
            {/*I-contents*/}
          </TabPane>
          <TabPane tab="기타" key="7">
            {/*act-contents*/}
          </TabPane>
        </Tabs>
      </div>
      <div className='p-t-box'>
        <Radio.Group buttonStyle="solid" defaultValue="all" className='match-btn-group'>
          <Radio.Button value="all" className='match-all-btn'>
            <span>전체</span><span className='match-all-btn-num'>52</span>
          </Radio.Button>
          <Radio.Button value="major" className='match-major-btn'>
            <span>주요</span><span className='match-all-btn-num'>52</span>
          </Radio.Button>
          <Radio.Button value="fav" className='match-fav-btn'>
            {/* <span className='matcn-fav-icon'></span> */}
            <svg width={14} height={14} fill='red'>
              <g id="그룹_6920" data-name="그룹 6920" transform="translate(-5257 -9383)"><rect id="사각형_6593" data-name="사각형 6593" width="14" height="14" transform="translate(5257 9383)" fill="red" opacity="0"></rect><path id="star" className="fill" d="M137.134,176.908a.885.885,0,0,0-.457-.124.863.863,0,0,0-.445.124.959.959,0,0,0-.309.346l-1.285,2.608a.3.3,0,0,1-.111.136.548.548,0,0,1-.173.074l-2.865.408a.836.836,0,0,0-.432.2.779.779,0,0,0-.259.383.83.83,0,0,0-.012.47.886.886,0,0,0,.235.408l2.075,2.015a.437.437,0,0,1,.086.161.252.252,0,0,1,.012.173l-.482,2.855a.905.905,0,0,0,.049.47.835.835,0,0,0,.284.371.935.935,0,0,0,.445.161.9.9,0,0,0,.457-.1L136.5,186.7a.346.346,0,0,1,.173-.049.3.3,0,0,1,.173.049l2.569,1.347a.827.827,0,0,0,.4.1.879.879,0,0,0,.506-.161.835.835,0,0,0,.284-.371.9.9,0,0,0,.049-.47l-.494-2.855a.412.412,0,0,1,.012-.173.651.651,0,0,1,.1-.161l2.075-2.015a.887.887,0,0,0,.235-.408.766.766,0,0,0-.025-.47.779.779,0,0,0-.259-.383.828.828,0,0,0-.42-.2l-2.865-.408a.548.548,0,0,1-.173-.074.3.3,0,0,1-.111-.136l-1.285-2.608a.958.958,0,0,0-.309-.346" transform="translate(5127.318 9207.535)" fill="rgba(238, 238, 238,0.7)"></path></g>
            </svg>
            <span className='match-fav-btn-num'>3</span>
          </Radio.Button>
        </Radio.Group>
        <Button shape='circle'className="panel-tab-btn" style={{ minWidth:'30px',height:'30px'}}/>
      </div>
      <MBanner />
      <div style={{ paddingBottom: "calc(40% + 9px)"}}/>
      <MDivideBoard />
      <MDivideBoard />
      <MDivideBoard />
      <MDivideBoard />

    </div>
  )
}

export default MGameTab