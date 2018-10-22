
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
    const btnResume = document.getElementById('btnResume');

    btnLogOut.addEventListener('click', e => {
        firebase.auth().signOut();
        window.location = 'LoginPage.html';

    });

    btnResume.addEventListener('click', e => {
        window.location = 'ResumePage.html';

    });

}());

function hideDetails() {
    var x = document.getElementById("hideDiv");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }


    var x = document.getElementById("hideButton");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    hideButton.addEventListener('click', e => {
        window.location = 'ApplyForJob.html';

    });
}

function hideDetails2() {
    var x = document.getElementById("hideDiv2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }


    var x = document.getElementById("hideButton2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    hideButton2.addEventListener('click', e => {
        window.location = 'ApplyForJob.html';

    });
}

function displayAlert () {
    window.alert("The current page is still in development");
}


var value1 = document.getElementById("value1");
var value2 = document.getElementById("value2");
var value3 = document.getElementById("value3");
var value4 = document.getElementById("value4");
var value5 = document.getElementById("value5");
var value6 = document.getElementById("value6");
var value1Ref = firebase.database().ref().child("Listed Jobs/Job 1/Value 1");
value1Ref.on('value', function (datasnapshot) {
    value1.innerText = datasnapshot.val();
});
var value2Ref = firebase.database().ref().child("Listed Jobs/Job 1/Value 2");
value2Ref.on('value', function (datasnapshot) {
    value2.innerText = datasnapshot.val();
});
var value3Ref = firebase.database().ref().child("Listed Jobs/Job 1/Value 3");
value3Ref.on('value', function (datasnapshot) {
    value3.innerText = datasnapshot.val();
});
var value4Ref = firebase.database().ref().child("Listed Jobs/Job 1/Value 4");
value4Ref.on('value', function (datasnapshot) {
    value4.innerText = datasnapshot.val();
});
var value5Ref = firebase.database().ref().child("Listed Jobs/Job 1/Value 5");
value5Ref.on('value', function (datasnapshot) {
    value5.innerText = datasnapshot.val();
});
var value6Ref = firebase.database().ref().child("Listed Jobs/Job 1/Value 6");
value6Ref.on('value', function (datasnapshot) {
    value6.innerText = datasnapshot.val();
});

var value7 = document.getElementById("value7");
var value8 = document.getElementById("value8");
var value9 = document.getElementById("value9");
var value10 = document.getElementById("value10");
var value11 = document.getElementById("value11");
var value12 = document.getElementById("value12");
var value7Ref = firebase.database().ref().child("Listed Jobs/Job 2/Value 1");
value7Ref.on('value', function (datasnapshot) {
    value7.innerText = datasnapshot.val();
});
var value8Ref = firebase.database().ref().child("Listed Jobs/Job 2/Value 2");
value8Ref.on('value', function (datasnapshot) {
    value8.innerText = datasnapshot.val();
});
var value9Ref = firebase.database().ref().child("Listed Jobs/Job 2/Value 3");
value9Ref.on('value', function (datasnapshot) {
    value9.innerText = datasnapshot.val();
});
var value10Ref = firebase.database().ref().child("Listed Jobs/Job 2/Value 4");
value10Ref.on('value', function (datasnapshot) {
    value10.innerText = datasnapshot.val();
});
var value11Ref = firebase.database().ref().child("Listed Jobs/Job 2/Value 5");
value11Ref.on('value', function (datasnapshot) {
    value11.innerText = datasnapshot.val();
});
var value12Ref = firebase.database().ref().child("Listed Jobs/Job 2/Value 6");
value12Ref.on('value', function (datasnapshot) {
    value12.innerText = datasnapshot.val();
});