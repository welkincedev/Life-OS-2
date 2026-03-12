/**
 * firebase.js — Firebase Configuration & Initialization
 * 
 * Initializes Firebase app with project credentials.
 * Exposes auth & db on window.LifeOS for use across all pages.
 * Loaded as type="module" in HTML.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth, setPersistence, browserLocalPersistence } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// 🔑 Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBxuRKZrp9fo7KEO1Unum3u9MoAEVq-k2s",
    authDomain: "life-os-2026-17147.firebaseapp.com",
    projectId: "life-os-2026-17147",
    storageBucket: "life-os-2026-17147.firebasestorage.app",
    messagingSenderId: "53461019073",
    appId: "1:53461019073:web:1cce68f1e39e4eada96740",
    measurementId: "G-DRPSS7Q3S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Set session persistence to LOCAL (survives browser restart)
setPersistence(auth, browserLocalPersistence).catch((err) => {
    console.error("Persistence error:", err);
});

// Expose globally for non-module scripts
window.LifeOS = { app, auth, db };

// Export for ES module scripts
export { app, auth, db };
