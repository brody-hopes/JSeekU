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

    const txtEmail = document.getElementById('txtEmail');
    const txtpassword = document.getElementById('txtPassword');
    const btnLogIn = document.getElementById('btnLogIn');
    const btnSignUp = document.getElementById('btnSignUp');

    btnLogIn.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtpassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));

    });

    btnSignUp.addEventListener('click', e => {
        const email = txtEmail.value;
        const pass = txtpassword.value;
        const auth = firebase.auth();

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    });

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            console.log(firebaseUser);
            window.location = 'JobSearchPage.html';
            btnLogOut.classList.remove('hide');
        } else {
            console.log('not logged in');
            btnLogOut.classList.add('hide');
        }
    });

}());

