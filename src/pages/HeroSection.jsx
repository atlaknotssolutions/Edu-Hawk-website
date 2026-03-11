



// import { useState, useEffect } from "react";

// // Icons (two different icons repeated — that's how it was in original)
// import icon1 from "../Images/icons/ux-design_2998253.svg";
// import icon2 from "../Images/icons/selling_12091247.svg";
// import icon3 from "../Images/icons/ux-design_2998253.svg";
// import icon4 from "../Images/icons/selling_12091247.svg";
// import { X } from 'lucide-react';

// // University / ranking images
// import univercity from "../Images/university-image/singapore.jpg";
// import topRanking1 from "../Images/Peking University Health Science Center.jpg";
// import topRanking2 from "../Images/Shanghai Jiao Tong University School of Medicine.png";
// import topRanking3 from "../Images/Tsinghua University School of Medicine.jpg";
// import topRanking4 from "../Images/First Moscow State Medical University (Sechenov University).jpg";
// import topRanking5 from "../Images/Saint Petersburg State Medical University (Pavlov First Saint Petersburg State Medical University).jpeg";
// import topRanking6 from "../Images/Pirogov Russian National Research Medical University (RNRMU).jpg";
// import topRanking7 from "../Images/University of Santo Tomas Faculty of Medicine and Surgery.jpg";
// import topRanking8 from "../Images/University of the Philippines Manila, College of Medicine.jpeg";

// // Classroom images
// import globalImage from "../Images/home_page_Image/class room.jpg";
// import globalImage2 from "../Images/home_page_Image/class room 2.jpg";

// const NAV_LINKS = ["Home", "About", "Services", "Countries", "Contact"];

// const COUNTRIES = [
//   { name: "Russia", flag: "🇷🇺", seats: "600+ seats", fee: "₹20-30L total" },
//   { name: "Georgia", flag: "🇬🇪", seats: "200+ seats", fee: "₹25-35L total" },
//   { name: "Uzbekistan", flag: "🇺🇿", seats: "400+ seats", fee: "₹18-28L total" },
//   { name: "Kazakhstan", flag: "🇰🇿", seats: "300+ seats", fee: "₹22-32L total" },
//   { name: "Kyrgyzstan", flag: "🇰🇬", seats: "250+ seats", fee: "₹15-25L total" },
//   { name: "Nepal", flag: "🇳🇵", seats: "150+ seats", fee: "₹35-50L total" },
// ];

// const TESTIMONIALS = [
//   {
//     name: "Priya Sharma",
//     loc: "Delhi → Russia",
//     text: "Edu-Hawk guided me every step of the way. No hidden charges, clear advice. Got into a top NMC-approved university in Russia!",
//     stars: 5,
//   },
//   {
//     name: "Rahul Verma",
//     loc: "Mumbai → Georgia",
//     text: "The counsellors were transparent and genuinely cared about my future. Best decision to trust Edu-Hawk for my MBBS abroad journey.",
//     stars: 5,
//   },
//   {
//     name: "Ananya Patel",
//     loc: "Ahmedabad → Kazakhstan",
//     text: "From application to post-arrival, they supported me fully. I feel confident about my FMGE preparation with their guidance.",
//     stars: 5,
//   },
// ];

// const HERO_SLIDES = [
//   {
//     image:
//       "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
//     title: "Study MBBS in Russia",
//     subtitle:
//       "Top NMC-approved universities • Affordable fees • Safe & Recognized",
//     cta: "Get Free Counselling",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1920",
//     title: "MBBS in Georgia – Modern & Affordable",
//     subtitle: "English medium • European standards • Low cost of living",
//     cta: "Explore Georgia Options",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
//     title: "Kazakhstan & Kyrgyzstan – Best Value",
//     subtitle: "₹15–32 Lakh total • No entrance exam • Direct admission",
//     cta: "Compare Packages",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1920",
//     title: "Your Trusted MBBS Abroad Partner",
//     subtitle:
//       "2000+ students placed • Transparent process • End-to-end support",
//     cta: "Start Your Journey Today",
//   },
// ];

// const mbbsOptions = [
//   {
//     country: "Bangladesh",
//     fees: "24 Lakhs to 41 Lakhs",
//     link: "https://eduhawk.in/study-mbbs-in-bangladesh.html",
//   },
//   {
//     country: "Russia",
//     fees: "24 Lakhs to 41 Lakhs",
//     link: "https://eduhawk.in/study-mbbs-in-bangladesh.html",
//   },
//   {
//     country: "Uzbekistan",
//     fees: "16 Lakhs to 21 Lakhs",
//     link: "https://eduhawk.in/study-mbbs-in-uzbekistan.html",
//   },
//   {
//     country: "Kyrgyzstan",
//     fees: "14 Lakhs to 21 Lakhs",
//     link: "https://eduhawk.in/study-mbbs-in-kyrgyzstan.html",
//   },
//   {
//     country: "Egypt",
//     fees: "31 Lakhs to 36 Lakhs",
//     link: "https://eduhawk.in/study-mbbs-in-egypt.html",
//   },
//   {
//     country: "Kazakhstan",
//     fees: "16 Lakhs to 23 Lakhs",
//     link: "https://eduhawk.in/study-mbbs-in-kazakhstan.html",
//   },
//   {
//     country: "Tajikistan",
//     fees: "17 Lakhs to 25 Lakhs",
//     link: "https://eduhawk.in/study-mbbs-in-tajikistan.html",
//   },
//   {
//     country: "Nepal",
//     fees: "20 Lakhs to 35 Lakhs",
//     link: "https://eduhawk.in/study-mbbs-in-nepal.html",
//   },
//   {
//     country: "Georgia",
//     fees: "18 Lakhs to 28 Lakhs",
//     link: "https://eduhawk.in/study-mbbs-in-georgia.html",
//   },
//   {
//     country: "Vietnam",
//     fees: "21 Lakhs to 30 Lakhs",
//     link: "https://eduhawk.in/study-mbbs-in-vietnam.html",
//   },
// ];

// export default function HeroSection() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [activeNav, setActiveNav] = useState("Home");
//   const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
//   const [currentTestimonial, setCurrentTestimonial] = useState(0);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     country: "",
//     message: "",
//   });

//   const [isOpen, setIsOpen] = useState(true);


//    const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch("http://localhost:8000/api/query/create", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("Form Submitted Successfully");

//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           city: "",
//           country: "",
//         });

//         setIsOpen(false);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   // Hero carousel auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
//     }, 5500);
//     return () => clearInterval(interval);
//   }, []);

//   // Testimonial carousel auto-slide


//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   alert("Thank you! Our counsellor will contact you within 24 hours.");
//   //   setFormData({ name: "", email: "", phone: "", country: "", message: "" });
//   // };

//   return (
//     <div className="min-h-screen bg-white font-sans">
// {isOpen && (
//   <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 sm:p-6 scroll-smooth">
//     {/* Main modal container */}
//     <div className="relative w-full max-w-4xl max-h-[90vh] sm:max-h-[88vh] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col">

//       {/* Elegant close button */}
//       <button
//         onClick={() => setIsOpen(false)}
//         className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-all duration-200"
//         aria-label="Close"
//       >
//         <X size={22} strokeWidth={2.5} />
//       </button>

//       {/* Horizontal layout wrapper */}
//       <div className="flex flex-col lg:flex-row h-full overflow-hidden">

//         {/* LEFT COLUMN: Benefits / Trust (fixed, no scroll) */}
//         <div className="lg:w-5/12 bg-gradient-to-br from-[#0a2342] via-[#1a4a7a] to-[#0d3460] text-white p-8 sm:p-10 flex flex-col justify-between hidden lg:flex">
//           <div>
//             <div className="text-4xl mb-6">🌍</div>
//             <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
//               Your MBBS Abroad Journey Starts Here
//             </h2>
//             <p className="text-teal-100 text-base mb-8">
//               Trusted by 2,000+ Indian students • Transparent process • NMC-approved universities only
//             </p>

//             <ul className="space-y-5 text-base">
//               <li className="flex items-start gap-3">
//                 <span className="text-2xl">🎯</span>
//                 <span>Free expert 1-on-1 counselling</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-2xl">🔍</span>
//                 <span>Best university match as per your NEET & budget</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-2xl">🛡️</span>
//                 <span>End-to-end support: visa, travel, FMGE guidance</span>
//               </li>
//               <li className="flex items-start gap-3">
//                 <span className="text-2xl">💰</span>
//                 <span>No hidden charges – 100% transparent</span>
//               </li>
//             </ul>
//           </div>

//           <div className="mt-1 text-sm text-teal-200">
//             <p className="font-medium">Popular Destinations</p>
//             <div className="flex flex-wrap gap-1">
//               <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Russia</span>
//               <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Georgia</span>
//               <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Kazakhstan</span>
//               <span className="bg-white/20 px-3 py-1 rounded-full text-xs">Kyrgyzstan</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT COLUMN: Form + Header (scrollable on small height) */}
//         <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10 scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-transparent">

//           {/* Mobile-only header (benefits summary) */}
//           <div className="lg:hidden text-center mb-6">
//             <h2 className="text-2xl font-bold text-gray-800 mb-2">
//               MBBS Abroad Counselling
//             </h2>
//             <p className="text-gray-600 text-sm">
//               Free • Expert • Trusted by 2000+ students
//             </p>
//           </div>

//           {/* Form */}
//           <form className="space-y-5">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Full Name *
//                 </label>
//                 <input
//                   type="text"
//                   required
//                   placeholder="Enter your full name"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/40 outline-none transition bg-gray-50"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Email *
//                 </label>
//                 <input
//                   type="email"
//                   required
//                   placeholder="your.email@gmail.com"
//                   className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/40 outline-none transition bg-gray-50"
//                 />
//               </div>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Phone Number (+91) *
//               </label>
//               <input
//                 type="tel"
//                 required
//                 placeholder="+91 98765 43210"
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/40 outline-none transition bg-gray-50"
//               />
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Current City *
//               </label>
//               <select
//                 required
//                 defaultValue=""
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/40 outline-none bg-gray-50"
//               >
//                 <option value="" disabled>Select city</option>
//                 <option>Indore</option>
//                 <option>Bhopal</option>
//                 <option>Delhi</option>
//                 <option>Mumbai</option>
//                 <option>Pune</option>
//                 <option>Other</option>
//               </select>
//             </div>

//             <div>
//               <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                 Interested Countries (can select multiple)
//               </label>
            


//                <select
//                 required
//                 defaultValue=""
//                 className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/40 outline-none bg-gray-50"
//               >
//                <option>Russia</option>
//                 <option>Georgia</option>
//                 <option>Kazakhstan</option>
//                 <option>Kyrgyzstan</option>
//                 <option>Uzbekistan</option>
//                 <option>Philippines</option>
//                 <option>Nepal</option>
//                 <option>Bangladesh</option>
//               </select>
//             </div>

//             <button
              
//               onClick={handleSubmit}
//               className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 mt-2"
//             >
//               Get Free Counselling Now →
//             </button>

//             <p className="text-center text-sm text-teal-700 font-medium mt-3">
//               Worth ₹4,999 – 100% Free Today!
//             </p>

//             <p className="text-center text-xs text-gray-500 mt-5">
//               By submitting, you agree to our Terms & Privacy Policy
//             </p>
//           </form>

//           {/* Small trust badge at bottom */}
//           <div className="mt-8 text-center text-xs text-gray-500">
//             <p>Secure & Confidential • We never spam</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// )}

//       <section className="relative">
//         {/* Full-screen width carousel */}
//         <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
//           {HERO_SLIDES.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//                 index === currentHeroSlide ? "opacity-100" : "opacity-0"
//               }`}
//             >
//               <img
//                 src={slide.image}
//                 alt={slide.title}
//                 className="w-full h-full object-cover brightness-[0.85]"
//               />

//               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent/30" />

//               <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10">
//                 <div className="text-center max-w-5xl">
//                   <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
//                     Your MBBS Abroad Journey
//                     <br />
//                     <span className="text-[#d4a853]">{slide.title}</span>
//                   </h1>

//                   <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg">
//                     {slide.subtitle}
//                   </p>

//                   <button className="bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 text-lg md:text-xl">
//                     {slide.cta} →
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}

//           <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
//             {HERO_SLIDES.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentHeroSlide(i)}
//                 className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-md ${
//                   i === currentHeroSlide
//                     ? "bg-[#d4a853] scale-125 ring-2 ring-[#d4a853]/60"
//                     : "bg-white/60 hover:bg-white/90"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         <div className="max-w-6xl mx-auto px-6 -mt-20 sm:-mt-24 relative z-10">
//           <div className="bg-white/95 backdrop-blur-lg border border-[#d4a853]/30 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10">
//             {[
//               { n: "2000+", l: "Students Placed" },
//               { n: "6", l: "Countries" },
//               { n: "50+", l: "Universities" },
//               { n: "100%", l: "NMC Approved" },
//             ].map((s, i) => (
//               <div key={i} className="text-center">
//                 <div className="text-[#d4a853] text-4xl md:text-5xl font-extrabold">
//                   {s.n}
//                 </div>
//                 <div className="text-[#0a2342] text-sm md:text-base uppercase tracking-wider mt-2 font-semibold">
//                   {s.l}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ──────────────────────────────────────────────── */}
//       {/* The rest of your sections remain unchanged */}
//       {/* ──────────────────────────────────────────────── */}

//       <section className="bg-gradient-to-br from-[#0a2342] via-[#1a4a7a] to-[#0d3460] py-20 md:py-28 px-5 sm:px-8 lg:px-12 text-center relative overflow-hidden">
//         <div className="absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#d4a853]/10 pointer-events-none" />
//         <div className="absolute -bottom-20 -left-20 w-64 sm:w-80 h-64 sm:h-40 rounded-full bg-[#d4a853]/5 pointer-events-none" />

//         <div className="max-w-5xl mx-auto relative">
//           <p className="text-[#d4a853] uppercase tracking-wider text-sm md:text-base font-medium mb-6">
//             🏥 NMC-Approved Universities Abroad
//           </p>
//           <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8">
//             Your MBBS Abroad Journey
//             <br />
//             <span className="text-[#d4a853]">Starts with Right Guidance</span>
//           </h1>
//           <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 md:mb-12 font-light leading-relaxed">
//             Trusted MBBS abroad consultants for Indian students. Transparent
//             counselling, no hidden charges, and end-to-end support from
//             application to post-arrival.
//           </p>
//           <div className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-8">
//             <button className="bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-4 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
//               Book Free Counselling →
//             </button>
//             <button className="border-2 border-[#d4a853]/60 text-white px-10 py-4 rounded-lg font-medium hover:bg-[#d4a853]/10 transition-all duration-300 text-sm sm:text-base">
//               Explore Countries
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="py-8 md:py-10 px-5 sm:px-6 lg:px-10 bg-[#faf8f4]">
//         <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
//           <div>
//             <div className="w-14 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mb-4 h-1" />
//             <p className="text-[#d4a853] uppercase tracking-widest text-xs font-medium mb-3">
//               Who We Are
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#0a2342] leading-tight mb-5">
//               MBBS counselling &<br />
//               consultancy services.
//             </h2>
//             <p className="text-gray-700 leading-relaxed mb-4 text-base">
//               <strong className="text-[#0a2342] font-semibold">
//                 Edu-Hawk Worldwide
//               </strong>{" "}
//               is a professional team of experienced education advisors
//               specializing in MBBS counselling abroad services. We guide Indian
//               students toward admission in NMC-approved medical universities
//               through transparent & ethical counselling.
//             </p>
//             <p className="text-gray-700 leading-relaxed mb-4 text-base">
//               As trusted overseas medical education consultants, we provide
//               personalized guidance based on your academic profile, budget, and
//               long-term career goals — ensuring the right country, university,
//               and eligibility for practice in India.
//             </p>
//             <p className="text-gray-700 leading-relaxed text-base">
//               We believe MBBS abroad should be a{" "}
//               <em>planned and safe decision</em>, supported by correct guidance,
//               honest counselling — no hidden charges, only genuine information.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//             {[
//               {
//                 icon: "🎯",
//                 title: "Personalized Counselling",
//                 desc: "Guidance matched to your profile & budget",
//               },
//               {
//                 icon: "✅",
//                 title: "NMC Approved Only",
//                 desc: "Only recognized universities recommended",
//               },
//               {
//                 icon: "💰",
//                 title: "No Hidden Charges",
//                 desc: "100% transparent fee structure",
//               },
//               {
//                 icon: "🤝",
//                 title: "End-to-End Support",
//                 desc: "Application to post-arrival assistance",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="bg-white rounded-xl p-5 border border-[#e8d5b0]/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
//               >
//                 <div className="text-4xl mb-3">{item.icon}</div>
//                 <h4 className="font-bold text-[#0a2342] mb-2 text-base">
//                   {item.title}
//                 </h4>
//                 <p className="text-gray-600 text-sm leading-relaxed">
//                   {item.desc}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <div className="container mx-auto px-4 py-12 md:py-10 px-5 sm:px-6 lg:px-10">
//         <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
//           <div className="md:col-span-4">
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto md:max-w-none">
//               <img
//                 src={univercity}
//                 alt="MBBS Admission Abroad"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h5 className="text-xl font-bold text-gray-800 mb-3">
//                   MBBS Admission in Abroad
//                 </h5>
//                 <p className="text-gray-600 mb-6">
//                   Expert Assistance for MBBS Admission in Renowned Abroad
//                   Institutions.
//                 </p>
//                 <a
//                   href="/contact"
//                   className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
//                 >
//                   Get In Touch
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="md:col-span-8">
//             <div className="bg-white rounded-xl shadow-lg overflow-hidden">
//               <div className="bg-blue-950 text-white text-center py-4 font-semibold text-lg">
//                 WHAT WE PROVIDE
//               </div>
//               <div className="p-6">
//                 <blockquote className="text-gray-700 italic mb-6">
//                   <p className="mb-4">
//                     With our assistance, you can bid farewell to the
//                     complexities often associated with MBBS admission abroad. We
//                     streamline the entire process, sparing you from any
//                     unnecessary hassle and ensuring a seamless experience every
//                     step of the way.
//                   </p>
//                   <footer className="text-gray-500 text-sm not-italic">
//                     Trust us to be your reliable partner in realizing your
//                     aspirations for MBBS admission in foreign universities.
//                     Let's embark on this transformative journey together.{" "}
//                     <cite className="font-medium">— EDU HAWK</cite>
//                   </footer>
//                 </blockquote>

//                 <ul className="space-y-3 text-gray-700">
//                   <li className="flex items-start">
//                     <span className="text-blue-600 mr-3">→</span>
//                     Discover Global Opportunities: Pursue MBBS Education Beyond
//                     Borders
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-blue-600 mr-3">→</span>
//                     Expert Guidance for Your MBBS Journey: Navigate the
//                     Admission Process with Ease
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-blue-600 mr-3">→</span>
//                     Benefits of Studying Abroad: Enhance Your Medical Education
//                     Experience
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-blue-600 mr-3">→</span>
//                     Unlocking Doors to Medical Excellence: Your Key to College
//                     Admission Success
//                   </li>
//                   <li className="flex items-start">
//                     <span className="text-blue-600 mr-3">→</span>
//                     Counseling Compass: Directing You Towards Your Medical
//                     School Destiny
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4 md:px-10">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
//             <div className="text-center md:text-left">
//               <img
//                 src={icon1}
//                 alt="Application Process"
//                 className="w-24 h-24 mx-auto md:mx-0 mb-6"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Application Process
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 We believe that your entire MBBS journey is our
//                 responsibility—from the beginning until you settle in your new
//                 college. We provide complete student assistance, including
//                 application support, invitation letters, pre-departure
//                 briefings, and post-arrival support. Our goal is not just
//                 admission but helping students choose the right pathways and
//                 prepare for FMGE/NExT eligibility in India. We provide
//                 one-to-one personalised guidance to every student, understanding
//                 that each student has different goals and needs...
//               </p>
//             </div>

//             <div className="text-center md:text-left">
//               <img
//                 src={icon2}
//                 alt="Perfect Counselling"
//                 className="w-24 h-24 mx-auto md:mx-0 mb-6"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Perfect Counselling
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 Begin your journey towards your dreams with Edu Hawk Worldwide,
//                 your trusted partner for MBBS abroad. If you are planning to
//                 study MBBS abroad, our expert MBBS abroad counselling team
//                 guides you at every step. We help you choose the right country
//                 and university based on your budget, NEET score, and career
//                 goals. Our MBBS abroad counseling also supports you with
//                 admissions, the visa process, education loans, and insurance
//                 guidance. With proper planning and transparent advice, you can
//                 confidently study MBBS abroad and build a successful medical
//                 career. Your dream of MBBS abroad begins here with the right
//                 guidance.
//               </p>
//             </div>

//             <div className="text-center md:text-left">
//               <img
//                 src={icon3}
//                 alt="Accurate Information"
//                 className="w-24 h-24 mx-auto md:mx-0 mb-6"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Accurate Information
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 At Edu Hawk Worldwide, we are committed to providing accurate
//                 and reliable information for students planning to study abroad.
//                 We carefully collect verified details about universities,
//                 including campus environment, eligibility criteria,
//                 qualifications, application process, admission requirements, and
//                 arrival procedures. Our team uses trusted sources to ensure
//                 every piece of information is clear and up-to-date. We
//                 understand that choosing the right university is a big decision,
//                 so we focus on transparency and clarity. With complete and
//                 precise guidance, we help you make confident and informed
//                 choices for your educational journey.
//               </p>
//             </div>

//             <div className="text-center md:text-left">
//               <img
//                 src={icon4}
//                 alt="Proper Assistance"
//                 className="w-24 h-24 mx-auto md:mx-0 mb-6"
//               />
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">
//                 Proper Assistance
//               </h3>
//               <p className="text-gray-600 leading-relaxed">
//                 At Edu Hawk Worldwide, we provide complete support for students
//                 planning to study MBBS abroad. Our expert MBBS abroad
//                 counselling ensures you receive step-by-step guidance throughout
//                 the process. From helping you study MBBS abroad to final
//                 university enrollment, we stay with you at every stage. Our
//                 services for MBBS abroad include admission assistance, visa
//                 processing, travel arrangements, scholarship guidance, and
//                 accommodation support. Through professional MBBS abroad
//                 counselling, we also guide you during departure and arrival
//                 procedures so your transition is smooth. If you face any
//                 challenge while planning to study MBBS abroad, our expert is
//                 always ready to support you. Your success in MBBS abroad is our
//                 top priority.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-16">
//         <h4 className="text-3xl font-bold text-center text-gray-800 mb-10">
//           TOP MEDICAL COLLEGES
//         </h4>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
//           {[
//             {
//               name: "Peking University Health Science Center",
//               img: topRanking1,
//             },
//             {
//               name: "Shanghai Jiao Tong University School of Medicine",
//               img: topRanking2,
//             },
//             {
//               name: "Tsinghua University School of Medicine",
//               img: topRanking3,
//             },
//             {
//               name: "First Moscow State Medical University (Sechenov)",
//               img: topRanking4,
//             },
//             {
//               name: "Saint Petersburg State Medical University",
//               img: topRanking5,
//             },
//             {
//               name: "Pirogov Russian National Research Medical University",
//               img: topRanking6,
//             },
//             {
//               name: "University of Santo Tomas Faculty of Medicine",
//               img: topRanking7,
//             },
//             {
//               name: "University of the Philippines Manila, College of Medicine",
//               img: topRanking8,
//             },
//           ].map((college, index) => (
//             <div
//               key={index}
//               className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
//             >
//               <img
//                 src={college.img}
//                 alt={college.name}
//                 className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
//                 <div className="p-4 w-full">
//                   <a
//                     href="#"
//                     className="text-white font-medium text-sm block hover:underline"
//                   >
//                     {college.name}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <section className="py-12 md:py-16 bg-gray-50">
//         <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
//             <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//               <div className="relative overflow-hidden h-64 md:h-80">
//                 <img
//                   src={globalImage}
//                   alt="Medical university classroom"
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />
//               </div>

//               <div className="p-6 md:p-8">
//                 <h5 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
//                   Edu Hawk: Your Bridge to Global Education
//                 </h5>
//                 <p className="text-gray-700 leading-relaxed text-base">
//                   Embarking on a journey to study MBBS abroad is a life-changing
//                   decision, and at Edu Hawk, we're dedicated to making that
//                   journey as seamless and rewarding as possible...
//                 </p>
//               </div>
//             </div>

//             <div className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
//               <div className="relative overflow-hidden h-64 md:h-80">
//                 <img
//                   src={globalImage2}
//                   alt="Modern medical lecture hall"
//                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />
//               </div>

//               <div className="p-6 md:p-8">
//                 <h5 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">
//                   Redefining Application Excellence: The Edu Hawk Advantage
//                 </h5>
//                 <p className="text-gray-700 leading-relaxed text-base">
//                   What truly sets Edu Hawk apart is our commitment to excellence
//                   and innovation...
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="py-10 md:py-14 bg-white">
//         <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
//           <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
//             Other MBBS Options for Indian Students
//           </h2>

//           <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider"
//                   >
//                     Country
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider"
//                   >
//                     Average Tuition Fees (INR)
//                   </th>
//                 </tr>
//               </thead>

//               <tbody className="bg-white divide-y divide-gray-100">
//                 {mbbsOptions.map((option, index) => (
//                   <tr
//                     key={index}
//                     className="hover:bg-blue-50/50 transition-colors duration-150"
//                   >
//                     <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                       <a
//                         href={option.link}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="text-blue-700 hover:text-blue-900 hover:underline transition-colors"
//                       >
//                         Study MBBS in {option.country}
//                       </a>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
//                       {option.fees}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <p className="mt-6 text-sm text-gray-500 text-center md:text-left">
//             * Fees are approximate and may vary depending on university, hostel,
//             and other charges. Always verify latest information from official
//             sources.
//           </p>
//         </div>
//       </section>

//       <section className="py-20 md:py-24 px-5 sm:px-8 lg:px-12 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-16">
//             <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mx-auto mb-5" />
//             <p className="text-[#d4a853] uppercase tracking-widest text-xs md:text-sm font-medium mb-4">
//               Get In Touch
//             </p>
//             <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2342] mb-6">
//               Talk to Our Team
//             </h2>
//             <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
//               Have questions about building your MBBS career abroad? Our
//               counselling team is ready to help you plan the perfect path.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
//                     Full Name
//                   </label>
//                   <input
//                     className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/30 bg-gray-50 transition"
//                     placeholder="John Doe"
//                     value={formData.name}
//                     onChange={(e) =>
//                       setFormData({ ...formData, name: e.target.value })
//                     }
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/30 bg-gray-50 transition"
//                     placeholder="you@email.com"
//                     value={formData.email}
//                     onChange={(e) =>
//                       setFormData({ ...formData, email: e.target.value })
//                     }
//                     required
//                   />
//                 </div>
//               </div>

//               <div className="grid md:grid-cols-2 gap-6">
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
//                     Phone Number
//                   </label>
//                   <input
//                     className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/30 bg-gray-50 transition"
//                     placeholder="+91 00000 00000"
//                     value={formData.phone}
//                     onChange={(e) =>
//                       setFormData({ ...formData, phone: e.target.value })
//                     }
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
//                     Preferred Country
//                   </label>
//                   <select
//                     className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/30 bg-gray-50 transition"
//                     value={formData.country}
//                     onChange={(e) =>
//                       setFormData({ ...formData, country: e.target.value })
//                     }
//                   >
//                     <option value="">Select country</option>
//                     {COUNTRIES.map((c) => (
//                       <option key={c.name} value={c.name}>
//                         {c.flag} {c.name}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">
//                   Message
//                 </label>
//                 <textarea
//                   rows={5}
//                   className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/30 bg-gray-50 transition resize-y"
//                   placeholder="Tell us about your academic profile, budget, and any queries..."
//                   value={formData.message}
//                   onChange={(e) =>
//                     setFormData({ ...formData, message: e.target.value })
//                   }
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-4 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
//               >
//                 Send Message →
//               </button>
//             </form>

//             <div className="space-y-6">
//               {[
//                 {
//                   icon: "📞",
//                   title: "Phone",
//                   detail: "+91 98765 43210",
//                   sub: "Mon–Sat, 9 AM – 7 PM",
//                 },
//                 {
//                   icon: "📧",
//                   title: "Email",
//                   detail: "info@eduhawk.com",
//                   sub: "We reply within 24 hours",
//                 },
//                 {
//                   icon: "📍",
//                   title: "Office",
//                   detail: "Pioneer Square, New Delhi",
//                   sub: "India, 110001",
//                 },
//                 {
//                   icon: "🕒",
//                   title: "Office Hours",
//                   detail: "Mon–Fri: 9 AM – 6 PM",
//                   sub: "Sat: 10 AM – 4 PM",
//                 },
//               ].map((item, i) => (
//                 <div
//                   key={i}
//                   className="flex gap-6 items-start p-6 bg-[#faf8f4] rounded-xl border border-[#e8d5b0]/70"
//                 >
//                   <div className="w-14 h-14 bg-gradient-to-br from-[#d4a853] to-[#f0c070] rounded-full flex items-center justify-center text-2xl shrink-0 text-[#0a2342]">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <div className="text-[#d4a853] text-xs uppercase tracking-widest font-bold mb-1">
//                       {item.title}
//                     </div>
//                     <div className="font-semibold text-[#0a2342] text-lg">
//                       {item.detail}
//                     </div>
//                     <div className="text-gray-600 text-sm mt-1">{item.sub}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState, useEffect } from "react";

import icon1 from "../Images/icons/ux-design_2998253.svg";
import icon2 from "../Images/icons/selling_12091247.svg";
import icon3 from "../Images/icons/ux-design_2998253.svg";
import icon4 from "../Images/icons/selling_12091247.svg";
import { X } from "lucide-react";

import univercity from "../Images/university-image/singapore.jpg";
import topRanking1 from "../Images/Peking University Health Science Center.jpg";
import topRanking2 from "../Images/Shanghai Jiao Tong University School of Medicine.png";
import topRanking3 from "../Images/Tsinghua University School of Medicine.jpg";
import topRanking4 from "../Images/First Moscow State Medical University (Sechenov University).jpg";
import topRanking5 from "../Images/Saint Petersburg State Medical University (Pavlov First Saint Petersburg State Medical University).jpeg";
import topRanking6 from "../Images/Pirogov Russian National Research Medical University (RNRMU).jpg";
import topRanking7 from "../Images/University of Santo Tomas Faculty of Medicine and Surgery.jpg";
import topRanking8 from "../Images/University of the Philippines Manila, College of Medicine.jpeg";

import globalImage from "../Images/home_page_Image/class room.jpg";
import globalImage2 from "../Images/home_page_Image/class room 2.jpg";

const NAV_LINKS = ["Home", "About", "Services", "Countries", "Contact"];

const COUNTRIES = [
  { name: "Russia", flag: "🇷🇺", seats: "600+ seats", fee: "₹20-30L total" },
  { name: "Georgia", flag: "🇬🇪", seats: "200+ seats", fee: "₹25-35L total" },
  { name: "Uzbekistan", flag: "🇺🇿", seats: "400+ seats", fee: "₹18-28L total" },
  { name: "Kazakhstan", flag: "🇰🇿", seats: "300+ seats", fee: "₹22-32L total" },
  { name: "Kyrgyzstan", flag: "🇰🇬", seats: "250+ seats", fee: "₹15-25L total" },
  { name: "Nepal", flag: "🇳🇵", seats: "150+ seats", fee: "₹35-50L total" },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    loc: "Delhi → Russia",
    text: "Edu-Hawk guided me every step of the way. No hidden charges, clear advice. Got into a top NMC-approved university in Russia!",
    stars: 5,
  },
  {
    name: "Rahul Verma",
    loc: "Mumbai → Georgia",
    text: "The counsellors were transparent and genuinely cared about my future. Best decision to trust Edu-Hawk for my MBBS abroad journey.",
    stars: 5,
  },
  {
    name: "Ananya Patel",
    loc: "Ahmedabad → Kazakhstan",
    text: "From application to post-arrival, they supported me fully. I feel confident about my FMGE preparation with their guidance.",
    stars: 5,
  },
];

const HERO_SLIDES = [
  {
    image:
      "https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=1920",
    title: "Study MBBS in Russia",
    subtitle:
      "Top NMC-approved universities • Affordable fees • Safe & Recognized",
    cta: "Get Free Counselling",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1920",
    title: "MBBS in Georgia – Modern & Affordable",
    subtitle: "English medium • European standards • Low cost of living",
    cta: "Explore Georgia Options",
  },
  {
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1920",
    title: "Kazakhstan & Kyrgyzstan – Best Value",
    subtitle: "₹15–32 Lakh total • No entrance exam • Direct admission",
    cta: "Compare Packages",
  },
  {
    image:
      "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&q=80&w=1920",
    title: "Your Trusted MBBS Abroad Partner",
    subtitle:
      "2000+ students placed • Transparent process • End-to-end support",
    cta: "Start Your Journey Today",
  },
];

const mbbsOptions = [
  {
    country: "Bangladesh",
    fees: "24 Lakhs to 41 Lakhs",
    link: "https://eduhawk.in/study-mbbs-in-bangladesh.html",
  },
  {
    country: "Russia",
    fees: "24 Lakhs to 41 Lakhs",
    link: "https://eduhawk.in/study-mbbs-in-bangladesh.html",
  },
  {
    country: "Uzbekistan",
    fees: "16 Lakhs to 21 Lakhs",
    link: "https://eduhawk.in/study-mbbs-in-uzbekistan.html",
  },
  {
    country: "Kyrgyzstan",
    fees: "14 Lakhs to 21 Lakhs",
    link: "https://eduhawk.in/study-mbbs-in-kyrgyzstan.html",
  },
  {
    country: "Egypt",
    fees: "31 Lakhs to 36 Lakhs",
    link: "https://eduhawk.in/study-mbbs-in-egypt.html",
  },
  {
    country: "Kazakhstan",
    fees: "16 Lakhs to 23 Lakhs",
    link: "https://eduhawk.in/study-mbbs-in-kazakhstan.html",
  },
  {
    country: "Tajikistan",
    fees: "17 Lakhs to 25 Lakhs",
    link: "https://eduhawk.in/study-mbbs-in-tajikistan.html",
  },
  {
    country: "Nepal",
    fees: "20 Lakhs to 35 Lakhs",
    link: "https://eduhawk.in/study-mbbs-in-nepal.html",
  },
  {
    country: "Georgia",
    fees: "18 Lakhs to 28 Lakhs",
    link: "https://eduhawk.in/study-mbbs-in-georgia.html",
  },
  {
    country: "Vietnam",
    fees: "21 Lakhs to 30 Lakhs",
    link: "https://eduhawk.in/study-mbbs-in-vietnam.html",
  },
];

// ─── Separate state for the popup modal form ───────────────────────────────
const EMPTY_MODAL_FORM = {
  name: "",
  email: "",
  phone: "",
  city: "",
  country: "",
};

// ─── Separate state for the contact-section form ───────────────────────────
const EMPTY_CONTACT_FORM = {
  name: "",
  email: "",
  phone: "",
  country: "",
  message: "",
};

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("Home");
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // ── Modal form state ──────────────────────────────────────────────────────
  const [modalForm, setModalForm] = useState(EMPTY_MODAL_FORM);
  const [isOpen, setIsOpen] = useState(true);

  // ── Contact section form state ────────────────────────────────────────────
  const [contactForm, setContactForm] = useState(EMPTY_CONTACT_FORM);

  // ── Shared API call ────────────────────────────────────────────────────────
  const submitToApi = async (payload) => {
    const res = await fetch("http://localhost:8000/api/query/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return res.json();
  };

  // ── Modal submit ──────────────────────────────────────────────────────────
  const handleModalSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await submitToApi(modalForm);
      if (data.success) {
        alert("Form Submitted Successfully");
        setModalForm(EMPTY_MODAL_FORM);
        setIsOpen(false);
      } else {
        alert(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  // ── Contact section submit ────────────────────────────────────────────────
  const handleContactSubmit = async (e) => {
    e.preventDefault();
    try {
      // Backend expects: name, email, phone, city, country
      // Contact form has message instead of city — send city as empty string
      const payload = {
        name: contactForm.name,
        email: contactForm.email,
        phone: contactForm.phone,
        city: "",          // not collected in contact form
        country: contactForm.country,
      };
      const data = await submitToApi(payload);
      if (data.success) {
        alert("Message sent successfully! We'll contact you within 24 hours.");
        setContactForm(EMPTY_CONTACT_FORM);
      } else {
        alert(data.message || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
  };

  // Hero carousel auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── POPUP MODAL ──────────────────────────────────────────────────── */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 sm:p-6">
          <div className="relative w-full max-w-4xl max-h-[90vh] sm:max-h-[88vh] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col">

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-white/90 shadow-md hover:bg-gray-100 text-gray-700 hover:text-gray-900 transition-all duration-200"
              aria-label="Close"
            >
              <X size={22} strokeWidth={2.5} />
            </button>

            <div className="flex flex-col lg:flex-row h-full overflow-hidden">

              {/* LEFT – benefits panel */}
              <div className="lg:w-5/12 bg-gradient-to-br from-[#0a2342] via-[#1a4a7a] to-[#0d3460] text-white p-8 sm:p-10 flex-col justify-between hidden lg:flex">
                <div>
                  <div className="text-4xl mb-6">🌍</div>
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-tight">
                    Your MBBS Abroad Journey Starts Here
                  </h2>
                  <p className="text-teal-100 text-base mb-8">
                    Trusted by 2,000+ Indian students • Transparent process • NMC-approved universities only
                  </p>
                  <ul className="space-y-5 text-base">
                    <li className="flex items-start gap-3"><span className="text-2xl">🎯</span><span>Free expert 1-on-1 counselling</span></li>
                    <li className="flex items-start gap-3"><span className="text-2xl">🔍</span><span>Best university match as per your NEET &amp; budget</span></li>
                    <li className="flex items-start gap-3"><span className="text-2xl">🛡️</span><span>End-to-end support: visa, travel, FMGE guidance</span></li>
                    <li className="flex items-start gap-3"><span className="text-2xl">💰</span><span>No hidden charges – 100% transparent</span></li>
                  </ul>
                </div>
                <div className="mt-1 text-sm text-teal-200">
                  <p className="font-medium mb-2">Popular Destinations</p>
                  <div className="flex flex-wrap gap-1">
                    {["Russia", "Georgia", "Kazakhstan", "Kyrgyzstan"].map((c) => (
                      <span key={c} className="bg-white/20 px-3 py-1 rounded-full text-xs">{c}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT – scrollable form */}
              <div className="flex-1 overflow-y-auto px-6 py-8 sm:px-10 sm:py-10 scrollbar-thin scrollbar-thumb-teal-400 scrollbar-track-transparent">

                {/* Mobile header */}
                <div className="lg:hidden text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">MBBS Abroad Counselling</h2>
                  <p className="text-gray-600 text-sm">Free • Expert • Trusted by 2000+ students</p>
                </div>

                {/* ── MODAL FORM ── */}
                <form onSubmit={handleModalSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Enter your full name"
                        value={modalForm.name}
                        onChange={(e) => setModalForm({ ...modalForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/40 outline-none transition bg-gray-50"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1.5">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="your.email@gmail.com"
                        value={modalForm.email}
                        onChange={(e) => setModalForm({ ...modalForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/40 outline-none transition bg-gray-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number (+91) *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={modalForm.phone}
                      onChange={(e) => setModalForm({ ...modalForm, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/40 outline-none transition bg-gray-50"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Current City *</label>
                    <select
                      name="city"
                      required
                      value={modalForm.city}
                      onChange={(e) => setModalForm({ ...modalForm, city: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/40 outline-none bg-gray-50"
                    >
                      <option value="" disabled>Select city</option>
                      {["Indore", "Bhopal", "Delhi", "Mumbai", "Pune", "Other"].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Interested Country
                    </label>
                    <select
                      name="country"
                      required
                      value={modalForm.country}
                      onChange={(e) => setModalForm({ ...modalForm, country: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-200/40 outline-none bg-gray-50"
                    >
                      <option value="" disabled>Select country</option>
                      {["Russia", "Georgia", "Kazakhstan", "Kyrgyzstan", "Uzbekistan", "Philippines", "Nepal", "Bangladesh"].map((c) => (
                        <option key={c}>{c}</option>
                      ))}
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 mt-2"
                  >
                    Get Free Counselling Now →
                  </button>

                  <p className="text-center text-sm text-teal-700 font-medium mt-3">
                    Worth ₹4,999 – 100% Free Today!
                  </p>
                  <p className="text-center text-xs text-gray-500 mt-5">
                    By submitting, you agree to our Terms &amp; Privacy Policy
                  </p>
                </form>

                <div className="mt-8 text-center text-xs text-gray-500">
                  <p>Secure &amp; Confidential • We never spam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── HERO CAROUSEL ────────────────────────────────────────────────── */}
      <section className="relative">
        <div className="relative w-full h-[70vh] min-h-[520px] overflow-hidden">
          {HERO_SLIDES.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentHeroSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover brightness-[0.85]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/35 to-transparent/30" />
              <div className="absolute inset-0 flex items-center justify-center px-5 sm:px-10">
                <div className="text-center max-w-5xl">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4 md:mb-6 drop-shadow-2xl">
                    Your MBBS Abroad Journey
                    <br />
                    <span className="text-[#d4a853]">{slide.title}</span>
                  </h1>
                  <p className="text-lg sm:text-xl md:text-2xl text-white/95 font-medium mb-8 md:mb-12 max-w-4xl mx-auto drop-shadow-lg">
                    {slide.subtitle}
                  </p>
                  <button className="bg-gradient-to-r from-[#d4a853] via-[#e0b76b] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1.5 transition-all duration-300 text-lg md:text-xl">
                    {slide.cta} →
                  </button>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center gap-4 z-20">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentHeroSlide(i)}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-400 shadow-md ${
                  i === currentHeroSlide
                    ? "bg-[#d4a853] scale-125 ring-2 ring-[#d4a853]/60"
                    : "bg-white/60 hover:bg-white/90"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 -mt-20 sm:-mt-24 relative z-10">
          <div className="bg-white/95 backdrop-blur-lg border border-[#d4a853]/30 rounded-2xl shadow-2xl grid grid-cols-2 md:grid-cols-4 gap-6 p-8 md:p-10">
            {[
              { n: "2000+", l: "Students Placed" },
              { n: "6", l: "Countries" },
              { n: "50+", l: "Universities" },
              { n: "100%", l: "NMC Approved" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-[#d4a853] text-4xl md:text-5xl font-extrabold">{s.n}</div>
                <div className="text-[#0a2342] text-sm md:text-base uppercase tracking-wider mt-2 font-semibold">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNER SECTION ───────────────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#0a2342] via-[#1a4a7a] to-[#0d3460] py-20 md:py-28 px-5 sm:px-8 lg:px-12 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[#d4a853]/10 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 sm:w-80 h-64 sm:h-40 rounded-full bg-[#d4a853]/5 pointer-events-none" />
        <div className="max-w-5xl mx-auto relative">
          <p className="text-[#d4a853] uppercase tracking-wider text-sm md:text-base font-medium mb-6">
            🏥 NMC-Approved Universities Abroad
          </p>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 md:mb-8">
            Your MBBS Abroad Journey
            <br />
            <span className="text-[#d4a853]">Starts with Right Guidance</span>
          </h1>
          <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-3xl mx-auto mb-10 md:mb-12 font-light leading-relaxed">
            Trusted MBBS abroad consultants for Indian students. Transparent counselling, no hidden charges, and
            end-to-end support from application to post-arrival.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-5 md:gap-8">
            <button className="bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-4 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-sm sm:text-base">
              Book Free Counselling →
            </button>
            <button className="border-2 border-[#d4a853]/60 text-white px-10 py-4 rounded-lg font-medium hover:bg-[#d4a853]/10 transition-all duration-300 text-sm sm:text-base">
              Explore Countries
            </button>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────────────────────── */}
      <section className="py-8 md:py-10 px-5 sm:px-6 lg:px-10 bg-[#faf8f4]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div className="w-14 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mb-4 h-1" />
            <p className="text-[#d4a853] uppercase tracking-widest text-xs font-medium mb-3">Who We Are</p>
            <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-[#0a2342] leading-tight mb-5">
              MBBS counselling &<br />consultancy services.
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4 text-base">
              <strong className="text-[#0a2342] font-semibold">Edu-Hawk Worldwide</strong> is a professional team of
              experienced education advisors specializing in MBBS counselling abroad services. We guide Indian students
              toward admission in NMC-approved medical universities through transparent &amp; ethical counselling.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4 text-base">
              As trusted overseas medical education consultants, we provide personalized guidance based on your academic
              profile, budget, and long-term career goals — ensuring the right country, university, and eligibility for
              practice in India.
            </p>
            <p className="text-gray-700 leading-relaxed text-base">
              We believe MBBS abroad should be a <em>planned and safe decision</em>, supported by correct guidance,
              honest counselling — no hidden charges, only genuine information.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: "🎯", title: "Personalized Counselling", desc: "Guidance matched to your profile & budget" },
              { icon: "✅", title: "NMC Approved Only", desc: "Only recognized universities recommended" },
              { icon: "💰", title: "No Hidden Charges", desc: "100% transparent fee structure" },
              { icon: "🤝", title: "End-to-End Support", desc: "Application to post-arrival assistance" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-[#e8d5b0]/60 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <h4 className="font-bold text-[#0a2342] mb-2 text-base">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE PROVIDE ──────────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-12 md:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-sm mx-auto md:max-w-none">
              <img src={univercity} alt="MBBS Admission Abroad" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h5 className="text-xl font-bold text-gray-800 mb-3">MBBS Admission in Abroad</h5>
                <p className="text-gray-600 mb-6">Expert Assistance for MBBS Admission in Renowned Abroad Institutions.</p>
                <a href="/contact" className="inline-block bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition">
                  Get In Touch
                </a>
              </div>
            </div>
          </div>

          <div className="md:col-span-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-950 text-white text-center py-4 font-semibold text-lg">WHAT WE PROVIDE</div>
              <div className="p-6">
                <blockquote className="text-gray-700 italic mb-6">
                  <p className="mb-4">
                    With our assistance, you can bid farewell to the complexities often associated with MBBS admission
                    abroad. We streamline the entire process, sparing you from any unnecessary hassle and ensuring a
                    seamless experience every step of the way.
                  </p>
                  <footer className="text-gray-500 text-sm not-italic">
                    Trust us to be your reliable partner in realizing your aspirations for MBBS admission in foreign
                    universities. Let's embark on this transformative journey together.{" "}
                    <cite className="font-medium">— EDU HAWK</cite>
                  </footer>
                </blockquote>
                <ul className="space-y-3 text-gray-700">
                  {[
                    "Discover Global Opportunities: Pursue MBBS Education Beyond Borders",
                    "Expert Guidance for Your MBBS Journey: Navigate the Admission Process with Ease",
                    "Benefits of Studying Abroad: Enhance Your Medical Education Experience",
                    "Unlocking Doors to Medical Excellence: Your Key to College Admission Success",
                    "Counseling Compass: Directing You Towards Your Medical School Destiny",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-3">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {[
              { icon: icon1, alt: "Application Process", title: "Application Process", desc: "We believe that your entire MBBS journey is our responsibility—from the beginning until you settle in your new college. We provide complete student assistance, including application support, invitation letters, pre-departure briefings, and post-arrival support. Our goal is not just admission but helping students choose the right pathways and prepare for FMGE/NExT eligibility in India. We provide one-to-one personalised guidance to every student, understanding that each student has different goals and needs..." },
              { icon: icon2, alt: "Perfect Counselling", title: "Perfect Counselling", desc: "Begin your journey towards your dreams with Edu Hawk Worldwide, your trusted partner for MBBS abroad. If you are planning to study MBBS abroad, our expert MBBS abroad counselling team guides you at every step. We help you choose the right country and university based on your budget, NEET score, and career goals. Our MBBS abroad counseling also supports you with admissions, the visa process, education loans, and insurance guidance. With proper planning and transparent advice, you can confidently study MBBS abroad and build a successful medical career. Your dream of MBBS abroad begins here with the right guidance." },
              { icon: icon3, alt: "Accurate Information", title: "Accurate Information", desc: "At Edu Hawk Worldwide, we are committed to providing accurate and reliable information for students planning to study abroad. We carefully collect verified details about universities, including campus environment, eligibility criteria, qualifications, application process, admission requirements, and arrival procedures. Our team uses trusted sources to ensure every piece of information is clear and up-to-date. We understand that choosing the right university is a big decision, so we focus on transparency and clarity. With complete and precise guidance, we help you make confident and informed choices for your educational journey." },
              { icon: icon4, alt: "Proper Assistance", title: "Proper Assistance", desc: "At Edu Hawk Worldwide, we provide complete support for students planning to study MBBS abroad. Our expert MBBS abroad counselling ensures you receive step-by-step guidance throughout the process. From helping you study MBBS abroad to final university enrollment, we stay with you at every stage. Our services for MBBS abroad include admission assistance, visa processing, travel arrangements, scholarship guidance, and accommodation support. Through professional MBBS abroad counselling, we also guide you during departure and arrival procedures so your transition is smooth. If you face any challenge while planning to study MBBS abroad, our expert is always ready to support you. Your success in MBBS abroad is our top priority." },
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <img src={item.icon} alt={item.alt} className="w-24 h-24 mx-auto md:mx-0 mb-6" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── TOP MEDICAL COLLEGES ─────────────────────────────────────────── */}
      <div className="container mx-auto px-4 py-16">
        <h4 className="text-3xl font-bold text-center text-gray-800 mb-10">TOP MEDICAL COLLEGES</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { name: "Peking University Health Science Center", img: topRanking1 },
            { name: "Shanghai Jiao Tong University School of Medicine", img: topRanking2 },
            { name: "Tsinghua University School of Medicine", img: topRanking3 },
            { name: "First Moscow State Medical University (Sechenov)", img: topRanking4 },
            { name: "Saint Petersburg State Medical University", img: topRanking5 },
            { name: "Pirogov Russian National Research Medical University", img: topRanking6 },
            { name: "University of Santo Tomas Faculty of Medicine", img: topRanking7 },
            { name: "University of the Philippines Manila, College of Medicine", img: topRanking8 },
          ].map((college, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <img src={college.img} alt={college.name} className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-4 w-full">
                  <a href="#" className="text-white font-medium text-sm block hover:underline">{college.name}</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CLASSROOM CARDS ──────────────────────────────────────────────── */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-5 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              { img: globalImage, alt: "Medical university classroom", title: "Edu Hawk: Your Bridge to Global Education", desc: "Embarking on a journey to study MBBS abroad is a life-changing decision, and at Edu Hawk, we're dedicated to making that journey as seamless and rewarding as possible..." },
              { img: globalImage2, alt: "Modern medical lecture hall", title: "Redefining Application Excellence: The Edu Hawk Advantage", desc: "What truly sets Edu Hawk apart is our commitment to excellence and innovation..." },
            ].map((card, i) => (
              <div key={i} className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                <div className="relative overflow-hidden h-64 md:h-80">
                  <img src={card.img} alt={card.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />
                </div>
                <div className="p-6 md:p-8">
                  <h5 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-tight">{card.title}</h5>
                  <p className="text-gray-700 leading-relaxed text-base">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEES TABLE ───────────────────────────────────────────────────── */}
      <section className="py-10 md:py-14 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
            Other MBBS Options for Indian Students
          </h2>
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Country</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold uppercase tracking-wider">Average Tuition Fees (INR)</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-100">
                {mbbsOptions.map((option, index) => (
                  <tr key={index} className="hover:bg-blue-50/50 transition-colors duration-150">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <a href={option.link} target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 hover:underline transition-colors">
                        Study MBBS in {option.country}
                      </a>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{option.fees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-gray-500 text-center md:text-left">
            * Fees are approximate and may vary depending on university, hostel, and other charges. Always verify latest information from official sources.
          </p>
        </div>
      </section>

      {/* ── CONTACT SECTION ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-24 px-5 sm:px-8 lg:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="w-16 h-1 bg-gradient-to-r from-[#d4a853] to-[#f0c070] mx-auto mb-5" />
            <p className="text-[#d4a853] uppercase tracking-widest text-xs md:text-sm font-medium mb-4">Get In Touch</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0a2342] mb-6">Talk to Our Team</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-base md:text-lg leading-relaxed">
              Have questions about building your MBBS career abroad? Our counselling team is ready to help you plan the perfect path.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            {/* ── CONTACT FORM ── */}
            <form onSubmit={handleContactSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Full Name</label>
                  <input
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/30 bg-gray-50 transition"
                    placeholder="John Doe"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Email</label>
                  <input
                    type="email"
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/30 bg-gray-50 transition"
                    placeholder="you@email.com"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Phone Number</label>
                  <input
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/30 bg-gray-50 transition"
                    placeholder="+91 00000 00000"
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Preferred Country</label>
                  <select
                    className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/30 bg-gray-50 transition"
                    value={contactForm.country}
                    onChange={(e) => setContactForm({ ...contactForm, country: e.target.value })}
                  >
                    <option value="">Select country</option>
                    {COUNTRIES.map((c) => (
                      <option key={c.name} value={c.name}>{c.flag} {c.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm uppercase tracking-wide">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-5 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#d4a853] focus:ring-2 focus:ring-[#d4a853]/30 bg-gray-50 transition resize-y"
                  placeholder="Tell us about your academic profile, budget, and any queries..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                />
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-[#d4a853] to-[#f0c070] text-[#0a2342] font-bold uppercase tracking-wider px-10 py-4 rounded-lg shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                Send Message →
              </button>
            </form>

            {/* Contact info */}
            <div className="space-y-6">
              {[
                { icon: "📞", title: "Phone", detail: "+91 98765 43210", sub: "Mon–Sat, 9 AM – 7 PM" },
                { icon: "📧", title: "Email", detail: "info@eduhawk.com", sub: "We reply within 24 hours" },
                { icon: "📍", title: "Office", detail: "Pioneer Square, New Delhi", sub: "India, 110001" },
                { icon: "🕒", title: "Office Hours", detail: "Mon–Fri: 9 AM – 6 PM", sub: "Sat: 10 AM – 4 PM" },
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start p-6 bg-[#faf8f4] rounded-xl border border-[#e8d5b0]/70">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#d4a853] to-[#f0c070] rounded-full flex items-center justify-center text-2xl shrink-0 text-[#0a2342]">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[#d4a853] text-xs uppercase tracking-widest font-bold mb-1">{item.title}</div>
                    <div className="font-semibold text-[#0a2342] text-lg">{item.detail}</div>
                    <div className="text-gray-600 text-sm mt-1">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}