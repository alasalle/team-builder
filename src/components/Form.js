import React, { useState, useEffect } from "react";
import {
  Container,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Collapse,
  ButtonGroup
} from "reactstrap";

const MemberForm = ({
  members,
  addToMembers,
  idCount,
  setIdCount,
  memberToEdit,
  isEditing,
  editFalse,
  isToggled,
  setCollapseToggle
}) => {
  const [member, setMember] = useState({ name: "", email: "", role: "" });
  const [dropDownOpen, toggleDropDown] = useState(false);

  const tog = () => {
    toggleDropDown(dropDownOpen ? !dropDownOpen : true);
  };
  const inputHandler = event => {
    setMember({ ...member, [event.target.name]: event.target.value });
  };

  const submitHandler = event => {
    event.preventDefault();
    addToMembers(member);
    setIdCount(idCount + 1);
    setMember({ name: "", email: "", role: "" });
    tog();
  };

  const editHandler = event => {
    event.preventDefault();
    let copy = members;
    let i = member.id - 1;
    copy.splice(i, 1, member);
    addToMembers(copy);
    setMember({ name: "", email: "", role: "" });
    editFalse();
    tog();
  };

  const clear = () => {
    setMember({ name: "", email: "", role: "" });
    editFalse();
  };

  useEffect(() => {
    if (isEditing) {
      const member2Edit = members.filter(
        member => member.id === memberToEdit
      )[0];
      setMember(member2Edit);
    }
  }, [isEditing, members, memberToEdit]);

  useEffect(() => {
    isToggled ? toggleDropDown(true) : toggleDropDown(false);
  }, [isToggled]);
  return (
    <div>
      <Button
        onClick={tog}
        size="lg"
        block
        color="primary"
        style={{ marginBottom: "1rem" }}
      >
        Add/Edit Member
      </Button>
      <Collapse isOpen={dropDownOpen}>
        <Container>
          <Col sm={{ size: 4, offset: 4 }}>
            <Form
              onSubmit={isEditing ? editHandler : submitHandler}
              style={{ marginBottom: "2rem" }}
            >
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  name="name"
                  type="text"
                  placeholder="name"
                  value={member.name}
                  onChange={inputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  name="email"
                  type="email"
                  placeholder="email"
                  value={member.email}
                  onChange={inputHandler}
                />
              </FormGroup>
              <FormGroup>
                <Label for="role">Role</Label>
                <Input
                  name="role"
                  type="text"
                  placeholder="role"
                  value={member.role}
                  onChange={inputHandler}
                />
              </FormGroup>
              <ButtonGroup>
                <Button type="submit" color="success">
                  Submit
                </Button>
                <Button type="button" color="warning" onClick={clear}>
                  Clear
                </Button>
              </ButtonGroup>
            </Form>
          </Col>
        </Container>
      </Collapse>
    </div>
  );
};

export default MemberForm;
