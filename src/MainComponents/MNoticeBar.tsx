import React, {Fragment} from 'react'
import '../App.css'
import '../index.css'
import '../style/style.css'
import { Affix, Typography, Button, Badge } from 'antd';

const MNoticeBar: React.FC = () => {

  const { Text } = Typography;

  return (
    <div className="NoticeBar">
      <div className='notice-ani-bg'/>
      {/*<Progress percent={100} status="active" strokeColor={{from: '#2C3340',*/}
      {/* to: '#2C3340',}} showInfo={false} className='noticeBg' strokeWidth={42}/>*/}
      <Affix offsetTop={0} onChange={affixed => console.log(affixed)}>
        <div className="notice-bar-icon"/>
      </Affix>
      <Text
        ellipsis
        style={{
          margin:'10px 50px 0 10px',
          color:'#fff',
          fontSize:'12px',
          zIndex:'1',
        }}
      >
        '꼴지 탈출+리그 첫 승'맨유, 리버풀 2-1 격파 '래시포드 ,'꼴지 탈출+리그 첫 승'맨유, 리버풀 2-1 격파 '래시포드
      </Text>
    </div>
  )
}

export default MNoticeBar