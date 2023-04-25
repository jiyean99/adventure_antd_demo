import React, {Fragment} from 'react'
import '../App.css'
import '../index.css'
import '../style/style.css'
import { Badge, Button, Typography } from 'antd';

const { Text } = Typography;

const MClubNotice: React.FC = () => {

  return (
    <div className="ClubNotice">
      <div>
        <div>
          <Text className="c-n-text">국가대표 365일</Text>
        </div>
        <div className="c-n-e-button">
          이벤트<span className="c-n-e-badge"></span>
        </div>
        <div className="c-n-m-button"/>
      </div>
    </div>
  )
}

export default MClubNotice