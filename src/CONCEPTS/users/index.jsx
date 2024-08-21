import { useEffect, useState } from "react";

export default function Users() {
  const [usersList, setUsersList] = useState([]);
  

  async function fetchAllUsers() {
    try {
        
      const apiResponse = await fetch("https://dummyjson.com/users");
      const result =await apiResponse.json();
      if (result?.users) {
        setUsersList(result?.users);
        
      } else {
        setUsersList([]);
       
      }
    } catch (error) {
      console.log(error);
    }
  }
  function handleFetch(){
    fetchAllUsers()
  }

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <div>
        <button onClick={handleFetch}>fetch users</button>
      <h2>All users Lists</h2>
      <ul>
        {usersList && usersList.length > 0 ? (
          usersList.map((item) => (
            <li key={item.id}>
              <p>
                {item?.firstName} {item?.lastName}
              </p>
            </li>
          ))
        ) : (
          <p>Users not found please try again later</p>
        )}
      </ul>
    </div>
  );
}
