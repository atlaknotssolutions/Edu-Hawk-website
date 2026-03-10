
// // // import React from 'react';
// // // import { motion } from 'framer-motion';

// // // const containerVariants = {
// // //   hidden: { opacity: 0 },
// // //   visible: {
// // //     opacity: 1,
// // //     transition: {
// // //       staggerChildren: 0.15,
// // //       delayChildren: 0.3,
// // //     },
// // //   },
// // // };

// // // const itemVariants = {
// // //   hidden: { opacity: 0, y: 30 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     transition: { duration: 0.7, ease: 'easeOut' },
// // //   },
// // // };

// // // const slideLeft = {
// // //   hidden: { opacity: 0, x: -80 },
// // //   visible: {
// // //     opacity: 1,
// // //     x: 0,
// // //     transition: { duration: 0.9, ease: 'easeOut' },
// // //   },
// // // };

// // // const slideRight = {
// // //   hidden: { opacity: 0, x: 80 },
// // //   visible: {
// // //     opacity: 1,
// // //     x: 0,
// // //     transition: { duration: 0.9, ease: 'easeOut' },
// // //   },
// // // };

// // // const branchCardVariants = {
// // //   hidden: { opacity: 0, y: 40, scale: 0.92 },
// // //   visible: {
// // //     opacity: 1,
// // //     y: 0,
// // //     scale: 1,
// // //     transition: { duration: 0.6, ease: 'easeOut' },
// // //   },
// // //   hover: {
// // //     scale: 1.04,
// // //     boxShadow: '0 20px 35px -5px rgba(0, 0, 0, 0.1)',
// // //     transition: { duration: 0.3 },
// // //   },
// // // };

// // // const Contact = () => {
// // //   return (
// // //     <div className="min-h-screen bg-gray-50 font-poppins overflow-x-hidden">
// // //       {/* Hero Section */}
// // //       <motion.section
// // //         initial={{ opacity: 0 }}
// // //         animate={{ opacity: 1 }}
// // //         transition={{ duration: 1.2 }}
// // //         className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
// // //         style={{
// // //           backgroundImage: "url('/Images/Contact Us/student.jpg')",
// // //           backgroundBlendMode: 'multiply',
// // //           backgroundColor: 'rgba(0,0,0,0.55)',
// // //         }}
// // //       >
// // //         <motion.h1
// // //           initial={{ opacity: 0, scale: 0.85 }}
// // //           animate={{ opacity: 1, scale: 1 }}
// // //           transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
// // //           className="text-6xl md:text-8xl font-bold text-white tracking-wider drop-shadow-2xl"
// // //         >
// // //           CONTACT
// // //         </motion.h1>
// // //       </motion.section>

// // //       {/* Form + Map Section */}
// // //       <motion.section
// // //         variants={containerVariants}
// // //         initial="hidden"
// // //         whileInView="visible"
// // //         viewport={{ once: true, amount: 0.2 }}
// // //         className="py-16 md:py-24 bg-gray-100"
// // //       >
// // //         <div className="container mx-auto px-6 lg:px-8">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
// // //             {/* Left - Contact Form */}
// // //             <motion.div variants={slideLeft} className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
// // //               <h2 className="text-3xl md:text-4xl font-bold text-[#02145a] mb-6">
// // //                 Get In Touch
// // //               </h2>
// // //               <p className="text-gray-600 mb-8">
// // //                 We're here to assist you with any inquiries. Feel free to reach out!
// // //               </p>

// // //               <form className="space-y-6">
// // //                 <input type="hidden" name="access_key" value="91ca1d48-55b1-4399-abbc-1c86d822e804" />

// // //                 <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   <motion.div variants={itemVariants}>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       First Name
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       name="firstName"
// // //                       required
// // //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
// // //                       placeholder="Your first name"
// // //                     />
// // //                   </motion.div>

// // //                   <motion.div variants={itemVariants}>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Last Name
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       name="lastName"
// // //                       required
// // //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
// // //                       placeholder="Your last name"
// // //                     />
// // //                   </motion.div>
// // //                 </motion.div>

// // //                 <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   <motion.div variants={itemVariants}>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Email
// // //                     </label>
// // //                     <input
// // //                       type="email"
// // //                       name="email"
// // //                       required
// // //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
// // //                       placeholder="example@email.com"
// // //                     />
// // //                   </motion.div>

// // //                   <motion.div variants={itemVariants}>
// // //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Phone
// // //                     </label>
// // //                     <input
// // //                       type="tel"
// // //                       name="phone"
// // //                       required
// // //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
// // //                       placeholder="+91 .........."
// // //                     />
// // //                   </motion.div>
// // //                 </motion.div>

// // //                 <motion.div variants={itemVariants}>
// // //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// // //                     Message
// // //                   </label>
// // //                   <textarea
// // //                     name="message"
// // //                     rows={5}
// // //                     required
// // //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition resize-none"
// // //                     placeholder="How can we help you?"
// // //                   ></textarea>
// // //                 </motion.div>

// // //                 <motion.div variants={itemVariants}>
// // //                   <button
// // //                     type="submit"
// // //                     className="w-full bg-[#02145a] text-white py-4 rounded-lg font-semibold text-lg hover:bg-[#0a2a8c] hover:scale-[1.02] transition duration-300 shadow-md hover:shadow-lg"
// // //                   >
// // //                     Send Message
// // //                   </button>
// // //                 </motion.div>
// // //               </form>
// // //             </motion.div>

// // //             {/* Right - Map & Contact Info (Patna Main Office) */}
// // //             <motion.div variants={slideRight} className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
// // //               <h3 className="text-2xl font-bold text-[#02145a] mb-4">Our Main Office</h3>
// // //               <p className="text-gray-700 mb-6">
// // //                 I/J-1 Chandi Vyapar Bhawan, Exhibition Road, Patna - 800001
// // //               </p>

// // //               <div className="aspect-video rounded-lg overflow-hidden mb-6 shadow-inner">
// // //                 <iframe
// // //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.036366105497!2d77.22180587549842!3d28.568670675699693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25b6c992ab9%3A0x87fbc9cb56be469a!2sBajrang%20House%2C%20N-5%2C%20next%20to%20Aakash%20Institute%2C%20South%20Extension%20I%2C%20Block%20N%2C%20New%20Delhi%2C%20Delhi%20110003!5e0!3m2!1sen!2sin!4v1773053734632!5m2!1sen!2sin"
// // //                   width="100%"
// // //                   height="100%"
// // //                   style={{ border: 0 }}
// // //                   allowFullScreen=""
// // //                   loading="lazy"
// // //                   referrerPolicy="no-referrer-when-downgrade"
// // //                 ></iframe>

               
// // //               </div>

// // //               <h5 className="text-xl font-semibold text-[#02145a] mb-4">Quick Contact</h5>
// // //               <ul className="space-y-3 text-gray-700">
// // //                 <li className="flex items-center">
// // //                   <i className="fa-solid fa-phone mr-3 text-[#02145a]"></i>
// // //                   +91-76329 49984
// // //                 </li>
// // //                 <li className="flex items-center">
// // //                   <i className="fa-solid fa-envelope mr-3 text-[#02145a]"></i>
// // //                   info@eduhawk.in
// // //                 </li>
// // //                 <li className="flex items-center">
// // //                   <i className="fa-solid fa-location-dot mr-3 text-[#02145a]"></i>
// // //                   Exhibition Road, Patna
// // //                 </li>
// // //               </ul>
// // //             </motion.div>
// // //           </div>
// // //         </div>
// // //       </motion.section>

// // //       {/* Our Branches */}
// // //       <section className="py-16 bg-white">
// // //         <div className="container mx-auto px-6 lg:px-8">
// // //           <motion.h2
// // //             initial={{ opacity: 0, y: 30 }}
// // //             whileInView={{ opacity: 1, y: 0 }}
// // //             viewport={{ once: true }}
// // //             transition={{ duration: 0.8 }}
// // //             className="text-4xl font-bold text-center text-[#02145a] mb-12"
// // //           >
// // //             Our Branches
// // //           </motion.h2>

// // //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// // //             {[
// // //               {
// // //                 city: 'Patna',
// // //                 address: 'I/J-1 Chandi Vyapar Bhawan\nExhibition Road, Patna - 800001',
// // //                 mapLink:
// // //                   'https://www.google.com/maps/place/Chandi+Vyapar+Bhawan/@25.6092669,85.1358476,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed59dfe0ac4cef:0xff36d85d4504d946!8m2!3d25.6092669!4d85.1376174!16s%2Fg%2F11gl27zb88?entry=ttu',
// // //               },
// // //               {
// // //                 city: 'Delhi',
// // //                 address: 'N-5, South Extension Part-1\nNew Delhi - 110049',
// // //                 mapLink:
// // //                   'https://www.google.com/maps/search/N-5,+South+Extension+Part-1,+New+Delhi+110049',
// // //               },
// // //               {
// // //                 city: 'Lucknow',
// // //                 address: 'Shop No-5, Barkhurdarpur Godamba\nKursi Road, Lucknow',
// // //                 mapLink:
// // //                   'https://www.google.com/maps/search/Shop+No-5,+Barkhurdarpur+Godamba,+Kursi+Road,+Lucknow',
// // //               },
// // //             ].map((branch, idx) => (
// // //               <motion.div
// // //                 key={idx}
// // //                 variants={branchCardVariants}
// // //                 initial="hidden"
// // //                 whileInView="visible"
// // //                 whileHover="hover"
// // //                 viewport={{ once: true, amount: 0.3 }}
// // //                 className="bg-gray-50 rounded-xl shadow-lg p-8 text-center cursor-pointer"
// // //               >
// // //                 <h4 className="text-2xl font-bold text-[#02145a] mb-4">{branch.city}</h4>
// // //                 <p className="text-gray-600 mb-6 whitespace-pre-line">{branch.address}</p>
// // //                 <a
// // //                   href={branch.mapLink}
// // //                   target="_blank"
// // //                   rel="noopener noreferrer"
// // //                   className="inline-block bg-[#02145a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0a2a8c] transition"
// // //                 >
// // //                   View on Map
// // //                 </a>
// // //               </motion.div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

     
 
// // //     </div>
// // //   );
// // // };

// // // export default Contact;


// // import React, { useState } from 'react';
// // import { motion } from 'framer-motion';

// // const containerVariants = {
// //   hidden: { opacity: 0 },
// //   visible: {
// //     opacity: 1,
// //     transition: {
// //       staggerChildren: 0.15,
// //       delayChildren: 0.3,
// //     },
// //   },
// // };

// // const itemVariants = {
// //   hidden: { opacity: 0, y: 30 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     transition: { duration: 0.7, ease: 'easeOut' },
// //   },
// // };

// // const slideLeft = {
// //   hidden: { opacity: 0, x: -80 },
// //   visible: {
// //     opacity: 1,
// //     x: 0,
// //     transition: { duration: 0.9, ease: 'easeOut' },
// //   },
// // };

// // const slideRight = {
// //   hidden: { opacity: 0, x: 80 },
// //   visible: {
// //     opacity: 1,
// //     x: 0,
// //     transition: { duration: 0.9, ease: 'easeOut' },
// //   },
// // };

// // const branchCardVariants = {
// //   hidden: { opacity: 0, y: 40, scale: 0.92 },
// //   visible: {
// //     opacity: 1,
// //     y: 0,
// //     scale: 1,
// //     transition: { duration: 0.6, ease: 'easeOut' },
// //   },
// //   hover: {
// //     scale: 1.04,
// //     boxShadow: '0 20px 35px -5px rgba(0, 0, 0, 0.1)',
// //     transition: { duration: 0.3 },
// //   },
// // };

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     firstName: '',
// //     lastName: '',
// //     email: '',
// //     phone: '',
// //     message: '',
// //   });

// //   const [status, setStatus] = useState({ loading: false, message: '', error: false });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setStatus({ loading: true, message: '', error: false });

// //     try {
// //       const response = await fetch('http://localhost:8000/api/contact/create', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //         },
// //         body: JSON.stringify({
// //           username: `${formData.firstName} ${formData.lastName}`.trim(),
// //           email: formData.email,
// //           phone: formData.phone,
// //           subject: 'General Inquiry',           // ← You can add a subject field later
// //           message: formData.message,
// //         }),
// //       });

// //       const data = await response.json();

// //       if (response.ok) {
// //         setStatus({ loading: false, message: 'Message sent successfully!', error: false });
// //         setFormData({
// //           firstName: '',
// //           lastName: '',
// //           email: '',
// //           phone: '',
// //           message: '',
// //         });
// //       } else {
// //         setStatus({
// //           loading: false,
// //           message: data.message || 'Something went wrong. Please try again.',
// //           error: true,
// //         });
// //       }
// //     } catch (err) {
// //       setStatus({
// //         loading: false,
// //         message: 'Network error. Please check your connection.',
// //         error: true,
// //       });
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-50 font-poppins overflow-x-hidden">
// //       {/* Hero Section */}
// //       <motion.section
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         transition={{ duration: 1.2 }}
// //         className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
// //         style={{
// //           backgroundImage: "url('/Images/Contact Us/student.jpg')",
// //           backgroundBlendMode: 'multiply',
// //           backgroundColor: 'rgba(0,0,0,0.55)',
// //         }}
// //       >
// //         <motion.h1
// //           initial={{ opacity: 0, scale: 0.85 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
// //           className="text-6xl md:text-8xl font-bold text-white tracking-wider drop-shadow-2xl"
// //         >
// //           CONTACT
// //         </motion.h1>
// //       </motion.section>

// //       {/* Form + Map Section */}
// //       <motion.section
// //         variants={containerVariants}
// //         initial="hidden"
// //         whileInView="visible"
// //         viewport={{ once: true, amount: 0.2 }}
// //         className="py-16 md:py-24 bg-gray-100"
// //       >
// //         <div className="container mx-auto px-6 lg:px-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
// //             {/* Left - Contact Form */}
// //             <motion.div variants={slideLeft} className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
// //               <h2 className="text-3xl md:text-4xl font-bold text-[#02145a] mb-6">
// //                 Get In Touch
// //               </h2>
// //               <p className="text-gray-600 mb-8">
// //                 We're here to assist you with any inquiries. Feel free to reach out!
// //               </p>

// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <motion.div variants={itemVariants}>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       First Name
// //                     </label>
// //                     <input
// //                       type="text"
// //                       name="firstName"
// //                       value={formData.firstName}
// //                       onChange={handleChange}
// //                       required
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
// //                       placeholder="Your first name"
// //                     />
// //                   </motion.div>

// //                   <motion.div variants={itemVariants}>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Last Name
// //                     </label>
// //                     <input
// //                       type="text"
// //                       name="lastName"
// //                       value={formData.lastName}
// //                       onChange={handleChange}
// //                       required
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
// //                       placeholder="Your last name"
// //                     />
// //                   </motion.div>
// //                 </motion.div>

// //                 <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <motion.div variants={itemVariants}>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Email
// //                     </label>
// //                     <input
// //                       type="email"
// //                       name="email"
// //                       value={formData.email}
// //                       onChange={handleChange}
// //                       required
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
// //                       placeholder="example@email.com"
// //                     />
// //                   </motion.div>

// //                   <motion.div variants={itemVariants}>
// //                     <label className="block text-sm font-medium text-gray-700 mb-1">
// //                       Phone
// //                     </label>
// //                     <input
// //                       type="tel"
// //                       name="phone"
// //                       value={formData.phone}
// //                       onChange={handleChange}
// //                       required
// //                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
// //                       placeholder="+91 .........."
// //                     />
// //                   </motion.div>
// //                 </motion.div>

// //                 <motion.div variants={itemVariants}>
// //                   <label className="block text-sm font-medium text-gray-700 mb-1">
// //                     Message
// //                   </label>
// //                   <textarea
// //                     name="message"
// //                     rows={5}
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     required
// //                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition resize-none"
// //                     placeholder="How can we help you?"
// //                   ></textarea>
// //                 </motion.div>

// //                 {/* Status Message */}
// //                 {status.message && (
// //                   <motion.p
// //                     initial={{ opacity: 0 }}
// //                     animate={{ opacity: 1 }}
// //                     className={`text-center font-medium ${status.error ? 'text-red-600' : 'text-green-600'}`}
// //                   >
// //                     {status.message}
// //                   </motion.p>
// //                 )}

// //                 <motion.div variants={itemVariants}>
// //                   <motion.button
// //                     type="submit"
// //                     disabled={status.loading}
// //                     whileHover={{ scale: 1.02 }}
// //                     whileTap={{ scale: 0.98 }}
// //                     className={`w-full bg-[#02145a] text-white py-4 rounded-lg font-semibold text-lg shadow-md transition duration-300 flex items-center justify-center gap-3
// //                       ${status.loading ? 'cursor-not-allowed opacity-90' : 'hover:bg-[#0a2a8c] hover:shadow-lg'}`}
// //                   >
// //                     {status.loading ? (
// //                       <>
// //                         <motion.span
// //                           animate={{ rotate: 360 }}
// //                           transition={{ duration: 1.2, repeat: Infinity, ease: 'linear' }}
// //                           className="text-xl"
// //                         >
// //                           🤖
// //                         </motion.span>
// //                         Sending...
// //                       </>
// //                     ) : (
// //                       'Send Message'
// //                     )}
// //                   </motion.button>
// //                 </motion.div>
// //               </form>
// //             </motion.div>

// //             {/* Right - Map & Contact Info (Patna Main Office) */}
// //             <motion.div variants={slideRight} className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
// //               <h3 className="text-2xl font-bold text-[#02145a] mb-4">Our Main Office</h3>
// //               <p className="text-gray-700 mb-6">
// //                 I/J-1 Chandi Vyapar Bhawan, Exhibition Road, Patna - 800001
// //               </p>

// //               <div className="aspect-video rounded-lg overflow-hidden mb-6 shadow-inner">
// //                 <iframe
// //                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.036366105497!2d77.22180587549842!3d28.568670675699693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25b6c992ab9%3A0x87fbc9cb56be469a!2sBajrang%20House%2C%20N-5%2C%20next%20to%20Aakash%20Institute%2C%20South%20Extension%20I%2C%20Block%20N%2C%20New%20Delhi%2C%20Delhi%20110003!5e0!3m2!1sen!2sin!4v1773053734632!5m2!1sen!2sin"
// //                   width="100%"
// //                   height="100%"
// //                   style={{ border: 0 }}
// //                   allowFullScreen=""
// //                   loading="lazy"
// //                   referrerPolicy="no-referrer-when-downgrade"
// //                 ></iframe>
// //               </div>

// //               <h5 className="text-xl font-semibold text-[#02145a] mb-4">Quick Contact</h5>
// //               <ul className="space-y-3 text-gray-700">
// //                 <li className="flex items-center">
// //                   <i className="fa-solid fa-phone mr-3 text-[#02145a]"></i>
// //                   +91-76329 49984
// //                 </li>
// //                 <li className="flex items-center">
// //                   <i className="fa-solid fa-envelope mr-3 text-[#02145a]"></i>
// //                   info@eduhawk.in
// //                 </li>
// //                 <li className="flex items-center">
// //                   <i className="fa-solid fa-location-dot mr-3 text-[#02145a]"></i>
// //                   Exhibition Road, Patna
// //                 </li>
// //               </ul>
// //             </motion.div>
// //           </div>
// //         </div>
// //       </motion.section>

// //       {/* Our Branches */}
// //       <section className="py-16 bg-white">
// //         <div className="container mx-auto px-6 lg:px-8">
// //           <motion.h2
// //             initial={{ opacity: 0, y: 30 }}
// //             whileInView={{ opacity: 1, y: 0 }}
// //             viewport={{ once: true }}
// //             transition={{ duration: 0.8 }}
// //             className="text-4xl font-bold text-center text-[#02145a] mb-12"
// //           >
// //             Our Branches
// //           </motion.h2>

// //           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //             {[
// //               {
// //                 city: 'Patna',
// //                 address: 'I/J-1 Chandi Vyapar Bhawan\nExhibition Road, Patna - 800001',
// //                 mapLink:
// //                   'https://www.google.com/maps/place/Chandi+Vyapar+Bhawan/@25.6092669,85.1358476,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed59dfe0ac4cef:0xff36d85d4504d946!8m2!3d25.6092669!4d85.1376174!16s%2Fg%2F11gl27zb88?entry=ttu',
// //               },
// //               {
// //                 city: 'Delhi',
// //                 address: 'N-5, South Extension Part-1\nNew Delhi - 110049',
// //                 mapLink:
// //                   'https://www.google.com/maps/search/N-5,+South+Extension+Part-1,+New+Delhi+110049',
// //               },
// //               {
// //                 city: 'Lucknow',
// //                 address: 'Shop No-5, Barkhurdarpur Godamba\nKursi Road, Lucknow',
// //                 mapLink:
// //                   'https://www.google.com/maps/search/Shop+No-5,+Barkhurdarpur+Godamba,+Kursi+Road,+Lucknow',
// //               },
// //             ].map((branch, idx) => (
// //               <motion.div
// //                 key={idx}
// //                 variants={branchCardVariants}
// //                 initial="hidden"
// //                 whileInView="visible"
// //                 whileHover="hover"
// //                 viewport={{ once: true, amount: 0.3 }}
// //                 className="bg-gray-50 rounded-xl shadow-lg p-8 text-center cursor-pointer"
// //               >
// //                 <h4 className="text-2xl font-bold text-[#02145a] mb-4">{branch.city}</h4>
// //                 <p className="text-gray-600 mb-6 whitespace-pre-line">{branch.address}</p>
// //                 <a
// //                   href={branch.mapLink}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-block bg-[#02145a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0a2a8c] transition"
// //                 >
// //                   View on Map
// //                 </a>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   );
// // };

// // export default Contact;


// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15,
//       delayChildren: 0.3,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.7, ease: 'easeOut' },
//   },
// };

// const slideLeft = {
//   hidden: { opacity: 0, x: -80 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.9, ease: 'easeOut' },
//   },
// };

// const slideRight = {
//   hidden: { opacity: 0, x: 80 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.9, ease: 'easeOut' },
//   },
// };

// const branchCardVariants = {
//   hidden: { opacity: 0, y: 40, scale: 0.92 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: { duration: 0.6, ease: 'easeOut' },
//   },
//   hover: {
//     scale: 1.04,
//     boxShadow: '0 20px 35px -5px rgba(0, 0, 0, 0.1)',
//     transition: { duration: 0.3 },
//   },
// };

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     message: '',
//   });

//   const [status, setStatus] = useState({
//     loading: false,
//     message: '',
//     error: false,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus({ loading: true, message: '', error: false });

//     try {
//       const response = await fetch('http://localhost:8000/api/contact/create', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           username: `${formData.firstName} ${formData.lastName}`.trim(),
//           email: formData.email,
//           phone: formData.phone,
//           subject: 'General Inquiry', // you can make this dynamic later
//           message: formData.message,
//         }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setStatus({
//           loading: false,
//           message: 'Thank you! Your message has been sent successfully.',
//           error: false,
//         });
//         setFormData({
//           firstName: '',
//           lastName: '',
//           email: '',
//           phone: '',
//           message: '',
//         });
//       } else {
//         setStatus({
//           loading: false,
//           message: data.message || 'Failed to send message. Please try again.',
//           error: true,
//         });
//       }
//     } catch (err) {
//       setStatus({
//         loading: false,
//         message: 'Network error. Please check your internet connection.',
//         error: true,
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 font-poppins overflow-x-hidden">
//       {/* Hero Section */}
//       <motion.section
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1.2 }}
//         className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
//         style={{
//           backgroundImage: "url('/Images/Contact Us/student.jpg')",
//           backgroundBlendMode: 'multiply',
//           backgroundColor: 'rgba(0,0,0,0.55)',
//         }}
//       >
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.85 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
//           className="text-6xl md:text-8xl font-bold text-white tracking-wider drop-shadow-2xl"
//         >
//           CONTACT
//         </motion.h1>
//       </motion.section>

//       {/* Form + Map Section */}
//       <motion.section
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, amount: 0.2 }}
//         className="py-16 md:py-24 bg-gray-100"
//       >
//         <div className="container mx-auto px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {/* Left - Contact Form */}
//             <motion.div variants={slideLeft} className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
//               <h2 className="text-3xl md:text-4xl font-bold text-[#02145a] mb-6">
//                 Get In Touch
//               </h2>
//               <p className="text-gray-600 mb-8">
//                 We're here to assist you with any inquiries. Feel free to reach out!
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <motion.div variants={itemVariants}>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       First Name
//                     </label>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
//                       placeholder="Your first name"
//                     />
//                   </motion.div>

//                   <motion.div variants={itemVariants}>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Last Name
//                     </label>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
//                       placeholder="Your last name"
//                     />
//                   </motion.div>
//                 </motion.div>

//                 <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <motion.div variants={itemVariants}>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Email
//                     </label>
//                     <input
//                       type="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
//                       placeholder="example@email.com"
//                     />
//                   </motion.div>

//                   <motion.div variants={itemVariants}>
//                     <label className="block text-sm font-medium text-gray-700 mb-1">
//                       Phone
//                     </label>
//                     <input
//                       type="tel"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
//                       placeholder="+91 .........."
//                     />
//                   </motion.div>
//                 </motion.div>

//                 <motion.div variants={itemVariants}>
//                   <label className="block text-sm font-medium text-gray-700 mb-1">
//                     Message
//                   </label>
//                   <textarea
//                     name="message"
//                     rows={5}
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition resize-none"
//                     placeholder="How can we help you?"
//                   />
//                 </motion.div>

//                 {/* Status Message */}
//                 {status.message && (
//                   <motion.p
//                     initial={{ opacity: 0, y: 10 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     className={`text-center font-medium ${status.error ? 'text-red-600' : 'text-green-600'}`}
//                   >
//                     {status.message}
//                   </motion.p>
//                 )}

//                 <motion.div variants={itemVariants}>
//                   <motion.button
//                     type="submit"
//                     disabled={status.loading}
//                     whileHover={{ scale: status.loading ? 1 : 1.03 }}
//                     whileTap={{ scale: status.loading ? 1 : 0.97 }}
//                     className={`w-full bg-[#02145a] text-white py-4 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden
//                       ${status.loading 
//                         ? 'cursor-not-allowed bg-[#0f3a9e] scale-[1.01]' 
//                         : 'hover:bg-[#0a2a8c] hover:shadow-xl hover:scale-[1.03]'}`}
//                   >
//                     {status.loading ? (
//                       <div className="flex items-center gap-3">
//                         <motion.div
//                           animate={{
//                             rotate: 360,
//                             scale: [1, 1.15, 1],
//                           }}
//                           transition={{
//                             rotate: { duration: 1.8, repeat: Infinity, ease: 'linear' },
//                             scale: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
//                           }}
//                           className="text-2xl drop-shadow-md"
//                         >
//                           🤖
//                         </motion.div>
//                         <span>Sending...</span>
//                       </div>
//                     ) : (
//                       'Send Message'
//                     )}

//                     {status.loading && (
//                       <motion.div
//                         className="absolute inset-0 bg-white opacity-10"
//                         animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0.25, 0.1] }}
//                         transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
//                       />
//                     )}
//                   </motion.button>
//                 </motion.div>
//               </form>
//             </motion.div>

//             {/* Right - Map & Contact Info */}
//             <motion.div variants={slideRight} className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
//               <h3 className="text-2xl font-bold text-[#02145a] mb-4">Our Main Office</h3>
//               <p className="text-gray-700 mb-6">
//                 I/J-1 Chandi Vyapar Bhawan, Exhibition Road, Patna - 800001
//               </p>

//               <div className="aspect-video rounded-lg overflow-hidden mb-6 shadow-inner">
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.036366105497!2d77.22180587549842!3d28.568670675699693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25b6c992ab9%3A0x87fbc9cb56be469a!2sBajrang%20House%2C%20N-5%2C%20next%20to%20Aakash%20Institute%2C%20South%20Extension%20I%2C%20Block%20N%2C%20New%20Delhi%2C%20Delhi%20110003!5e0!3m2!1sen!2sin!4v1773053734632!5m2!1sen!2sin"
//                   width="100%"
//                   height="100%"
//                   style={{ border: 0 }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>

//               <h5 className="text-xl font-semibold text-[#02145a] mb-4">Quick Contact</h5>
//               <ul className="space-y-3 text-gray-700">
//                 <li className="flex items-center">
//                   <i className="fa-solid fa-phone mr-3 text-[#02145a]"></i>
//                   +91-76329 49984
//                 </li>
//                 <li className="flex items-center">
//                   <i className="fa-solid fa-envelope mr-3 text-[#02145a]"></i>
//                   info@eduhawk.in
//                 </li>
//                 <li className="flex items-center">
//                   <i className="fa-solid fa-location-dot mr-3 text-[#02145a]"></i>
//                   Exhibition Road, Patna
//                 </li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* Our Branches */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-6 lg:px-8">
//           <motion.h2
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-4xl font-bold text-center text-[#02145a] mb-12"
//           >
//             Our Branches
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               {
//                 city: 'Patna',
//                 address: 'I/J-1 Chandi Vyapar Bhawan\nExhibition Road, Patna - 800001',
//                 mapLink:
//                   'https://www.google.com/maps/place/Chandi+Vyapar+Bhawan/@25.6092669,85.1358476,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed59dfe0ac4cef:0xff36d85d4504d946!8m2!3d25.6092669!4d85.1376174!16s%2Fg%2F11gl27zb88?entry=ttu',
//               },
//               {
//                 city: 'Delhi',
//                 address: 'N-5, South Extension Part-1\nNew Delhi - 110049',
//                 mapLink:
//                   'https://www.google.com/maps/search/N-5,+South+Extension+Part-1,+New+Delhi+110049',
//               },
//               {
//                 city: 'Lucknow',
//                 address: 'Shop No-5, Barkhurdarpur Godamba\nKursi Road, Lucknow',
//                 mapLink:
//                   'https://www.google.com/maps/search/Shop+No-5,+Barkhurdarpur+Godamba,+Kursi+Road,+Lucknow',
//               },
//             ].map((branch, idx) => (
//               <motion.div
//                 key={idx}
//                 variants={branchCardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover="hover"
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="bg-gray-50 rounded-xl shadow-lg p-8 text-center cursor-pointer"
//               >
//                 <h4 className="text-2xl font-bold text-[#02145a] mb-4">{branch.city}</h4>
//                 <p className="text-gray-600 mb-6 whitespace-pre-line">{branch.address}</p>
//                 <a
//                   href={branch.mapLink}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-block bg-[#02145a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0a2a8c] transition"
//                 >
//                   View on Map
//                 </a>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;


import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import ReCAPTCHA from 'react-google-recaptcha';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' },
  },
};

const branchCardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
  hover: {
    scale: 1.04,
    boxShadow: '0 20px 35px -5px rgba(0, 0, 0, 0.1)',
    transition: { duration: 0.3 },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState({
    loading: false,
    message: '',
    error: false,
  });

  const recaptchaRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, message: '', error: false });

    const captchaToken = recaptchaRef.current?.getValue();

    if (!captchaToken) {
      setStatus({
        loading: false,
        message: 'Please complete the reCAPTCHA verification',
        error: true,
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/contact/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          phone: formData.phone || undefined,
          subject: 'General Inquiry',
          message: formData.message,
          captcha: captchaToken,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          loading: false,
          message: 'Thank you! Your message has been sent successfully.',
          error: false,
        });

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          message: '',
        });

        if (recaptchaRef.current) {
          recaptchaRef.current.reset();
        }
      } else {
        setStatus({
          loading: false,
          message: data.message || 'Failed to send message. Please try again.',
          error: true,
        });
      }
    } catch (err) {
      setStatus({
        loading: false,
        message: 'Network error. Please check your internet connection.',
        error: true,
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('/Images/Contact Us/student.jpg')",
          backgroundBlendMode: 'multiply',
          backgroundColor: 'rgba(0,0,0,0.55)',
        }}
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, ease: 'easeOut', delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold text-white tracking-wider drop-shadow-2xl"
        >
          CONTACT
        </motion.h1>
      </motion.section>

      {/* Form + Map Section */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 md:py-24 bg-gray-100"
      >
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left - Contact Form */}
            <motion.div variants={slideLeft} className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#02145a] mb-6">
                Get In Touch
              </h2>
              <p className="text-gray-600 mb-8">
                We're here to assist you with any inquiries. Feel free to reach out!
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
                      placeholder="Your first name"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
                      placeholder="Your last name"
                    />
                  </motion.div>
                </motion.div>

                <motion.div variants={containerVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
                      placeholder="example@email.com"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition"
                      placeholder="+91 .........."
                    />
                  </motion.div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#02145a] focus:border-[#02145a] outline-none transition resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </motion.div>

                {/* reCAPTCHA */}
                <motion.div variants={itemVariants} className="flex justify-center md:justify-start pt-2">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey='6Ld7i4UsAAAAAN8tOsoFs-yyJwbCxzUANMmE1mFD'
                    theme="light"
                  />
                </motion.div>

                {/* Status Message */}
                {status.message && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`text-center font-medium ${status.error ? 'text-red-600' : 'text-green-600'}`}
                  >
                    {status.message}
                  </motion.p>
                )}

                {/* Robot Submit Button */}
                <motion.div variants={itemVariants}>
                  <motion.button
                    type="submit"
                    disabled={status.loading}
                    whileHover={{ scale: status.loading ? 1 : 1.03 }}
                    whileTap={{ scale: status.loading ? 1 : 0.97 }}
                    className={`w-full bg-[#02145a] text-white py-4 rounded-lg font-semibold text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden
                      ${status.loading 
                        ? 'cursor-not-allowed bg-[#0f3a9e] scale-[1.01]' 
                        : 'hover:bg-[#0a2a8c] hover:shadow-xl hover:scale-[1.03]'}`}
                  >
                    {status.loading ? (
                      <div className="flex items-center gap-3">
                        <motion.div
                          animate={{
                            rotate: 360,
                            scale: [1, 1.15, 1],
                          }}
                          transition={{
                            rotate: { duration: 1.8, repeat: Infinity, ease: 'linear' },
                            scale: { duration: 1.2, repeat: Infinity, ease: 'easeInOut' },
                          }}
                          className="text-2xl drop-shadow-md"
                        >
                          🤖
                        </motion.div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      'Send Message'
                    )}

                    {status.loading && (
                      <motion.div
                        className="absolute inset-0 bg-white opacity-10"
                        animate={{ scale: [1, 1.8, 1], opacity: [0.1, 0.25, 0.1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      />
                    )}
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Right - Map & Contact Info (Patna Main Office) */}
            <motion.div variants={slideRight} className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#02145a] mb-4">Our Main Office</h3>
              <p className="text-gray-700 mb-6">
                I/J-1 Chandi Vyapar Bhawan, Exhibition Road, Patna - 800001
              </p>

              <div className="aspect-video rounded-lg overflow-hidden mb-6 shadow-inner">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.036366105497!2d77.22180587549842!3d28.568670675699693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce25b6c992ab9%3A0x87fbc9cb56be469a!2sBajrang%20House%2C%20N-5%2C%20next%20to%20Aakash%20Institute%2C%20South%20Extension%20I%2C%20Block%20N%2C%20New%20Delhi%2C%20Delhi%20110003!5e0!3m2!1sen!2sin!4v1773053734632!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <h5 className="text-xl font-semibold text-[#02145a] mb-4">Quick Contact</h5>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <i className="fa-solid fa-phone mr-3 text-[#02145a]"></i>
                  +91-76329 49984
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-envelope mr-3 text-[#02145a]"></i>
                  info@eduhawk.in
                </li>
                <li className="flex items-center">
                  <i className="fa-solid fa-location-dot mr-3 text-[#02145a]"></i>
                  Exhibition Road, Patna
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Our Branches */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold text-center text-[#02145a] mb-12"
          >
            Our Branches
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                city: 'Patna',
                address: 'I/J-1 Chandi Vyapar Bhawan\nExhibition Road, Patna - 800001',
                mapLink:
                  'https://www.google.com/maps/place/Chandi+Vyapar+Bhawan/@25.6092669,85.1358476,17z/data=!3m1!4b1!4m6!3m5!1s0x39ed59dfe0ac4cef:0xff36d85d4504d946!8m2!3d25.6092669!4d85.1376174!16s%2Fg%2F11gl27zb88?entry=ttu',
              },
              {
                city: 'Delhi',
                address: 'N-5, South Extension Part-1\nNew Delhi - 110049',
                mapLink:
                  'https://www.google.com/maps/search/N-5,+South+Extension+Part-1,+New+Delhi+110049',
              },
              {
                city: 'Lucknow',
                address: 'Shop No-5, Barkhurdarpur Godamba\nKursi Road, Lucknow',
                mapLink:
                  'https://www.google.com/maps/search/Shop+No-5,+Barkhurdarpur+Godamba,+Kursi+Road,+Lucknow',
              },
            ].map((branch, idx) => (
              <motion.div
                key={idx}
                variants={branchCardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true, amount: 0.3 }}
                className="bg-gray-50 rounded-xl shadow-lg p-8 text-center cursor-pointer"
              >
                <h4 className="text-2xl font-bold text-[#02145a] mb-4">{branch.city}</h4>
                <p className="text-gray-600 mb-6 whitespace-pre-line">{branch.address}</p>
                <a
                  href={branch.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#02145a] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0a2a8c] transition"
                >
                  View on Map
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;