function generateVoteCount() {
  return Math.floor((Math.random() * 50) + 15);
 }

 const products = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'avatars/daniel.jpg',
    productImageUrl: 'products/image-aqua.png',
    stars: 2,
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'avatars/kristy.png',
    productImageUrl: 'products/image-rose.png',
    stars: 2,
  },
  {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We already have your measurements and shipping address.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'avatars/veronika.jpg',
    productImageUrl: 'products/image-steel.png',
    stars: 2,
  },
  {
    id: 4,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'avatars/molly.png',
    productImageUrl: 'products/image-yellow.png',
    stars: 2,
  },
 ];
 
 export default products;