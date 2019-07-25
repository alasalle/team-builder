import React, { useState } from "react";

import MemberForm from "./components/Form";
import MemberList from "./components/MemberList";

import { Container } from "reactstrap";

function App() {
  const [members, setMembers] = useState([
    { id: 1, name: "Angela", email: "angela@gmail.com", role: "TL" }
  ]);
  const [idCount, setIdCount] = useState(2);
  const [memberToEdit, switchEditMember] = useState();
  const [isEditing, setEdit] = useState(false);
  const [isToggled, setCollapseToggle] = useState(false);

  const addToMembers = member => {
    isEditing
      ? setMembers(member)
      : setMembers([...members, { ...member, id: idCount }]);
  };

  const editTrue = id => {
    setEdit(true);
    switchEditMember(id);
    setCollapseToggle(true);
  };

  const editFalse = () => {
    setEdit(false);
    switchEditMember(null);
  };

  return (
    <div className="App">
      <Container>
        <MemberForm
          members={members}
          addToMembers={addToMembers}
          idCount={idCount}
          setIdCount={setIdCount}
          memberToEdit={memberToEdit}
          isEditing={isEditing}
          editFalse={editFalse}
          isToggled={isToggled}
          setCollapseToggle={setCollapseToggle}
        />
        <MemberList members={members} editTrue={editTrue} />
      </Container>
    </div>
  );
}

export default App;
