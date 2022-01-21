// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function saveToFirebase(email) {
    var emailObject = {
        email: email,
        name: fname

    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function (snapshot) {
            success(); // some success method
        }, function (error) {
            console.log('error' + error);
            error(); // some error method
        });
}

saveToFirebase(email);