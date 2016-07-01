


export function loadUsersSuccess(users) {
  return {type: 'LOAD_USER_SUCCESS', users}
}


export function loadUsers() {
  return dispatch => {
    return Api.getUsers().then(users => {
      dispatch(loadUsersSuccess(users));
    }).catch(err => {throw(err);});
  }
}
