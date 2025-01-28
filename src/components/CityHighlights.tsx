'use client';

import Image from 'next/image';

export default function CityHighlights() {
  const posts = [
    {
      title: 'New Community Center Opening Soon',
      content:
        'Join us for the grand opening of our state-of-the-art community center, featuring recreational facilities for all ages.',
      thumbnail: '/images/community-center.jpg',
      created_at: '2024-01-15'
    },
    {
      title: 'Beach Safety Tips for Summer',
      content:
        'Stay safe this summer with our comprehensive guide to beach safety, including rip current awareness and sun protection.',
      thumbnail: '/images/beach-safety.jpg',
      created_at: '2024-01-14'
    },
    {
      title: 'Downtown Revitalization Project',
      content:
        'Discover the exciting changes coming to our downtown area as part of our ongoing revitalization project.',
      thumbnail: '/images/downtown.jpg',
      created_at: '2024-01-13'
    },
    {
      title: 'Parks and Recreation Summer Programs',
      content:
        'Registration is now open for summer programs including sports camps, art classes, and outdoor adventures.',
      thumbnail: '/images/parks-rec.jpg',
      created_at: '2024-01-12'
    },
    {
      title: 'New Recycling Initiative',
      content:
        'Learn about our new citywide recycling program and how you can participate in making our city greener.',
      thumbnail: '/images/recycling.jpg',
      created_at: '2024-01-11'
    },
    {
      title: 'Emergency Preparedness Workshop',
      content:
        'Join us for a free workshop on hurricane preparedness and emergency response procedures.',
      thumbnail: '/images/emergency-prep.jpg',
      created_at: '2024-01-10'
    }
  ];

  return (
    <section className="py-24 bg-brand-blue/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dunbar text-5xl md:text-6xl xl:text-7xl font-bold text-brand-blue mb-6">
            City Highlights
          </h2>
          <p className="header-special text-xl md:text-2xl max-w-3xl mx-auto">
            Stay informed about the latest developments and initiatives in our
            vibrant community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={post.thumbnail}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-dunbar text-xl font-bold mb-3 text-gray-900 group-hover:text-brand-blue transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
                <div className="flex items-center justify-between">
                  <time className="text-sm text-gray-500">
                    {new Date(post.created_at).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    })}
                  </time>
                  <a
                    href="#"
                    className="text-brand-blue font-semibold hover:text-brand-blue-light transition-colors"
                  >
                    Read More
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
