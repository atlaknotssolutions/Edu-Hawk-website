import React, { useState } from "react";
import RussiaFlag from "../../Images/Russia/russia header threejpg.jpg";
import kernal from "../../Images/university-image/kazakistan.jpg";
import Russianflag2 from "../../Images/country flag png/Kazakhstan.svg";
import MARISTATEUNIVERSITY from "../../Images/Kazakhstan/Asfendiyarov Kazakh National Medical University.jpg";
import ORELSTATEUNIVERSITY from "../../Images/Kazakhstan/Karaganda State Medical University.jpg";
import ORENBURGSTATEUNIVERSITY from "../../Images/Kazakhstan/Kokshetau State University.jpg";
import TVERSTATEMEDICALUNIVERSITY from "../../Images/Kazakhstan/Semey State Medical University.jpg";
import AltaiStateMedicalUniversity from "../../Images/Kazakhstan/South-Kazakhstan-Medical-Academy.jpg";
import AltaiStateMedicalUniversity2 from "../../Images/Kazakhstan/West Kazakhstan Marat Ospanov State Medical University.jpg";

const Kazakhstan = () => {
  const [showMoreAbout, setShowMoreAbout] = useState(false);
  const [showMoreClimate, setShowMoreClimate] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* ==================== HEADER CAROUSEL ==================== */}
      <div className="relative h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/f/f6/2.%E0%A6%B6%E0%A6%BE%E0%A6%AA%E0%A6%B2%E0%A6%BE_%E0%A6%9A%E0%A6%A4%E0%A7%8D%E0%A6%AC%E0%A6%B0.jpg"
            alt="Kremlin Bridge City"
            className="w-full h-full object-cover brightness-75"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl">
              STUDY MBBS IN Kazakhstan
            </h1>
          </div>
        </div>

        {/* You can duplicate more slides like this or use carousel library */}
      </div>

      {/* ==================== MAIN CONTENT ==================== */}
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Intro Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
          <div>
            <img
              src={Russianflag2}
              alt="Russia flag"
              className="w-32 md:w-40  rounded shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900">
              Explore MBBS Opportunities in Kazakhstan 2026–2027
            </h2>
          </div>
        </div>

        {/* About Russia + Image */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left text-blue-900 mb-6">
              About Kyrgyzstan
            </h2>
            <p className="text-lg leading-relaxed text-gray-700">
              Studying MBBS in Kyrgyzstan is gaining popularity among Indian
              students due to its well-equipped medical colleges, experienced
              faculty, and low fees. The course generally takes five to six
              years to complete and is conducted in the English language,
              ensuring international standards of education. In recent years,
              Kyrgyzstan has emerged as a popular destination for Indian MBBS
              students who want to pursue the course from abroad. The country is
              witnessing a steady growth rate of 21.54% every year for Indian
              MBBS students.
            </p>

            <p className="mt-4 text-lg leading-relaxed text-gray-700">
              Compared to other countries, the MBBS course in Kyrgyzstan is a
              more affordable option for Indian students. The admission criteria
              for MBBS courses in Kyrgyzstan are simple. The student needs a
              minimum of 50% marks in physics, chemistry, and biology in the
              final year of schooling. The best part is that the medium of
              instruction for MBBS courses in Kyrgyzstan is English, ensuring
              that international students are also able to pursue the course
              from these universities. Students from all over the world choose
              Kyrgyzstan as the destination for pursuing MBBS courses.
            </p>

            {showMoreAbout ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                The extensive training and services provided in Kyrgyzstan are a great contribution to the development of the student's career, ensuring a fruitful and impactful career for the student.
While Kyrgyzstan is a popular destination for MBBS courses, there are some more countries like Kyrgyzstan, China, Nepal, Germany, Philippines, Ukraine, and Kyrgyzstan that also offer affordable courses for MBBS students.
              </p>
            ) : null}

            <button
              onClick={() => setShowMoreAbout(!showMoreAbout)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreAbout ? "Show Less" : "Read More"}
            </button>
          </div>

          <div>
            <img
              src={kernal}
              alt="Kremlin"
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Quick Information + About MBBS */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Left – Quick Info Table */}
          <div>
            <h3 className="text-2xl font-bold text-center text-blue-900 mb-6">
              Quick Information – Study MBBS in Russia
            </h3>

            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-300 text-left">
                <tbody>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Recognition</td>
                    <td className="p-4">NMC & WHO approved</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Eligibility</td>
                    <td className="p-4">50% in PCB aggregate</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">Course Duration</td>
                    <td className="p-4">6 Years</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">NEET</td>
                    <td className="p-4">Compulsory</td>
                  </tr>
                  <tr className="bg-gray-100">
                    <td className="p-4 font-semibold">IELTS/TOEFL</td>
                    <td className="p-4">Not Required</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">Medium of Teaching</td>
                    <td className="p-4">English</td>
                  </tr>

                  <tr>
                    <td className="p-4 font-semibold">
                      Universities Recognition
                    </td>
                    <td className="p-4">NMC & WHO-approved</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Right – About MBBS */}
          <div>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center md:text-left">
              About MBBS in Kazakhstan
            </h3>
            <p className="text-lg leading-relaxed text-gray-700">
            India is one of the top choices for Indian students interested in studying MBBS in Kyrgyzstan due to the high level of security and safety provided by the government.

            </p>

            {showMoreClimate ? (
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
               The duration of the program is five years, and the cost of education is relatively lower in comparison to many other countries.
Considering the alternatives, the cost of education in Kyrgyzstan is relatively lower in comparison to many other countries, making it a better option for Indian students to study MBBS in Kyrgyzstan.
The cost of education in Kyrgyzstan is moderate, and the standard of MBBS education in Kyrgyzstan is world-class.
This makes Kyrgyzstan a better option for students in Asian countries.
The medium of instruction in the universities in Kyrgyzstan is English, which makes the language barrier easier to cross.
Moreover, direct admission to top-class universities in Kyrgyzstan is available without the need to sit in the entrance exams and take the IELTS and TOEFL tests.
Considering the climatic conditions in Kyrgyzstan and India, the conditions in these two countries differ greatly.
Kyrgyzstan is located in the temperate zone, which makes the climate relatively moderate and suitable for the residents.
The country comprises a variety of different climatic zones, and the average temperature in the winter is around -20 degrees Celsius, whereas in the autumn and summer seasons, the temperature is as high as 25 degrees Celsius.
The residential areas in Kyrgyzstan are also equipped with heating systems, which makes the environment comfortable during the winter.

              </p>
            ) : null}

            <button
              onClick={() => setShowMoreClimate(!showMoreClimate)}
              className="mt-6 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
              {showMoreClimate ? "Show Less" : "Read More"}
            </button>
          </div>
        </div>

        {/* ==================== UNIVERSITIES GRID ==================== */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Top Medical Universities in Russia
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Asfendiyarov Kazakh Medical College",
                img: MARISTATEUNIVERSITY,
              },
              {
                name: "Karaganda State Medical University",
                img: ORELSTATEUNIVERSITY,
              },
              {
                name: "Kokshetau State University",
                img: ORENBURGSTATEUNIVERSITY,
              },
              {
                name: "Semey State Medical University",
                img: TVERSTATEMEDICALUNIVERSITY,
              },
              {
                name: "South-Kazakhstan-Medical-Academy",
                img: AltaiStateMedicalUniversity,
              },
              {
                name: "West Kazakhstan Marat Ospanov State Medical University",
                img: AltaiStateMedicalUniversity2,
              },
            ].map((uni, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={uni.img}
                  alt={uni.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-blue-900">
                    {uni.name}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==================== ADVANTAGES + COST ==================== */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
              Advantages of Studying MBBS in Russia 2025–2026
            </h2>

            <div className="space-y-6">
              <div>
                <h5 className="text-xl font-semibold">
                  1. High-Quality Education
                </h5>
                <p className="text-gray-700">
                  Globally recognized universities with strong academic
                  standards.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  2. Affordable Tuition Fees
                </h5>
                <p className="text-gray-700">
                  Significantly lower than many Western countries.
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  3. No Additional Entrance Exams
                </h5>
                <p className="text-gray-700">
                  (NEET required for Indian students only)
                </p>
              </div>
              <div>
                <h5 className="text-xl font-semibold">
                  4. English-Medium Programs
                </h5>
                <p className="text-gray-700">
                  No language barrier for most international students.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              Cost of Study MBBS in Russia
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              The cost of the <strong> MBBS course in Russia</strong> is very
              low for Indian students who want to pursue their{" "}
              <strong>MBBS</strong> course in Russia. Russia is a very demanding
              country for Indian students who want to pursue their MBBS course.
              The government of Russia has funded the fee structure for the MBBS
              course. Studying MBBS in Russia is an easy task for Indian
              students compared to other countries. Studying MBBS in Russia is
              very cheap. The universities in Russia provide a smooth platform
              for <strong>international students</strong> so that they don't
              need to pay the high tuition fees. Apart from this, there is no
              need to pay any donations.
            </p>
          </div>
        </div>

        {/* You can continue adding more sections like Food & Accommodation, Admission Process, Documents, Eligibility, Comparison table, etc. in similar fashion */}
      </div>

      {/* Floating Enroll Button */}
      <button
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-8 py-5 rounded-full shadow-2xl hover:scale-105 transition transform animate-pulse"
        onClick={() => alert("Open Admission Modal / Redirect to form")}
      >
        <span className="font-bold text-lg">ENROLL NOW!</span>
      </button>

      {/* ==================== FOOD & ACCOMMODATION SECTION ==================== */}
      <div className="bg-gradient-to-b from-gray-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
            Food and Accommodation Cost – MBBS in Russia
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <p>
              Most Russian medical universities provide comfortable hostel
              accommodation specially designed for international students. Rooms
              are usually shared (2–3 students per room) and come fully
              furnished with:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Beds, mattresses, bedsheets, blankets, pillows</li>
              <li>Study tables, chairs, wardrobes/cupboards</li>
              <li>Central heating (very important in Russian winters)</li>
            </ul>

            <p className="mt-6">Hostels typically include:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Common kitchen where students can cook their own food (very
                popular among Indian students to prepare Indian meals)
              </li>
              <li>Common washing machines / laundry rooms</li>
              <li>
                Indian mess / canteen facilities in many universities (or
                nearby)
              </li>
              <li>
                Indian restaurants and grocery stores often within walking
                distance
              </li>
            </ul>

            <p className="mt-6">
              <strong>Approximate monthly living expenses (2025–2026):</strong>
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Hostel / Accommodation: ₹8,000 – ₹18,000</li>
              <li>Food (self-cooking + mess): ₹8,000 – ₹15,000</li>
              <li>Transport + Miscellaneous: ₹3,000 – ₹7,000</li>
              <li>
                <strong>Total monthly:</strong> ≈ ₹20,000 – ₹40,000
              </li>
            </ul>

            <p className="mt-6 italic text-gray-600">
              Many universities also offer Indian food in their mess/canteen,
              helping students maintain a familiar diet without much extra cost.
            </p>
          </div>
        </div>
      </div>

      {/* ==================== ADMISSION PROCESS ==================== */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-10">
            Admission Process for MBBS in Russia 2025–2026
          </h2>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              The admission process for{" "}
              <strong> MBBS (Bachelor of Medicine, Bachelor of Surgery)</strong>{" "}
              courses in Russia varies slightly among different universities,
              but the general process is as follows:
            </p>

            <div className="space-y-10">
              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  1. Research and Select a University:
                </h4>
                <p className="text-gray-700">
                  Research the <strong>Russian universities</strong> that offer
                  MBBS courses. Some of the best universities for MBBS courses
                  in Russia are
                  <strong>
                    {" "}
                    Moscow State Medical University, Saint Petersburg State
                    Medical University, Kazan Federal University, etc.
                  </strong>
                </p>
                <p className="mt-2 text-gray-600">
                  Check: NMC/WHO recognition, English medium availability,
                  tuition fees, hostel quality.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  2. Check Eligibility
                </h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Completed 10+2 with Physics, Chemistry, Biology</li>
                  <li>
                    Minimum 50% aggregate in PCB (40% for reserved categories)
                  </li>
                  <li>NEET qualified (mandatory for Indian students)</li>
                  <li>Age: 17 years completed by 31st Dec of admission year</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  3. Apply Online
                </h4>
                <p className="text-gray-700">
                  Fill university application form → Submit scanned documents →
                  Receive admission/invitation letter (usually within 2–4
                  weeks).
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h4 className="text-xl font-bold text-blue-900 mb-4">
                  4. Visa & Travel
                </h4>
                <p className="text-gray-700">
                  Use invitation letter to apply for student visa at Russian
                  Embassy/Consulate → Book tickets → Arrive in Russia → Complete
                  university registration & medical check-up.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== DOCUMENTS + ELIGIBILITY + SCHOLARSHIPS ==================== */}
      <div className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left - Required Documents */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center md:text-left">
                Required Documents for MBBS in Russia 2025–2026
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h5 className="text-lg font-semibold text-blue-800">
                    Educational Documents
                  </h5>
                  <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                    <li>10th & 12th marksheets + certificates</li>
                    <li>NEET scorecard & admit card</li>
                    <li>Passport (valid for minimum 18–24 months)</li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm border">
                  <h5 className="text-lg font-semibold text-blue-800">
                    Other Important Documents
                  </h5>
                  <ul className="list-disc pl-5 mt-3 text-gray-700 space-y-1">
                    <li>Passport size photos (white background)</li>
                    <li>HIV & medical fitness certificate</li>
                    <li>
                      Invitation letter from university (issued after admission)
                    </li>
                    <li>Visa application form & fee receipt</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right - Eligibility + Scholarships */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8 text-center">
                Eligibility Criteria & Scholarships
              </h2>

              <div className="bg-white p-6 rounded-xl shadow-sm border mb-8">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">
                  Basic Eligibility
                </h4>
                <ul className="list-decimal pl-5 space-y-2 text-gray-700">
                  <li>Age 17+ by 31st Dec of admission year</li>
                  <li>50%+ in PCB in 12th (40% for SC/ST/OBC)</li>
                  <li>NEET qualified (mandatory for Indians)</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border">
                <h4 className="text-xl font-semibold text-blue-900 mb-4">
                  Popular Scholarships
                </h4>
                <ul className="space-y-4">
                  <li>
                    <strong>
                      Russian Government Scholarship (Open Doors / Quota)
                    </strong>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Covers tuition + sometimes hostel. Very competitive —
                      apply via education-in-russia.com
                    </span>
                  </li>
                  <li>
                    <strong>University-specific Merit Scholarships</strong>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Offered by many universities for good NEET/academic scores
                    </span>
                  </li>
                  <li>
                    <strong>Other options</strong>
                    <br />
                    <span className="text-gray-600 text-sm">
                      Education Future, Inlaks, etc. (limited for MBBS)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ==================== COMPARISON TABLE ==================== */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            MBBS in Russia vs MBBS in India – Quick Comparison (2025–2026)
          </h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-blue-900 text-white">
                  <th className="p-4 border border-gray-300 text-center font-semibold">
                    Criteria
                  </th>
                  <th className="p-4 border border-gray-300 text-center font-semibold">
                    MBBS in Russia
                  </th>
                  <th className="p-4 border border-gray-300 text-center font-semibold">
                    MBBS in India
                  </th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">
                    Tuition Fees (per year)
                  </td>
                  <td className="p-4 border">₹2 – 5 Lakhs</td>
                  <td className="p-4 border">
                    Govt: ₹40k – ₹2 Lakhs
                    <br />
                    Private: ₹10 – 25+ Lakhs
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">
                    Donation / Capitation
                  </td>
                  <td className="p-4 border text-green-700">No Donation</td>
                  <td className="p-4 border text-red-700">
                    Often ₹30–80 Lakhs in private colleges
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Course Duration</td>
                  <td className="p-4 border">6 years (including internship)</td>
                  <td className="p-4 border">5.5 years + 1 year internship</td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">Class Strength</td>
                  <td className="p-4 border">20–40 students</td>
                  <td className="p-4 border">
                    100–150+ students (especially private)
                  </td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="p-4 border font-medium">Global Recognition</td>
                  <td className="p-4 border">
                    NMC, WHO, WFME approved universities
                  </td>
                  <td className="p-4 border">
                    NMC approved, but private colleges vary
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border font-medium">
                    Medium of Instruction
                  </td>
                  <td className="p-4 border">English</td>
                  <td className="p-4 border">English</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kazakhstan;
