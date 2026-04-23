import { notFound } from 'next/navigation';
import { getPublishedPostBySlug } from '@/lib/posts';
import Navbar from '@/components/Navbar';

type Props = {
  params: {
    slug: string
  }
}

// Ensure dynamic generation for SEO caching mechanisms
export async function generateMetadata({ params }: Props) {
  const post = await getPublishedPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Post Not Found | Mark Fick',
    }
  }

  // Bind OpenGraph cleanly matching the metadata from the database
  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    alternates: {
      canonical: `/writing/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      url: `https://markfick.com/writing/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt.toString(),
      tags: post.tags,
    },
  }
}

export default async function WritingPostPage({ params }: Props) {
  const post = await getPublishedPostBySlug(params.slug)

  if (!post || post.status !== 'published') {
    notFound()
  }

  // Format date efficiently
  const publishDate = new Date(post.publishedAt);
  const formattedDate = !isNaN(publishDate.getTime()) 
    ? publishDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : post.publishedAt.toString();

  return (
    <div className="w-full bg-bg min-h-screen flex flex-col">
      {/* Navigation Layer */}
      <div className="max-w-[860px] w-full mx-auto px-[20px] shrink-0">
        <Navbar />
      </div>

      {/* Main Structural Article Content */}
      <main className="flex-1 max-w-[860px] w-full mx-auto px-[20px] py-[64px] md:py-[96px]">
        <article>
          {/* Typographic Metadata Header */}
          <header className="mb-14">
            <h1 className="font-serif text-3xl md:text-4xl text-text-head font-bold leading-tight tracking-[-0.02em] mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-3">
              <time dateTime={publishDate.toISOString()}>{formattedDate}</time>
              <span>|</span>
              <div className="flex items-center gap-2">
                {post.tags.map((tag, idx) => (
                  <span key={idx} className="bg-bg-alt px-2 py-0.5 rounded text-muted-2 border border-border-2">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Secure Raw Injection */}
          {/* We lock dangerouslySet in our custom formatted tailwind 'prose' tailormade wrapper */}
          <div
            className="prose prose-invert max-w-[620px] text-base leading-[1.65]"
            dangerouslySetInnerHTML={{ __html: post.contentHtml }}
          />

        </article>
      </main>

      {/* Universal Footer Component (Duplicated structurally from primary homepage for consistency) */}
      <footer className="w-full bg-bg-dark border-t border-border-2 mt-auto">
        <div className="max-w-[860px] mx-auto px-[20px] py-12 flex flex-col items-center gap-5">
          <div className="flex flex-wrap justify-center items-center gap-4">
            <a href="https://linkedin.com/in/mark-fick" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-muted-2 transition-colors duration-150 hover:text-text-head">linkedin</a>
            <span className="font-mono text-sm text-muted-3">|</span>
            <a href="https://github.com/marqfiq" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-muted-2 transition-colors duration-150 hover:text-text-head">github</a>
            <span className="font-mono text-sm text-muted-3">|</span>
            <a href="mailto:markfick31415@gmail.com" className="font-mono text-sm text-muted-2 transition-colors duration-150 hover:text-text-head">email</a>
          </div>
          <span className="font-mono text-sm text-text-body font-medium tracking-[0.02em]">Mark Fick</span>
        </div>
      </footer>
    </div>
  )
}
