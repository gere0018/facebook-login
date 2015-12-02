angular.module('starter.controllers', ['satellizer'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
 // Create the login modal that we will use later
 $ionicModal.fromTemplateUrl('templates/login.html', {
   scope: $scope
 }).then(function(modal) {
   $scope.modal = modal;
 });

 // Triggered in the login modal to close it
 $scope.closeLogin = function() {
   $scope.modal.hide();
 };
 
 // Open the login modal
 $scope.login = function() {
  $scope.modal.show(); 
 };

})
.controller('LoginCtrl', function($scope, $auth) {
  $scope.loggedIn = false;
//adding the functionality to handle facebook login from satellizer
 $scope.authenticate = function(provider) {
      $auth.authenticate(provider)
          .then(function(response) {
        // Signed in with Facebook.
          $scope.loggedIn = true;
          console.log(response);
          console.log($auth.getPayload());
      })
      .catch(function(response) {
        // Something went wrong.
      });
 };
 $scope.logOut = function(){
  $auth.logout();
  $scope.loggedIn = false;
  console.log("user is logged out " + $scope.loggedIn );
};
$scope.isVisible = function(){
    //user have not logged in
    if($scope.loggedIn == false){
      return true;
    }else{
    //user is already logged in, give them the option to log out
      return false;
    }
  };

})
    
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
