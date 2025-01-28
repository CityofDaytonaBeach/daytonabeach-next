export interface BlogPost {
  title: string;
  content: string;
  thumbnail: string;
  created_at: string;
}

export const posts: BlogPost[] = [
  {
    title: 'New Community Center Opening Soon',
    content: 'Join us for the grand opening of our state-of-the-art community center, featuring recreational facilities for all ages.',
    thumbnail: '/images/community-center.jpg',
    created_at: '2024-01-15'
  },
  {
    title: 'Beach Safety Tips for Summer',
    content: 'Stay safe this summer with our comprehensive guide to beach safety, including rip current awareness and sun protection.',
    thumbnail: '/images/beach-safety.jpg',
    created_at: '2024-01-14'
  },
  {
    title: 'Downtown Revitalization Project',
    content: 'Discover the exciting changes coming to our downtown area as part of our ongoing revitalization project.',
    thumbnail: '/images/downtown.jpg',
    created_at: '2024-01-13'
  },
  {
    title: 'Parks and Recreation Summer Programs',
    content: 'Registration is now open for summer programs including sports camps, art classes, and outdoor adventures.',
    thumbnail: '/images/parks-rec.jpg',
    created_at: '2024-01-12'
  },
  {
    title: 'New Recycling Initiative',
    content: 'Learn about our new citywide recycling program and how you can participate in making our city greener.',
    thumbnail: '/images/recycling.jpg',
    created_at: '2024-01-11'
  },
  {
    title: 'Emergency Preparedness Workshop',
    content: 'Join us for a free workshop on hurricane preparedness and emergency response procedures.',
    thumbnail: '/images/emergency-prep.jpg',
    created_at: '2024-01-10'
  }
];
