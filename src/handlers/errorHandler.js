import toastr from 'toastr';

const handleError = (error, message) => {
  toastr.error(message);
  throw(error);
};

export default handleError;
