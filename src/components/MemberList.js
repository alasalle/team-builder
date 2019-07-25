import React from 'react'
import MemberCard from './MemberCard'

const MemberList = ({members, editTrue}) => {
  return (
    <div>
      {members.map(member => <MemberCard member={member} editTrue={editTrue} />)}
    </div>
  )
}

export default MemberList