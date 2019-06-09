import { Component }  from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { Storage } from '@ionic/storage';
//import { Inject, Injectable } from '@angular/core';
//import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

//key that is used to access the data in local storage
//const STORAGE_KEY = 'user_settings';

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})


//@Injectable()
//export class LocalStorageService {
     //anotherUserSettings = [];

//constructor (@Inject (LOCAL_STORAGE) private storage: StorageService) { }

//public storeOnLocalStorage(agePreference: string, maxDistance: string): void {
          
  // get array of tasks from local storage
  //const currentAge= this.storage.get(STORAGE_KEY) || [];

  // push new task to array
  //currentAge.push({
    //title: agePreference,
    //isChecked: false 
//});

// insert updated array to local storage
//this.storage.set(STORAGE_KEY, currentAge);
//console.log(this.storage.get(STORAGE_KEY) || 'Local storage is empty');

  // get array of tasks from local storage
  //const currentDistance= this.storage.get(STORAGE_KEY) || [];

  // push new task to array
  //currentDistance.push({
    //title: maxDistance,
    //isChecked: false 
//});

// insert updated array to local storage
//this.storage.set(STORAGE_KEY, currentDistance);
//console.log(this.storage.get(STORAGE_KEY) || 'Local storage is empty');

//}



//}

export class SettingsPage {
  data: string ='';
  get: any;
  set: any;

  constructor(private geolocation: Geolocation,) {  
  
  }

  

 //storeSettings(){
    //this.storage.set('age', '16');

  // Or to get a key/value pair
  //this.storage.get('age').then((val) => {
    //console.log('Age Preference', val);

  //});

  //this.storage.set('Distance', '25');

  // Or to get a key/value pair
  //this.storage.get('Distance').then((val) => {
   // console.log('Preferred Distance', val);

    
//});
//}
  

locate() {

  this.geolocation.getCurrentPosition().then((resp) => {
    // resp.coords.latitude
    // resp.coords.longitude
    this.data = 'Lat: ' + resp.coords.latitude + ' ' + 'Lng: ' + resp.coords.longitude
   }).catch((error) => {
     console.log('Error getting location', error);
   });
   
   let watch = this.geolocation.watchPosition();
   watch.subscribe((data) => {
    // data can be a set of coordinates, or an error (if an error occurred).
    // data.coords.latitude
    // data.coords.longitude
   });
  }
}
