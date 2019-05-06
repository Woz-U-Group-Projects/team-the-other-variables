// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverURL: 'http://localhost:8080',
  whitelistedDomains: ['localhost:8080'],
  firebaseConfig: {
    apiKey: "AIzaSyD_pezweALi3mQw1GowftbxvvE8fFUrs24",
    authDomain: "byop-87630.firebaseapp.com",
    databaseURL: "https://byop-87630.firebaseio.com",
    projectId: "byop-87630",
    storageBucket: "byop-87630.appspot.com",
    messagingSenderId: "509411540811",
    appId: "1:509411540811:web:bd7a5605fa93b556"}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
