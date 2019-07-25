import React, {useState, useEffect} from 'react'

const Form = ({members, addToMembers, idCount, setIdCount, memberToEdit, isEditing, editFalse}) => {

  const [member, setMember] = useState({name: "", email: "", role: ""})

  const inputHandler = event => {
    setMember({...member, [event.target.name]: event.target.value})
    console.log(member)
  }


  const submitHandler = event => {
    event.preventDefault()
    addToMembers(member)
    setIdCount(idCount + 1)
    setMember({name: "", email: "", role: ""})
    console.log(member)
  }

  const editHandler = event => {
    event.preventDefault()
    let copy = members
    let i = member.id - 1
    copy.splice(i, 1, member)
    addToMembers(copy)
    setMember({name: "", email: "", role: ""})
    editFalse()
  }

  useEffect(() => {
    if (isEditing) {
      const member2Edit = members.filter(member => member.id === memberToEdit)[0]
      setMember(member2Edit)
    }

  }, [isEditing, members, memberToEdit])

  return (
    <form onSubmit={isEditing ? editHandler : submitHandler}>
      Name: <input name="name" type="text" placeholder="name" value={member.name} onChange={inputHandler} />
      Email: <input name="email" type="email" placeholder="email" value={member.email} onChange={inputHandler}/>
      Role: <input name="role" type="text" placeholder="role" value={member.role} onChange={inputHandler}/>
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form