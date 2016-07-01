import toastr from 'toastr';

const handleError = (error, message) => {
  toastr.error(message);
};

export default handleError;
