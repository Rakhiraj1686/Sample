import React from 'react';
import { ArrowUpRight, Instagram } from 'lucide-react';
import { galleryImages } from '../../data/products';

export default function StoreGallery() {
  const handleFollowClick = () => {
    alert("[Instagram Notice]\nFollow Us: Add verified store Instagram handle upon client confirmation.");
  };

  const images = [
    {
      title: "Smartphones",
      url: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=700&auto=format&fit=crop",
      span: "col-span-1 row-span-1"
    },
    {
      title: "Accessories",
      url: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?q=80&w=700&auto=format&fit=crop",
      span: "col-span-1 row-span-1"
    },
    {
      title: "Electronics",
      url: "https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=700&auto=format&fit=crop",
      span: "col-span-1 row-span-1"
    },
    {
      title: "Store Interior",
      url: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?q=80&w=900&auto=format&fit=crop",
      span: "col-span-1 sm:col-span-2 row-span-1"
    },
    {
      title: "Product Close-up",
      url: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=700&auto=format&fit=crop",
      span: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-paper-200 border-b border-border-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 pb-6 border-b border-ink-900">
          <div>
            <span className="text-xs font-black tracking-widest text-deal-orange uppercase">
              VISUAL REEL
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-ink-900 tracking-tighter uppercase mt-2">
              FROM THE STORE
            </h2>
          </div>

          <button
            onClick={handleFollowClick}
            className="inline-flex items-center gap-2 text-xs font-black tracking-widest uppercase text-ink-900 hover:text-deal-orange transition-colors mt-4 sm:mt-0"
          >
            <Instagram className="w-4 h-4 text-deal-orange" />
            <span>FOLLOW US</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 3x2 Asymmetric Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`relative rounded-2xl overflow-hidden bg-paper-300 border border-border-warm group min-h-[260px] ${img.span}`}
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <span className="text-xs font-black tracking-wider uppercase text-white">
                  {img.title}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
