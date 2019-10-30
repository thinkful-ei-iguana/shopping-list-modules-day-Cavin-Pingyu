import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
    store.items.find(ele => {
        return store.items.ele;
    })
};

function addItem(name) {
    try {
        item.validateName(name);
        this.items.push(item.create(name));
    } catch (error) {

    }
    render();
};

function findAndToggleChecked(id) {
    this.findById();
    render();
}

function findAndUpdateName(id) {
    try {
        item.validateName(name);
        item.findById();
    } catch (error) {
        console.log(`Cannot update name: ${error.message}`);
    }
    render();
}

function findAndDelete(id) {
    this.items.splice(item.find(id), 1);
    render();
}

export default {
    items,
    hideCheckedItems,
};