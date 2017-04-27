angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('CampusStudentsCtrl', function($scope) {
  $scope.title = 'Etudiants du Campus';
  })

.controller('FriendsCtrl', function($scope) {
  $scope.title = 'Liste des amis';
  $scope.newFriendName = '';

  var friendsList = [
    { 'name' : 'John Doe' },
    { 'name' : 'Bob Marley' }
  ];
  
  $scope.friends = friendsList;

  $scope.newFriend = function() {
    console.log('Appel de new Friend');
    console.log($scope.newFriendName);

    // ici on ajoute ce New Friend a friendsList
    // Pour cela il faut mettre notre chaine dans un objet 
    var newUser = {
      'name' :  $scope.newFriendName
      
    };
    console.log(newUser);

    // Ensuite je l'ajoute a mon tableau $scope.friends 
    friendsList.push(newUser);

    console.log(friendsList);

    // $scope
  };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
