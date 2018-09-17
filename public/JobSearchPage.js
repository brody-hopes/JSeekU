(function () {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyAFPt18uGCipKXTsBitesEB9YMy_POKYVY",
        authDomain: "jseeku-jcu.firebaseapp.com",
        databaseURL: "https://jseeku-jcu.firebaseio.com",
        projectId: "jseeku-jcu",
        storageBucket: "jseeku-jcu.appspot.com",
        messagingSenderId: "924319132512"
    };
    firebase.initializeApp(config);

    const btnLogOut = document.getElementById('btnLogOut');

    btnLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
        window.location = 'LoginPage.html';

    });

}());

