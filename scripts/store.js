import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
  items.find(ele => {
    return items.ele;
  });
}

function addItem(name) {
  try {
    item.validateName(name);
    this.items.push(item.create(name));
  } catch (error) {
    console.log(`Cannot add item: ${error.message}`);
  }

}


function findAndToggleChecked(id) {
  let specItem = this.findById(id); specItem.checked = !specItem.checked; 
}

function findAndUpdateName(id) {
  try {
    item.validateName(name);
    item.findById();
  } catch (error) {
    console.log(`Cannot update name: ${error.message}`);
  }

}

function findAndDelete(id) {
  items.splice(findById(id), 1);
}

export default {
  items,
  hideCheckedItems,
  addItem,
  findAndDelete,
  findById,
  findAndToggleChecked,
  findAndUpdateName
};