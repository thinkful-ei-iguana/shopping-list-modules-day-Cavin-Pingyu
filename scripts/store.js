import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
    return items.find(ele => {
        if (ele.id === id) {
            return true;
        }
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
    let specItem = this.findById(id);
    specItem.checked = !specItem.checked;
}

function findAndUpdateName(id) {
    try {
        item.validateName(name);
        item.findById(id);
    } catch (error) {
        console.log(`Cannot update name: ${error.message}`);
    }

}

function findAndDelete(id) {
    let index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
}

const toggleCheckFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
};


export default {
    items,
    hideCheckedItems,
    addItem,
    findAndDelete,
    findById,
    findAndToggleChecked,
    findAndUpdateName,
    toggleCheckFilter
};