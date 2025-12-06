import { useEffect, useRef } from 'react';

const Gallery = () => {
  const images = [
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763900310/WhatsApp_Image_2025-11-23_at_17.41.23_feda06e7_f2yymd.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763900316/WhatsApp_Image_2025-11-23_at_17.41.54_84aea251_bnqcz7.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763900315/WhatsApp_Image_2025-11-23_at_17.41.55_da63a526_omgzzt.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763900313/WhatsApp_Image_2025-11-23_at_17.41.23_fe71ef38_b6cr6u.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763900312/WhatsApp_Image_2025-11-23_at_17.41.54_e2ec9ad4_jmptms.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763900300/WhatsApp_Image_2025-11-23_at_17.41.22_3c26f18d_z39yow.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763900298/WhatsApp_Image_2025-11-23_at_17.41.22_bde8c2a0_uclyw9.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763900297/WhatsApp_Image_2025-11-23_at_17.41.55_1db726c7_o2ystv.jpg",
    "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763900296/WhatsApp_Image_2025-11-23_at_17.41.54_dbb47bff_alvazc.jpg",
  ];

  return (
    <section className="py-20 bg-[#FAF4E6]">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-[#875724]">
          Our Gallery
        </h2>
        <p className="text-lg text-[#875724] max-w-2xl mx-auto mt-3">
          A glimpse into our finest dishes, celebrations, and culinary artistry.
        </p>
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 px-6 max-w-7xl mx-auto space-y-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative overflow-hidden rounded-2xl shadow-xl group break-inside-avoid"
          >
            <img
              src={src}
              alt="Gallery Image"
              className="w-full rounded-2xl transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 
            transition-opacity duration-500 flex items-end p-4 rounded-2xl">
              <p className="text-white text-lg font-semibold">Shankara Special</p>
            </div>
          </div>
        ))}
      </div>

      {/* Second Section – Highlights */}
      <div className="text-center mt-20 mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-[#875724]">
          Event Highlights
        </h2>
        <p className="text-[#875724] text-lg max-w-2xl mx-auto mt-3">
          Beautiful memories captured from our catering events.
        </p>
      </div>

      {/* Highlight Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 max-w-7xl mx-auto">
        {[
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.57_0870ac85_zeffzb.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.58_89ee7aea_lidvmj.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.09.46_e8f4ed4e_fqc1jm.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.09.45_777fef51_vj87fu.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.09.00_1d77ff63_ytdi9w.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.08.56_f58a5f83_nt08fw.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897074/WhatsApp_Image_2025-11-23_at_16.08.57_a35522f9_hl0jyi.jpg",
          "https://res.cloudinary.com/dd4oiwnep/image/upload/v1763897073/WhatsApp_Image_2025-11-23_at_16.10.32_4dfd8f7f_wkh4jd.jpg",
        ].map((src, i) => (
          <div
            key={i}
            className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-transform duration-300 hover:scale-105"
          >
            <img src={src} className="w-full h-64 object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;

