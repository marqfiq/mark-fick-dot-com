import { adminDb } from './firebase-admin';

// Defines the data structure matching your proposed Firestore JSON block
export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  contentHtml: string;
  status: 'published' | 'draft';
  publishedAt: string | Date; // Firebase might return generic string or Timestamp depending on schema
  updatedAt: string | Date;
  tags: string[];
  metaTitle?: string;
  metaDescription?: string;
}

export interface PostResponse extends BlogPost {
  id: string;
}

/**
 * Executes a secure server-side query fetching exactly one published blog 
 * post using its URL slug string.
 */
export async function getPublishedPostBySlug(slug: string): Promise<PostResponse | null> {
  // If the admin SDK crashed locally because you haven't assigned .env config,
  // we catch it gracefully so you can still layout the page in Dev using mocks.
  if(!process.env.FIREBASE_PROJECT_ID) {
    console.log("Mocking Firestore response since FIREBASE_PROJECT_ID isn't configured...");
    return {
      id: "mock-id-1234",
      title: "Why I stopped building features",
      slug: slug,
      excerpt: "What changed when I started measuring behavior instead of shipping blindly.",
      contentHtml: "<p>This is a raw <strong>HTML</strong> mock document because the Firebase Env vars are unassigned.</p><h2>The Core Idea</h2><p>Here is another paragraph demonstrating spacing mapping onto default header sizes.</p>",
      status: "published",
      publishedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: ["product", "startup"],
      metaTitle: "Why I Stopped Building Features",
      metaDescription: "A short essay on shifting from output to outcomes.",
    };
  }

  try {
    const snap = await adminDb
      .collection('posts')
      .where('slug', '==', slug)
      .where('status', '==', 'published')
      .limit(1)
      .get()

    if (snap.empty) {
      return null;
    }

    const doc = snap.docs[0];

    return {
      id: doc.id,
      ...doc.data(),
    } as PostResponse;

  } catch (error) {
    console.error("Error communicating with Firestore:", error);
    return null;
  }
}
