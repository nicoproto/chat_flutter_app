const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp;

exports.myFunction = functions.firestore
    .doc("chat/{message}")
    .onCreate((snapshot, context) => {
      console.log(snapshot.data());
      admin.messaging().sendToTopic("chat", {
        notification: {
          title: snapshot.data().username,
          body: snapshot.data().text,
          clickAction: "FLUTTER_NOTIFICATION_CLICK",
        },
      });
    });
