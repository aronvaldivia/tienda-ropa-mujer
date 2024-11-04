import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Phone, Mail, Instagram, Facebook, MapPin, ExternalLink } from 'lucide-react';

const sliderImages = [
  'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070',
  'https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071',
  'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2070',
];

const products = [
  {
    id: 1,
    name: 'Summer Floral Dress',
    price: '$89.99',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=1976',
    category: 'Dresses'
  },
  {
    id: 2,
    name: 'Classic Denim Jacket',
    price: '$129.99',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070',
    category: 'Outerwear'
  },
  {
    id: 3,
    name: 'Elegant Evening Gown',
    price: '$299.99',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=2070',
    category: 'Dresses'
  },
  {
    id: 4,
    name: 'Casual White Blouse',
    price: '$59.99',
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?q=80&w=2005',
    category: 'Tops'
  },
  {
    id: 5,
    name: 'Leather Mini Skirt',
    price: '$79.99',
    image: 'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?q=80&w=2070',
    category: 'Skirts'
  },
  {
    id: 6,
    name: 'Bohemian Maxi Dress',
    price: '$149.99',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=2073',
    category: 'Dresses'
  },
];

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleWhatsApp = (productName: string) => {
    const message = `Hello! I'm interested in the ${productName}. Can you provide more information?`;
    window.open(`https://wa.me/1234567890?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800 flex items-center">
              <ShoppingBag className="mr-2" />
              ELEGANCE
            </h1>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-gray-900">Home</a>
              <a href="#collection" className="text-gray-600 hover:text-gray-900">Collection</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Slider */}
      <section id="home" className="relative h-screen">
        <div className="absolute inset-0">
          {sliderImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30" />
            </div>
          ))}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white"
        >
          <ChevronRight size={24} />
        </button>

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="max-w-3xl px-4">
            <h2 className="text-5xl font-bold text-white mb-6">Discover Your Style</h2>
            <p className="text-xl text-white/90 mb-8">
              Explore our latest collection of premium women's fashion
            </p>
            <a
              href="#collection"
              className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Now
            </a>
          </div>
        </div>
      </section>

      {/* Collection Grid */}
      <section id="collection" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative h-96">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">{product.category}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                    <button
                      onClick={() => handleWhatsApp(product.name)}
                      className="bg-green-500 text-white px-4 py-2 rounded-full flex items-center hover:bg-green-600 transition-colors"
                    >
                      <ExternalLink size={18} className="mr-2" />
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ELEGANCE</h3>
              <p className="text-gray-400">
                Discover the latest trends in women's fashion. Quality and style for every occasion.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="flex items-center text-gray-400">
                  <Phone size={18} className="mr-2" />
                  +1 234 567 890
                </p>
                <p className="flex items-center text-gray-400">
                  <Mail size={18} className="mr-2" />
                  contact@elegance.com
                </p>
                <p className="flex items-center text-gray-400">
                  <MapPin size={18} className="mr-2" />
                  123 Fashion Street, NY
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300">
                  <Instagram size={24} />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ELEGANCE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;