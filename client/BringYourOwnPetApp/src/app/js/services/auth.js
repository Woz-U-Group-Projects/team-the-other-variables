'use strict';

app.factory('Auth', function($firebaseAuth, $firebaseObject, $state) {
    var ref = firebase.database().ref();
    var auth = $firebaseAuth();

    var Auth = {

        createProfile: function(uid, profile) {
            return ref.child('profiles').child(uid).set(profile);
        },

        getProfile: function(uid) {
            return $firebaseObject(ref.child('profiles').child(uid));
        },

        login: function() {
            var provider = new firebase.auth.FacebookAuthProvider();
            provider.addScope('public_profile, email, user_location, user_birthday, user_photos, user_about_me');

            return auth.$signInWithPopup(provider)

                .then(function(result) {
                    var accessToken = result.credential.accessToken;
                    var user = Auth.getProfile(result.user.uid).$loaded();

                    user.then(function(profile) {
                        if (profile.name == undefined) {

                            var info = result.user.providerData[0];
                            var profile = {
                                name: info.displayName,
                                //email: info.email,
                                //avatar: info.photoURL,
                            }
                            Auth.createProfile(result.user.uid, profile);
                        }
                    });
                });
        },

        logout: function() {
            return auth.$signOut();
        }       

    };

    auth.$onAuthStateChanged(function(authData) {
        if(authData) {
            console.log('Logged in!');
        } else {
            $state.go('login');
            console.log('You need to login.');
        }
    });

    return Auth;

});