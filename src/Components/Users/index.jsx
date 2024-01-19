const Users = (props) => {
  return (
    <div>
      {props.freeCodeCampUser.map((userData) => {
        return (
          <div key={userData.id} className="grid grid-cols-2 mb-8 m-auto mt-8 bg-slate-950 text-white  text-center w-4/5">
            <div>
              <img src={userData.imgURL} alt="user avatar" />
            </div>

            <div className="mt-8 mr-32 py-4 w-4/5">
              <h3 className="text-2xl mb-4">{userData.name}</h3>
              <h3 className="text-2xl mb-4">{userData.ocupation}</h3>
              <p className="text-xl"><strong>{userData.biography}</strong></p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
