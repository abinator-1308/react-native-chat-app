import firebase from 'firebase'; // 4.8.1

class Fire {
  constructor() {
    this.init();
    this.observeAuth();
  }

    // 2.
    init = () =>
        firebase.initializeApp({
            apiKey: "AIzaSyDwsxyJQfT8C7HIu29scko8j1UkE8T0Cs4",
            authDomain: "react-chat-1b4a8.firebaseapp.com",
            databaseURL: "https://react-chat-1b4a8.firebaseio.com",
            projectId: "react-chat-1b4a8",
            storageBucket: "react-chat-1b4a8.appspot.com",
            messagingSenderId: "633005583700",
            appId: "1:633005583700:web:a55f339657161186dd6cc1",
            measurementId: "G-WNH1LGQQ0L",
        });

  
        observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    
      onAuthStateChanged = user => {
        if (!user) {
          try {
            firebase.auth().signInAnonymously();
          } catch ({ message }) {
            alert(message);
          }
        }
      };
    
      get uid() {
        return (firebase.auth().currentUser || {}).uid;
      }
    
      get ref() {
        return firebase.database().ref('messages');
      }
    
      parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
          _id,
          timestamp,
          text,
          user,
        };
        return message;
      };
    
      on = callback =>
        this.ref
          .limitToLast(20)
          .on('child_added', snapshot => callback(this.parse(snapshot)));
    
      get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
      }
      // send the message to the Backend
      send = messages => {
        for (let i = 0; i < messages.length; i++) {
          const { text, user } = messages[i];
          const message = {
            text,
            user,
            timestamp: this.timestamp,
          };
          this.append(message);
        }
      };
    
      append = message => this.ref.push(message);
    
      // close the connection to the Backend
      off() {
        this.ref.off();
      }
    }
    
    Fire.shared = new Fire();
    export default Fire;