/*
2. ProfileCardObject
-create another component that takes in the same information, except as an object
Render at least 2 different ProfileCardObjects
*/
const ProfileCardObject = ({person}) => {
  return (
    <>
        <h2>Name: {person.name}</h2>
        <h4>Email: {person.email}</h4>
        <p>Experience: {person.experience} years</p>
        <p>Role: {person.role}</p>
        {person.isActive ? (
            <p>Is currently active!</p>
        ) : (
            <p>Is currently NOT active!</p>
        )}
    </>
  )
}

export default ProfileCardObject