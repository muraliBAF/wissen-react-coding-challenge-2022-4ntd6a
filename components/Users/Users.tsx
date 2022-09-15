import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { UsersList } from '../../interface';
import { getUsersList, userLogout } from '../../library/store/user/actions';
import { useUserAccount } from '../../library/store/user/selector';

const User = () => {
  const { usersList, token } = useUserAccount();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsersList(token));
    inactivityTime();
  }, []);

  const inactivityTime = () => {
    let time: string | number | NodeJS.Timeout | undefined;
    const userPage = document.querySelector('#userPage');
    window.onload = resetTimer;
    userPage!.addEventListener('mouseover', resetTimer);

    function logout() {
      dispatch(userLogout());
      toast.info('Session timeout');
    }
    function resetTimer() {
      clearTimeout(time);
      time = setTimeout(logout, 60000);
    }
  };

  return (
    <div id="userPage" className="w-100 h-100 text-center">
      <div className="d-flex justify-content-end p-2">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => dispatch(userLogout())}
        >
          Log out
        </button>
      </div>
      <h4 className="mb-5 ">Hi , Welcome </h4>
      <table className="table table-striped table-dark m-auto">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Name</th>
            <th scope="col">Pantone value</th>
            <th scope="col">Color</th>
            <th scope="col">Year</th>
          </tr>
        </thead>
        <tbody>
          {usersList &&
            usersList.map((user: UsersList) => {
              return (
                <tr>
                  <th scope="row">{user.id}</th>
                  <td>{user.name}</td>
                  <td>{user.pantone_value}</td>
                  <td>{user.color}</td>
                  <td>{user.year}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
