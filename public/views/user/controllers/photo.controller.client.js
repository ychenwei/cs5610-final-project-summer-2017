(function () {
    angular
        .module('FinalProject')
        .controller('photoController', photoController);

    function photoController($routeParams, $location, currentUser) {
        var model = this;

        model.user = currentUser;
        model.userId = currentUser._id;

        // models.uploadPhoto = uploadPhoto;

    }
})();