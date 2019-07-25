import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardText,
  Col
} from "reactstrap";

const MemberCard = ({ member, editTrue }) => {
  return (
    <Col sm="3">
      <Card body inverse color="info" style={{ marginBottom: "2rem" }}>
        <CardHeader>{member.name}</CardHeader>
        <CardBody>
          <CardText>email: {member.email}</CardText>
          <CardText>role: {member.role}</CardText>
        </CardBody>
        <CardFooter>id: {member.id}</CardFooter>
        <Button onClick={() => editTrue(member.id)}>Edit</Button>
      </Card>
    </Col>
  );
};

export default MemberCard;
