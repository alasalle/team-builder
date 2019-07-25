import React from "react";

const MemberCard = ({member, editTrue}) => {
  return (
    <div>
      <h3>{member.name}</h3>
      <p>email: {member.email}</p>
      <p>role: {member.role}</p>
      <p>id: {member.id}</p>
      <button onClick={() => editTrue(member.id)}>Edit</button>
    </div>
  );
};

export default MemberCard;
