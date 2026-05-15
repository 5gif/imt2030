// import firebase from "firebase/compat/app";
import * as firebaseui from "../../_node/firebaseui@6.1.0/index.468a2399.js";
import { firebaseConfig } from "../firebasecfg.d82a3da1.js";
import { initializeApp } from "../../_node/firebase@undefined/app.72883a21.js";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  setPersistence,
  EmailAuthProvider,
  browserSessionPersistence,
} from "../../_node/firebase@undefined/auth.1d19ea32.js";

import { getStorage, ref, uploadBytes } from "../../_node/firebase@undefined/storage.da873e3f.js";

export default {
  showLogin,
  upload,
};

export function upload(databyte, filename) {
  const storage = getStorage(app);
  const storageRef = ref(storage, filename);
  uploadBytes(storageRef, databyte).then((snapshot) => {
    console.log("Uploaded a blob or file!", snapshot.metadata, snapshot.ref);
  });
}

// import { env } from "process";

// console.log("Found ENV", env);
// console.log("Found ENV", window.APIKEY);

const app = initializeApp(firebaseConfig);

// var emailp= firebase.auth.EmailAuthProvider
// console.log("What is app", app);
const auth = getAuth(app);

export function logOut() {
  auth.signOut();
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    //logged in
    var mySpan = document.getElementById("userinfo");
    if (mySpan) {
      mySpan.innerText = user.displayName || user.email;
    }
    // document.querySelector("#login").classList.add("logout");
    document.querySelector("#login > i").classList.add("green");
    // document.querySelector("#loginout").text("Logout");
    document.querySelector("#logout").lastChild.textContent = "Log Out";
    document
      .querySelectorAll("[data-user-auth]")
      .forEach((f) => f.classList.remove("disabled"));
  } else {
    var mySpan = document.getElementById("userinfo");
    if (mySpan) {
      mySpan.innerText = "";
    }
    document.querySelector("#login > i").classList.remove("green");
    document.querySelector("#logout").lastChild.textContent = "Sign In";
    document
      .querySelectorAll("[data-user-auth]")
      .forEach((f) => f.classList.add("disabled"));

    // document.querySelector("#login").classList.remove("logout");
  }
});

export function getCurrentUser() {
  //   return firebase.auth().currentUser;
  return getAuth(app).currentUser;
}
// FirebaseUI config.
var uiConfig = {
  signInSuccessUrl: "",
  signInOptions: [
    {
      provider: EmailAuthProvider.PROVIDER_ID,
      disableSignUp: {
        status: true,
        adminEmail: "contact@5gindiaforum.in",
        helpLink: "/join5gif",
      },
    },
    // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    // Leave the lines as is for the providers you want to offer your users.
    // firebase.auth.EmailAuthProvider.PROVIDER_ID,
    // {
    //     provider: 'microsoft.com',
    //     providerName: 'Microsoft',
    //     // To override the full label of the button.
    //     // fullLabel: 'Login with Microsoft',
    //     buttonColor: '#2F2F2F',
    //     // iconUrl: '<icon-url-of-sign-in-button>',
    //     loginHintKey: 'login_hint',
    //     customParameters: {
    //       prompt: 'consent'
    //     }
    //   }
  ],
  signInFlow: "popup",
  // tosUrl and privacyPolicyUrl accept either url string or a callback
  // function.
  // Terms of service url/callback.
  tosUrl: "<your-tos-url>",
  // Privacy policy url/callback.
};

var ui =
  firebaseui.auth.AuthUI.getInstance() ||
  new firebaseui.auth.AuthUI(getAuth(app));

export function showLogin(elemID, userinfo) {
  // Initialize the FirebaseUI Widget using Firebase.
  ui =
    firebaseui.auth.AuthUI.getInstance() ||
    new firebaseui.auth.AuthUI(firebase.auth());
  //   var ui = new firebaseui.auth.AuthUI(firebase.auth());
  // The start method will wait until the DOM is loaded.
  //   document.querySelector("elemID").style.set("display", "block");
  document.querySelector(elemID).hidden = false;
  function fnCallback(currentUser, credential, redirectUrl) {
    var mySpan = document.querySelector(userinfo);
    // console.log("element info = ", userinfo, mySpan);
    if (mySpan) {
      // Now you can set the inner text
      mySpan.innerText = currentUser.displayName || currentUser.email;
      console.log(currentUser, credential, redirectUrl);
      document.querySelector("#login i").classList.add("green");
      //   document.querySelector("#loginform").hidden = true;
      //   document.getElementById("loginform").style["display"] = "none";
      return false;
    }
  }
  // signInSuccess: function(currentUser, credential, redirectUrl) {
  //     const userId = currentUser.uid;
  //     redirectUrl = `/users/${userId}`;
  //     return false
  //   },

  //   signInSuccess: fnCallback,
  uiConfig.callbacks = {
    // signInSuccessWithAuthResult: fnCallback,
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      // User successfully signed in.
      // Return type determines whether we continue the redirect automatically
      // or whether we leave that to developer to handle.
      var currentUser = authResult.user;
      var credential = authResult.credential;
      var mySpan = document.querySelector(userinfo);
      console.log("element info = ", authResult, userinfo, mySpan);
      if (mySpan) {
        // Now you can set the inner text
        mySpan.innerText = currentUser.displayName || currentUser.email;
        console.log(currentUser, credential, redirectUrl);
        var iconel = document.querySelector("#login > i");
        iconel.classList.add("green");
        // iconel.classList.add("logout");
      }
      $(elemID).modal("hide");
      return false;
    },
    signInFailure: function (error) {
      // For merge conflicts, the error.code will be
      // 'firebaseui/anonymous-upgrade-merge-conflict'.
      //   if (error.code != "firebaseui/anonymous-upgrade-merge-conflict") {
      //     return Promise.resolve();
      //   }
      // The credential the user tried to sign in with.
      //   var cred = error.credential;
      // Copy data from anonymous user to permanent user and delete anonymous
      // user.
      // ...
      // Finish sign-in after data is copied.
      // console.log("Ia m here", error);
      document.querySelector("#login >i").classList.remove("green");
      return;
      //   return firebase.auth().signInWithCredential(cred);
    },
  };
  ui.start(elemID, uiConfig);
}
