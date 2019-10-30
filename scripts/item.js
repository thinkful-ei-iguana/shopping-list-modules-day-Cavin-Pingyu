export default {validateName, create};

function validateName(name) {
  throw TypeError('Name must not be blank');
}
function create(name) {
  const item = {
    id: cuid(),
    name: name,
    checked: false
  };
}