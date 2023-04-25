import React, {Fragment} from 'react'
import '../App.css'
import '../index.css'
import '../style/style.css'

const MHeader: React.FC = () => {

  return (
    <div className="MHeader">
      <div>
        <a href="#" className='headerLogo' />
        <a href="#" className='headerProfile'/>
      </div>
    </div>
  )
}

export default MHeader