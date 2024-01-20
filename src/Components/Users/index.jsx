import { useState, useEffect } from 'react'

const Users = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const getData = async () => {
      const response  = await fetch('users.json');
      console.log('setting')
      setUsers( await response.json());
    }
  
    getData()
  },[])
  

  return (
    <div>
      {users.map((userData) => {
        return (
          <div key={userData.id} className="grid grid-cols-2 mb-8 m-auto mt-8 bg-white text-black text-center w-4/5 shadow-lg">
            <div>
              <img src={userData.imgURL}/>
            </div>

            <div className="mt-8 mr-32 py-4 w-4/5">
              <h3 className="text-2xl mb-4">{userData.name}</h3>
              <h3 className="text-2xl mb-4">{userData.ocupation}</h3>
              <p className="flex flex-wrap text-xl  leading-7 "><strong>{userData.biography}</strong></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
