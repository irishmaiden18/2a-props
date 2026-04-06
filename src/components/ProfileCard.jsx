/* 
1. ProfileCard
-create a ProfileCard component that takes in name, email, experience (in years), role, and isActive as props and then displays them to the user
- Render at least 3 different ProfileCards
*/
const ProfileCard = ({name, email, experience, role, isActive}) => {
  return (
    <>
        <h2>Name: {name}</h2>
        <h4>Email: {email}</h4>
        <p>Experience: {experience} years</p>
        <p>Role: {role}</p>
        {isActive ? (
            <p>Is currently active!</p>
        ) : (
            <p>Is currently NOT active!</p>
        )}
    </>
  )
}

// OR

// const ProfileCard = (props) => {
//   return (
//     <>
//       <h2>Name: {props.name}</h2>
//       <p>Email: {props.email}</p>
//       <p>Experience: {props.experience} years</p>
//       <p>Role: {props.role}</p>
//       <p>Status: {props.isActive ? "Active" : "Inactive" } </p>
//     </>
//   );
// };

export default ProfileCard