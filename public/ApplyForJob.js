
/*
function saveClick() {
    var firebaseRef = firebase.database().ref();
    var nameText = fullName.value;
    var addressText = contactAddress.value;
    var contactText = contactNumber.value;
    var notesText = extraNotes.value;
    var fileSave = myFile.value;
    firebaseRef.child("Resume/Value 1").set(nameText);
    firebaseRef.child("Resume/Value 2").set(addressText);
    firebaseRef.child("Resume/Value 3").set(contactText);
    firebaseRef.child("Resume/Value 4").set(notesText);
    firebaseRef.child("Resume/Value 5").set(fileSave);

} */

function applyClick() {
    window.location = 'JobSearchPage.html'

}

function returnClick() {
    window.location = 'JobSearchPage.html';
}



var nameRef = firebase.database().ref().child("Resume/Value 1");
nameRef.on('value', function (datasnapshot) {
    fullName.innerText = datasnapshot.val();
});
var headingRef = firebase.database().ref().child("Resume/Value 2");
headingRef.on('value', function (datasnapshot) {
    contactAddress.innerText = datasnapshot.val();
});
var addressRef = firebase.database().ref().child("Resume/Value 3");
addressRef.on('value', function (datasnapshot) {
    contactNumber.innerText = datasnapshot.val();
});
var notesRef = firebase.database().ref().child("Resume/Value 4");
notesRef.on('value', function (datasnapshot) {
    extraNotes.innerText = datasnapshot.val();
});
var fileRef = firebase.database().ref().child("Resume/Value 5");
fileRef.on('value', function (datasnapshot) {
    myFile.innerText = datasnapshot.val();
});