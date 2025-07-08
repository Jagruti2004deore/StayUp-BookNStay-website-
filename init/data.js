const sampleListings = [
  {
  title: "Luxury Mountain Cabin",
  description: "Experience tranquility in this mountain-side luxury cabin with breathtaking views.",
  location: "Manali",
  country: "India",
  price: 3200,
  image: {
    url: "https://images.unsplash.com/photo-1600585154340-be6161c458ab?auto=format&fit=crop&w=800&q=60",
    filename: "mountain-cabin"
  },
  geometry: {
    type: "Point",
    coordinates: [77.1887, 32.2432] // [lng, lat] for Manali
  },
  owner: "686cfc8f2d5a09c447edbb2a", // dummy ObjectId
  reviews: [] // optional
},

{
    title: "Hilltop Haven",
    description: "Stunning views of the Western Ghats from this hilltop bungalow.",
    price: 4200,
    location: "Mahabaleshwar, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?hill,mahabaleshwar",
      filename: "hilltop-haven.jpg"
    },
    geometry: { type: "Point", coordinates: [73.6586, 17.9232] }
  },
  {
    title: "Seaside Serenity",
    description: "A beach house just steps away from the waves.",
    price: 5000,
    location: "Alibaug, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?beach,alibaug",
      filename: "seaside-serenity.jpg"
    },
    geometry: { type: "Point", coordinates: [72.8679, 18.6414] }
  },
  {
    title: "Lakeview Lodge",
    description: "Modern comforts with breathtaking lake views.",
    price: 3800,
    location: "Pawna Lake, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?lake,pawna",
      filename: "lakeview-lodge.jpg"
    },
    geometry: { type: "Point", coordinates: [73.4716, 18.7506] }
  },
  {
    title: "Rustic Treehouse",
    description: "Experience nature up close in this cozy treehouse.",
    price: 4500,
    location: "Igatpuri, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?treehouse,igatpuri",
      filename: "rustic-treehouse.jpg"
    },
    geometry: { type: "Point", coordinates: [73.5594, 19.6957] }
  },
  {
    title: "Forest Retreat",
    description: "Escape to a tranquil home in the Sahyadri hills.",
    price: 3900,
    location: "Matheran, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?forest,matheran",
      filename: "forest-retreat.jpg"
    },
    geometry: { type: "Point", coordinates: [73.2623, 18.9850] }
  },
  {
    title: "Chic Urban Flat",
    description: "Minimalist design in the heart of the city.",
    price: 3200,
    location: "Pune, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?apartment,pune",
      filename: "urban-flat.jpg"
    },
    geometry: { type: "Point", coordinates: [73.8567, 18.5204] }
  },
  {
    title: "Luxury Villa with Pool",
    description: "Spacious villa with a private pool and modern amenities.",
    price: 7200,
    location: "Karjat, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?villa,karjat",
      filename: "luxury-villa.jpg"
    },
    geometry: { type: "Point", coordinates: [73.3391, 18.9101] }
  },
  {
    title: "Peaceful Farmhouse",
    description: "Relax on a quiet farm surrounded by nature.",
    price: 2800,
    location: "Satara, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?farmhouse,satara",
      filename: "peaceful-farmhouse.jpg"
    },
    geometry: { type: "Point", coordinates: [74.0183, 17.6805] }
  },
  {
    title: "Mountain Base Camp",
    description: "Stay close to hiking trails and adventure zones.",
    price: 3400,
    location: "Bhandardara, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?camp,bhandardara",
      filename: "base-camp.jpg"
    },
    geometry: { type: "Point", coordinates: [73.7551, 19.5007] }
  },
  {
    title: "Colonial Heritage Stay",
    description: "Live like royalty in a restored colonial mansion.",
    price: 6100,
    location: "Kolhapur, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?heritage,kolhapur",
      filename: "heritage-stay.jpg"
    },
    geometry: { type: "Point", coordinates: [74.2433, 16.7050] }
  },
  {
    title: "Boathouse on Backwaters",
    description: "Floating stay with scenic views and full comfort.",
    price: 5500,
    location: "Tarkarli, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?boathouse,tarkarli",
      filename: "boathouse.jpg"
    },
    geometry: { type: "Point", coordinates: [73.6907, 16.0342] }
  },
  {
    title: "Vintage Stone Cottage",
    description: "Stone-built beauty tucked into the highlands.",
    price: 3700,
    location: "Amboli, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?stonecottage,amboli",
      filename: "stone-cottage.jpg"
    },
    geometry: { type: "Point", coordinates: [74.0042, 15.9653] }
  },
  {
    title: "Wilderness Bungalow",
    description: "Secluded house within a wildlife corridor.",
    price: 4600,
    location: "Chandoli National Park, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?wildlife,chandoli",
      filename: "wildlife-bungalow.jpg"
    },
    geometry: { type: "Point", coordinates: [73.9352, 17.0912] }
  },
  {
    title: "Cultural Stay",
    description: "Immerse yourself in local culture and food.",
    price: 3100,
    location: "Nashik, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?culture,nashik",
      filename: "cultural-stay.jpg"
    },
    geometry: { type: "Point", coordinates: [73.7898, 20.0059] }
  },
  {
    title: "Himalayan Escape",
    description: "Getaway in the remote villages of northern Maharashtra.",
    price: 4200,
    location: "Dhule, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?mountains,dhule",
      filename: "himalayan-escape.jpg"
    },
    geometry: { type: "Point", coordinates: [74.7749, 20.9042] }
  },
  {
    title: "Luxury Tent Stay",
    description: "Glamping with full luxury under the stars.",
    price: 4700,
    location: "Shirdi, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?tent,shirdi",
      filename: "glamp-tent.jpg"
    },
    geometry: { type: "Point", coordinates: [74.4762, 19.7645] }
  },
  {
    title: "Artist's Studio",
    description: "Creative space with boho interiors and tranquility.",
    price: 3300,
    location: "Aurangabad, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?studio,aurangabad",
      filename: "artists-studio.jpg"
    },
    geometry: { type: "Point", coordinates: [75.3433, 19.8762] }
  },
  {
    title: "Modern Hill House",
    description: "Clean design and sweeping views atop the hills.",
    price: 5200,
    location: "Jawhar, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?hillhouse,jawhar",
      filename: "modern-hill.jpg"
    },
    geometry: { type: "Point", coordinates: [73.2268, 19.9055] }
  },
  {
    title: "Pet-Friendly Stay",
    description: "Bring your pets and enjoy the open fields together.",
    price: 3000,
    location: "Panvel, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?petstay,panvel",
      filename: "pet-friendly.jpg"
    },
    geometry: { type: "Point", coordinates: [73.1134, 18.9880] }
  },
  {
    title: "Historic Haveli",
    description: "Experience timeless elegance and antique charm.",
    price: 5900,
    location: "Solapur, Maharashtra",
    country: "India",
    image: {
      url: "https://source.unsplash.com/featured/?haveli,solapur",
      filename: "historic-haveli.jpg"
    },
    geometry: { type: "Point", coordinates: [75.9064, 17.6599] }
  }

];

module.exports = { data: sampleListings };