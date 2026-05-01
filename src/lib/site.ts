export const site = {
  name: "Repose Healing Center",
  tagline: "Advocacy. Prevention. Care. Restoring Lives.",
  phone: "+256789728211",
  phoneDisplay: "+256 789 728 211",
  email: "reposehealingcenter@gmail.com",
  address: "Ssese View Road, Plot 2, Manyago, Entebbe, Uganda",
  hours: "Monday – Saturday, 8:00 AM – 6:00 PM",
  whatsapp: "256789728211",
  maps: "https://www.google.com/maps?q=Manyago,Entebbe,Uganda&output=embed",
  social: {
    facebook: "https://www.facebook.com/ligi.nghopefully26",
    instagram: "https://www.instagram.com/livi.nghope26?igsh=djhrMjVhbXF3azM1",
    tiktok: "https://www.tiktok.com/@livi.hope26?_r=1&_t=ZS-95uWAgkxg0a",
    // twitter: "https://twitter.com",
    // linkedin: "https://linkedin.com",
    // youtube: "https://youtube.com",
  },
};

export const waLink = (msg = "Hello Repose Healing Center, I would like to enquire about your services.") =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(msg)}`;
