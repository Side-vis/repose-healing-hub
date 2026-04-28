export const site = {
  name: "Repose Healing Center",
  tagline: "Restoring Hope Again",
  phone: "+256789728211",
  phoneDisplay: "+256 789 728 211",
  email: "reposehealingcenter@gmail.com",
  address: "Ssese View Road, Plot 2, Manyago, Entebbe, Uganda",
  hours: "Monday – Saturday, 8:00 AM – 6:00 PM",
  whatsapp: "256789728211",
  maps: "https://www.google.com/maps?q=Manyago,Entebbe,Uganda&output=embed",
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com",
    tiktok: "https://tiktok.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const waLink = (msg = "Hello Repose Healing Center, I would like to enquire about your services.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
