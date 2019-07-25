import React from "react";
import MemberCard from "./MemberCard";
import { CardDeck } from "reactstrap";

const MemberList = ({ members, editTrue }) => {
  return (
    <CardDeck>
      {members.map(member => (
        <MemberCard key={member.id} member={member} editTrue={editTrue} />
      ))}
    </CardDeck>
  );
};

export default MemberList;
