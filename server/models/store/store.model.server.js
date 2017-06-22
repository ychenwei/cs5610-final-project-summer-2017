var mongoose = require('mongoose');
var storeSchema = require('./store.schema.server');
var storeModel = mongoose.model('storeModel', storeSchema);


storeModel.createStore = createStore;
storeModel.findAllStoresForOwner = findAllStoresForOwner;
storeModel.findStoreById = findStoreById;
storeModel.updateStore = updateStore;
storeModel.deleteStore = deleteStore;


module.exports = storeModel;


function createStore(owner, store) {
    store._owner = owner;
    store.dateCreated = Date.now();
    return storeModel
        .create(store)
        .then(function (store) {
            return store;
        })
}


function findAllStoresForOwner(owner) {
    return storeModel
        .find({_owner: owner})
        .exec();
}

function findStoreById(storeId) {
    return storeModel.findById(storeId);
}


function updateStore(storeId, store) {
    store.dateUpdated = Date.now();
    return storeModel.update({_id: storeId}, {$set: store});
}

function deleteStore(storeId) {
    return storeModel.remove({_id:storeId}).exec();
}


