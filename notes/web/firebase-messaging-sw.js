importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");

// Gunakan konfigurasi web dari firebase_options.dart Anda
firebase.initializeApp({
  apiKey: "AIzaSyAN...",
  authDomain: "notes-a62d4.firebaseapp.com",
  projectId: "notes-a62d4",
  storageBucket: "notes-a62d4.firebasestorage.app",
  messagingSenderId: "645264070961",
  appId: "1:645264070961:web:f3b42914...",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/favicon.png",
  };
  return self.registration.showNotification(notificationTitle, notificationOptions);
});
