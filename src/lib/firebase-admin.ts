import { getApps, initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'

const apps = getApps()

// Determine if we are supplying valid credentials
const hasCredentials = process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_PRIVATE_KEY && process.env.FIREBASE_CLIENT_EMAIL;

let app;

if (!apps.length) {
    if (hasCredentials) {
        app = initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                // Automatically convert escaped newlines in environment variables
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
            }),
        });
    } else {
        // Fallback for missing configurations during local development 
        // to prevent hard caching errors in Next.js Server Components
        app = initializeApp();
        console.warn("⚠️ Firebase Admin initialized without explicit credentials. Ensure FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, and FIREBASE_PRIVATE_KEY are set in .env.local");
    }
} else {
    app = apps[0];
}

export const adminDb = getFirestore(app)
