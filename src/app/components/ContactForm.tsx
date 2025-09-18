 


// 'use client';

// import { useState } from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import { useContact } from './ContactContext';

// export default function ScheduleForm() {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
//   const [hour, setHour] = useState('01');
//   const [minute, setMinute] = useState('00');
//   const [ampm, setAmpm] = useState('AM');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errors, setErrors] = useState<{[key: string]: string}>({});
  
//   const { contactRef } = useContact();

//   const validateForm = () => {
//     const newErrors: {[key: string]: string} = {};
    
//     if (!formData.name.trim()) {
//       newErrors.name = 'Full name is required';
//     }
    
//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email';
//     }
    
//     if (!formData.message.trim()) {
//       newErrors.message = 'Description is required';
//     }
    
//     if (!selectedDate) {
//       newErrors.date = 'Please select a date';
//     }
    
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
    
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors(prev => ({
//         ...prev,
//         [field]: ''
//       }));
//     }
//   };

//   const handleSubmit = async () => {
//     setIsSubmitted(true);
    
//     if (!validateForm()) {
//       return;
//     }

//     setIsSubmitting(true);
    
//     try {
//       const selectedTime = `${hour}:${minute} ${ampm}`;
//       const selectedDateTime = `${selectedDate?.toDateString()} ${selectedTime}`;
      
//       const submitData = {
//         name: formData.name,
//         email: formData.email,
//         subject: selectedDateTime,
//         message: formData.message
//       };

//       const response = await fetch('https://reputinfo.life/submitdetails', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ details: submitData })
//       });

//       const result = await response.json();
      
//       if (result.submited) {
//         // Clear form data
//         setFormData({
//           name: '',
//           email: '',
//           message: ''
//         });
//         setSelectedDate(new Date());
//         setHour('01');
//         setMinute('00');
//         setAmpm('AM');
//         setIsSubmitted(false);
//         setErrors({});
        
//         // Show success message
//         setSuccessMessage('Thank you! Your request has been submitted successfully. Our team will contact you soon.');
        
//         // Hide success message after 5 seconds
//         setTimeout(() => {
//           setSuccessMessage('');
//         }, 5000);
//       } else {
//         alert("Error occurred. Please try after some time");
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       alert("Error occurred. Please try after some time");
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div ref={contactRef} className="h-screen bg-[#f9fafb] flex flex-col justify-center items-center px-6">
//       {/* Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-3xl md:text-4xl font-medium leading-snug">
//           <span className="text-[#4A4EF0]">Let&apos;s Talk! </span>
//           <span className="text-[#2F80ED]">Your Next Step Towards </span>
//           <span className="text-[#66BB6A]">Sustainability Starts Here!</span>
//         </h2>

//         {/* Underline design */}
//         <div className="flex justify-center items-center mt-2 space-x-2">
//           <div className="w-10 h-1 bg-[#f4d95b] rounded"></div>
//           <div className="w-3 h-1 bg-[#c3e378] rounded"></div>
//           <div className="w-1 h-1 bg-[#f4d95b] rounded"></div>
//         </div>
//       </div>

//       {/* Form Section */}
//       <div className="w-full max-w-6xl bg-white rounded-lg p-6 md:p-10 shadow flex flex-col md:flex-row gap-8">
//         {/* Left - Calendar and Time */}
//         <div className="flex-1">
//           <div className="rounded-lg border p-4 w-fit mx-auto">
//             <DatePicker
//               selected={selectedDate}
//               onChange={(date: Date | null) => {
//                 setSelectedDate(date);
//                 if (errors.date) {
//                   setErrors(prev => ({ ...prev, date: '' }));
//                 }
//               }}
//               inline
//               minDate={new Date()}
//             />
//           </div>
//           {isSubmitted && errors.date && (
//             <p className="text-red-500 text-sm mt-1 text-center">{errors.date}</p>
//           )}

//           <div className="mt-6 text-gray-800">
//             <label className="font-semibold text-sm mb-2 block text-[#0b1d3b]">Select Time:</label>
//             <div className="flex gap-2">
//               <select value={hour} onChange={(e) => setHour(e.target.value)} className="border px-2 py-1 rounded">
//                 {[...Array(12)].map((_, i) => (
//                   <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
//                     {String(i + 1).padStart(2, '0')}
//                   </option>
//                 ))}
//               </select>
//               <select value={minute} onChange={(e) => setMinute(e.target.value)} className="border px-2 py-1 rounded">
//                 {['00', '15', '30', '45'].map((m) => (
//                   <option key={m} value={m}>{m}</option>
//                 ))}
//               </select>
//               <select value={ampm} onChange={(e) => setAmpm(e.target.value)} className="border px-2 py-1 rounded">
//                 <option value="AM">AM</option>
//                 <option value="PM">PM</option>
//               </select>
//             </div>
//           </div>
//         </div>

//         {/* Right - Form */}
//         <div className="flex-1 flex flex-col justify-center text-gray-800">
//           <div className="mb-4">
//             <input
//               type="text"
//               placeholder="Full name*"
//               value={formData.name}
//               onChange={(e) => handleInputChange('name', e.target.value)}
//               className={`border px-4 py-2 rounded focus:outline-none w-full ${
//                 isSubmitted && errors.name ? 'border-red-500' : 'border-black'
//               }`}
//             />
//             {isSubmitted && errors.name && (
//               <p className="text-red-500 text-sm mt-1">{errors.name}</p>
//             )}
//           </div>
          
//           <div className="mb-4">
//             <input
//               type="email"
//               placeholder="Email ID*"
//               value={formData.email}
//               onChange={(e) => handleInputChange('email', e.target.value)}
//               className={`border px-4 py-2 rounded focus:outline-none w-full ${
//                 isSubmitted && errors.email ? 'border-red-500' : 'border-black'
//               }`}
//             />
//             {isSubmitted && errors.email && (
//               <p className="text-red-500 text-sm mt-1">{errors.email}</p>
//             )}
//           </div>
          
//           <div className="mb-4">
//             <textarea
//               placeholder="Description*"
//               value={formData.message}
//               onChange={(e) => handleInputChange('message', e.target.value)}
//               className={`border px-4 py-2 rounded h-28 focus:outline-none w-full resize-none ${
//                 isSubmitted && errors.message ? 'border-red-500' : 'border-black'
//               }`}
//             />
//             {isSubmitted && errors.message && (
//               <p className="text-red-500 text-sm mt-1">{errors.message}</p>
//             )}
//           </div>
          
//           <button 
//             onClick={handleSubmit}
//             disabled={isSubmitting}
//             className={`text-white px-6 py-3 rounded-md font-semibold transition w-fit mt-2 ${
//               isSubmitting 
//                 ? 'bg-gray-400 cursor-not-allowed' 
//                 : 'bg-[#0b1d3b] hover:bg-opacity-90'
//             }`}
//           >
//             {isSubmitting ? 'Submitting...' : 'Talk to an expert →'}
//           </button>
          
//           {/* Success Message */}
//           {successMessage && (
//             <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
//               <p className="text-sm">{successMessage}</p>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }











'use client';

import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useContact } from './ContactContext';

export default function ScheduleForm() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [hour, setHour] = useState('01');
  const [minute, setMinute] = useState('00');
  const [ampm, setAmpm] = useState('AM');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const { contactRef } = useContact();

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Description is required';
    if (!selectedDate) newErrors.date = 'Please select a date';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      const selectedTime = `${hour}:${minute} ${ampm}`;
      const selectedDateTime = `${selectedDate?.toDateString()} ${selectedTime}`;
      const submitData = { ...formData, subject: selectedDateTime };

      const response = await fetch('https://api.reput.world/submitdetails', {
      // const response = await fetch('http://localhost:80/submitdetails', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ details: submitData })
      });

      console.log("submitData->", submitData);
      
      const result = await response.json();
      console.log("result->", result);

      if (result.submited) {
        setFormData({ name: '', email: '', message: '' });
        setSelectedDate(new Date());
        setHour('01'); setMinute('00'); setAmpm('AM');
        setIsSubmitted(false); setErrors({});
        setSuccessMessage('Thank you! Your request has been submitted successfully. Our team will contact you soon.');
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        alert("Error occurred. Please try after some time");
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert("Error occurred. Please try after some time");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div ref={contactRef} className="min-h-screen bg-[#f9fafb] flex flex-col justify-center items-center px-4 sm:px-6 py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-snug">
          <span className="text-[#4A4EF0]">Let&apos;s Talk! </span>
          <span className="text-[#2F80ED]">Your Next Step Towards </span>
          <span className="text-[#66BB6A]">Sustainability Starts Here!</span>
        </h2>
        <div className="flex justify-center items-center mt-3 space-x-2">
          <div className="w-8 sm:w-10 h-1 bg-[#f4d95b] rounded"></div>
          <div className="w-2 sm:w-3 h-1 bg-[#c3e378] rounded"></div>
          <div className="w-1 h-1 bg-[#f4d95b] rounded"></div>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full max-w-5xl bg-white rounded-lg p-6 sm:p-8 md:p-10 shadow flex flex-col md:flex-row gap-8">
        {/* Left - Calendar + Time */}
        <div className="flex-1">
          <div className="rounded-lg border p-2 sm:p-4 w-full max-w-sm mx-auto">
            <DatePicker
              selected={selectedDate}
              onChange={(date: Date | null) => {
                setSelectedDate(date);
                if (errors.date) setErrors((prev) => ({ ...prev, date: '' }));
              }}
              inline
              minDate={new Date()}
            />
          </div>
          {isSubmitted && errors.date && (
            <p className="text-red-500 text-sm mt-2 text-center">{errors.date}</p>
          )}

          <div className="mt-6 text-gray-800 text-center md:text-left">
            <label className="font-semibold text-sm mb-2 block text-[#0b1d3b]">Select Time:</label>
            <div className="flex justify-center md:justify-start gap-2">
              <select value={hour} onChange={(e) => setHour(e.target.value)} className="border px-2 py-1 rounded">
                {[...Array(12)].map((_, i) => (
                  <option key={i + 1} value={String(i + 1).padStart(2, '0')}>
                    {String(i + 1).padStart(2, '0')}
                  </option>
                ))}
              </select>
              <select value={minute} onChange={(e) => setMinute(e.target.value)} className="border px-2 py-1 rounded">
                {['00', '15', '30', '45'].map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
              <select value={ampm} onChange={(e) => setAmpm(e.target.value)} className="border px-2 py-1 rounded">
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex-1 flex flex-col justify-center text-gray-800">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Full name*"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`border px-4 py-2 rounded focus:outline-none w-full text-sm sm:text-base ${
                isSubmitted && errors.name ? 'border-red-500' : 'border-black'
              }`}
            />
            {isSubmitted && errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <input
              type="email"
              placeholder="Email ID*"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className={`border px-4 py-2 rounded focus:outline-none w-full text-sm sm:text-base ${
                isSubmitted && errors.email ? 'border-red-500' : 'border-black'
              }`}
            />
            {isSubmitted && errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <textarea
              placeholder="Description*"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={`border px-4 py-2 rounded h-24 sm:h-28 focus:outline-none w-full resize-none text-sm sm:text-base ${
                isSubmitted && errors.message ? 'border-red-500' : 'border-black'
              }`}
            />
            {isSubmitted && errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
          </div>

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className={`text-black px-5 sm:px-6 py-2 sm:py-3 rounded-md font-semibold transition w-full sm:w-fit mt-2 text-sm sm:text-base ${
              isSubmitting ? 'bg-green-600 cursor-not-allowed' : 'bg-green-500 hover:bg-opacity-90'
            }`}
          >
            {isSubmitting ? 'Submitting...' : 'Talk to an expert →'}
          </button>

          {successMessage && (
            <div className="mt-4 p-3 sm:p-4 bg-green-100 border border-green-400 text-green-700 rounded-md text-sm sm:text-base">
              {successMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
