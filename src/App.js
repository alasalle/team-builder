import React, { useState } from "react";

import Form from "./components/Form";
import MemberList from "./components/MemberList";

function App() {
  const [members, setMembers] = useState([
    { id: 1, name: "Angela", email: "angela@gmail.com", role: "TL" },
  ]);
  const [idCount, setIdCount] = useState(2);
  const [memberToEdit, switchEditMember] = useState();
  const [isEditing, setEdit] = useState(false);

  const addToMembers = member => {
    isEditing
      ? setMembers(member)
      : setMembers([...members, { ...member, id: idCount }]);
  };

  const editTrue = id => {
    setEdit(true);
    switchEditMember(id);
  };

  const editFalse = () => {
    setEdit(false);
    switchEditMember(null);
  };
  return (
    <div className="App">
      <Form
        members={members}
        addToMembers={addToMembers}
        idCount={idCount}
        setIdCount={setIdCount}
        memberToEdit={memberToEdit}
        isEditing={isEditing}
        editFalse={editFalse}
      />
      <MemberList members={members} editTrue={editTrue} />
    </div>
  );
}

export default App;
