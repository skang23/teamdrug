import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../login/login';

/*
  Generated class for the NearByStore page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
declare var google;
@Component({
  selector: 'page-near-by-store',
  templateUrl: 'near-by-store.html'
})
export class NearByStorePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  lat: any;
  lng: any;
  constructor(public navCtrl: NavController, public authData: AuthData) { }

  ionViewDidLoad() {
    console.log('Hello NearByStorePage Page');
    var Map;
    var map;
    var Infowindow;
    var Latitude = undefined;
    var Longitude = undefined;

    // Get places by using coordinates

    function getPlaces(latitude, longitude) {
      var latLong = new google.maps.LatLng(latitude, longitude);

      var mapOptions = {
        center: new google.maps.LatLng(0, 0),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      Map = new google.maps.Map(document.getElementById("map"), mapOptions);

      var latLong = new google.maps.LatLng(latitude, longitude);
      var image = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png';
      var marker = new google.maps.Marker({
        map: Map,
        position: latLong,
        animation: google.maps.Animation.BOUNCE,
        icon: image,
      });

      marker.setMap(Map);
      Map.setZoom(15);
      Map.setCenter(marker.getPosition());

      mapOptions = {
        center: new google.maps.LatLng(latitude, longitude),
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP

      };

      console.log(Map);

      Infowindow = new google.maps.InfoWindow();

      var service = new google.maps.places.PlacesService(Map);

      service.nearbySearch({
        location: latLong,
        radius: 2000,
        type: ['pharmacy']
      }, foundStoresCallback);

    }

    // Success callback for watching your changing position

    var onPlacesWatchSuccess = function (position) {

      var updatedLatitude = position.coords.latitude;
      var updatedLongitude = position.coords.longitude;

      if (updatedLatitude != Latitude && updatedLongitude != Longitude) {

        Latitude = updatedLatitude;
        Longitude = updatedLongitude;

        getPlaces(updatedLatitude, updatedLongitude);

      }
    }

    // Success callback for locating stores in the area

    function foundStoresCallback(results, status) {

      if (status === google.maps.places.PlacesServiceStatus.OK) {

        for (var i = 0; i < results.length; i++) {

          createMarker(results[i]);

        }
      }
    }

    // Place a pin for each store on the map

    function createMarker(place) {
      var marker = new google.maps.Marker({
        map: Map,
        position: place.geometry.location
      });

      google.maps.event.addListener(marker, 'click', function () {
        console.log(place);
        Infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
          'Place ID: ' + place.place_id + '<br>' +
          place.vicinity + '</div>');
        Infowindow.open(Map, this);

      });
    }

    // Error callback

    function onPlacesError(error) {
      console.log('code: ' + error.code + '\n' +
        'message: ' + error.message + '\n');
    }

    // Watch your changing position

    function watchPlacesPosition() {

      return navigator.geolocation.watchPosition
        (onPlacesWatchSuccess, onPlacesError, { enableHighAccuracy: true });
    }
    watchPlacesPosition();
    console.log('Hello NearByStorePage Page end');

  }

  loadMap() {

    let latLng = new google.maps.LatLng(this.lat, this.lng);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }
  logOut() {
    this.authData.logoutUser().then(() => {
      this.navCtrl.setRoot(LoginPage);
    });
  }

}
