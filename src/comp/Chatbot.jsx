


// import { useState, useEffect, useRef } from 'react';
// // import { Picker } from 'emoji-mart';
// // import 'emoji-mart/css/emoji-mart.css';

// const Chatbot = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hidden, sethidden] = useState(false);
//   const [messages, setMessages] = useState([]);
//   const [inputValue, setInputValue] = useState('');
//   const [file, setFile] = useState(null);
//   const [isListening, setIsListening] = useState(false);
//   const messagesEndRef = useRef(null);
//   const fileInputRef = useRef(null);
//   const recognition = useRef(null);
//   const API_KEY = "AIzaSyAIRafwTy6fxWk66uTllTQ_pNkMSh8w7e0";

// //   useEffect(() => {
// //     if (typeof window !== 'undefined') {
// //       recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
// //       recognition.current.interimResults = true;
      
// //       recognition.current.onresult = (e) => {
// //         const transcript = Array.from(e.results)
// //           .map(result => result[0].transcript)
// //           .join('');
// //         setInputValue(transcript);
// //       };

// //       recognition.current.onend = () => setIsListening(false);
// //     }
// //   }, []);

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
//       recognition.current.interimResults = true;
//       recognition.current.continuous = false;

//       recognition.current.onresult = (e) => {
//         const transcript = Array.from(e.results)
//           .map(result => result[0].transcript)
//           .join('');
//         setInputValue(transcript);
//       };

//       recognition.current.onend = () => {
//         setIsListening(false);
//         // Auto-submit when recognition ends and there's input
//         if (inputValue.trim()) {
//           handleSendMessage(new Event('submit')); // Simulate form submission
//         }
//       };
//     }
//   }, [inputValue]); 

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
//   }, [messages]);

//   const handleSendMessage = async (e) => {
//     e?.preventDefault();
//     if (!inputValue.trim() && !file) return;

//     // Add user message
//     const userMessage = { 
//       text: inputValue, 
//       sender: 'user',
//       file: file ? URL.createObjectURL(file) : null
//     };
//     setMessages(prev => [...prev, userMessage]);
//     setInputValue('');
//     setFile(null);

//     // Add bot response
//     try {
//       const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           contents: [{ parts: [{ text: inputValue }] }]
//         })
//       });

//       const data = await response.json();
//       const botText = data.candidates[0].content.parts[0].text;
//       setMessages(prev => [...prev, { text: botText, sender: 'bot' }]);
//     } catch (error) {
//       setMessages(prev => [...prev, { text: "Error connecting to API", sender: 'bot' }]);
//     }
//   };

//   const handleFileUpload = (e) => {
//     const selectedFile = e.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//     }
//   };

//   const toggleSpeechRecognition = () => {
//     if (isListening) {
//       recognition.current.stop();
//     } else {
//       recognition.current.start();
//     }
//     setIsListening(!isListening);
//   };

//   return (
//     <div className="fixed bottom-6 right-6 z-50">
//       {/* Toggle Button */}

//       {/* <button 
//         onClick={() =>  setIsOpen(!isOpen)}
//         className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all"
//       >
//         <svg 
//           className="w-8 h-8 bg-white p-1 rounded-full fill-current text-purple-600" 
//           viewBox="0 0 1024 1024"
//         >
//           <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
//         </svg>
//         <span>Chat with me</span>
//       </button> */}

//        {!isOpen && (
//         <button 
//           onClick={() => setIsOpen(true)}
//           className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all"
//         >
//           <svg 
//             className="w-8 h-8 bg-white p-1 rounded-full fill-current text-purple-600" 
//             viewBox="0 0 1024 1024"
//           >
//             {/* <path d="...your path here..." /> */}
//                       <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />

//           </svg>
//           <span>Chat with me</span>
//         </button>
//       )}

//       {/* Chat Window */}
//       {isOpen && (
//         <div className="absolute bottom-20 right-0 w-96 bg-white rounded-xl shadow-2xl overflow-hidden">
//           <div className="bg-purple-600 p-4 flex justify-between items-center">
//             <div className="flex items-center gap-3">
//               <svg 
//                 className="w-8 h-8 bg-white p-1 rounded-full fill-current text-purple-600" 
//                 viewBox="0 0 1024 1024"
//               >
//                 <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
//               </svg>
//               <h2 className="text-white font-semibold">Chatbot</h2>
//             </div>
//             <button 
//               onClick={() => setIsOpen(false)}
//               className="text-white hover:bg-purple-700 rounded-full p-2"
//             >
//               ×
//             </button>
//           </div>

//           <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
//             <div className="flex items-start gap-3">
//               <div className="bg-gray p-3 rounded-lg max-w-[80%]">
//                 Hey there 👋 <br /> How can I help you today?
//               </div>
//             </div>
            
//             {messages.map((msg, i) => (
//               <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
//                 <div className={`p-3 rounded-lg max-w-[80%] ${
//                   msg.sender === 'user' 
//                     ? 'bg-purple-600 text-white' 
//                     : 'bg-gray-200'
//                 }`}>
//                   {msg.file && (
//                     <img 
//                       src={msg.file} 
//                       alt="attachment" 
//                       className="w-32 h-32 object-cover rounded-lg mb-2"
//                     />
//                   )}
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//             <div ref={messagesEndRef} />
//           </div>

//           <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
//             <div className="relative">
//               <textarea
//                 value={inputValue}
//                 onChange={(e) => setInputValue(e.target.value)}
//                 placeholder="Message..."
//                 className="w-full p-2 pr-32 border rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
//                 rows="1"
//               />
//               <div className="absolute h-[32px] right-2 top-1/2 -translate-y-1/2 flex gap-1">
//                 <input
//                   type="file"
//                   ref={fileInputRef}
//                   onChange={handleFileUpload}
//                   className="hidden"
//                   accept="image/*"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => fileInputRef.current.click()}
//                   className="p-2 text-gray-600 rounded-full hover:bg-gray-100"
//                 >
//                   <i className="fa-solid fa-paperclip" />
//                 </button>
//                 {file && (
//                   <button
//                     type="button"
//                     onClick={() => setFile(null)}
//                     className="p-2 text-red-500 rounded-full hover:bg-gray-100"
//                   >
//                     <i className="fa-solid fa-xmark" />
//                   </button>
//                 )}
//                 {/* <button
//                   type="button"
//                   onClick={toggleSpeechRecognition}
//                   className={`p-2 rounded-full ${
//                     isListening ? 'text-red-500' : 'text-gray-600'
//                   } hover:bg-gray-100`}
//                 >
//                   <i className="fa-solid fa-microphone" />
//                 </button> */}
//                 <button 
//                   type="submit"
//                   className="p-2  bg-purple-600 text-white rounded-full hover:bg-purple-700"
//                 >
//                   <i className="<svg data-name="1-Arrow Up" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path d="m26.71 10.29-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/></svg>" />
//                 </button>
//               </div>
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;




















import { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [file, setFile] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const recognition = useRef(null);
  const API_KEY = "AIzaSyAIRafwTy6fxWk66uTllTQ_pNkMSh8w7e0";

  useEffect(() => {
    if (typeof window !== 'undefined') {
      recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.current.interimResults = true;
      recognition.current.continuous = false;

      recognition.current.onresult = (e) => {
        const transcript = Array.from(e.results)
          .map(result => result[0].transcript)
          .join('');
        setInputValue(transcript);
      };

      recognition.current.onend = () => {
        setIsListening(false);
        if (inputValue.trim()) {
          handleSendMessage(new Event('submit'));
        }
      };
    }
  }, [inputValue]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e?.preventDefault();
    if (!inputValue.trim() && !file) return;

    const userMessage = { 
      text: inputValue, 
      sender: 'user',
      file: file ? URL.createObjectURL(file) : null
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setFile(null);

    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${API_KEY}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: inputValue }] }]
        })
      });

      const data = await response.json();
      const botText = data.candidates[0].content.parts[0].text;
      setMessages(prev => [...prev, { text: botText, sender: 'bot' }]);
    } catch (error) {
      setMessages(prev => [...prev, { text: "Error connecting to API", sender: 'bot' }]);
    }
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) setFile(selectedFile);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-3 px-6 py-3 bg-purple-600 text-white rounded-full shadow-lg hover:bg-purple-700 transition-all"
        >
          <svg 
            className="w-8 h-8 bg-white p-1 rounded-full fill-current text-purple-600" 
            viewBox="0 0 1024 1024"
          >
            <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
          </svg>
          <span>Chat with me</span>
        </button>
      )}

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-96 bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="bg-purple-600 p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <svg 
                className="w-8 h-8 bg-white p-1 rounded-full fill-current text-purple-600" 
                viewBox="0 0 1024 1024"
              >
                <path d="M738.3 287.6H285.7c-59 0-106.8 47.8-106.8 106.8v303.1c0 59 47.8 106.8 106.8 106.8h81.5v111.1c0 .7.8 1.1 1.4.7l166.9-110.6 41.8-.8h117.4l43.6-.4c59 0 106.8-47.8 106.8-106.8V394.5c0-59-47.8-106.9-106.8-106.9zM351.7 448.2c0-29.5 23.9-53.5 53.5-53.5s53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5-53.5-23.9-53.5-53.5zm157.9 267.1c-67.8 0-123.8-47.5-132.3-109h264.6c-8.6 61.5-64.5 109-132.3 109zm110-213.7c-29.5 0-53.5-23.9-53.5-53.5s23.9-53.5 53.5-53.5 53.5 23.9 53.5 53.5-23.9 53.5-53.5 53.5zM867.2 644.5V453.1h26.5c19.4 0 35.1 15.7 35.1 35.1v121.1c0 19.4-15.7 35.1-35.1 35.1h-26.5zM95.2 609.4V488.2c0-19.4 15.7-35.1 35.1-35.1h26.5v191.3h-26.5c-19.4 0-35.1-15.7-35.1-35.1zM561.5 149.6c0 23.4-15.6 43.3-36.9 49.7v44.9h-30v-44.9c-21.4-6.5-36.9-26.3-36.9-49.7 0-28.6 23.3-51.9 51.9-51.9s51.9 23.3 51.9 51.9z" />
              </svg>
              <h2 className="text-white font-semibold">Chatbot</h2>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-purple-700 rounded-full p-2"
            >
              ×
            </button>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            <div className="flex items-start gap-3">
              <div className="bg-gray p-3 rounded-lg max-w-[80%]">
                Hey there 👋 <br /> How can I help you today?
              </div>
            </div>
            
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`p-3 rounded-lg max-w-[80%] ${
                  msg.sender === 'user' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200'
                }`}>
                  {msg.file && (
                    <img 
                      src={msg.file} 
                      alt="attachment" 
                      className="w-32 h-32 object-cover rounded-lg mb-2"
                    />
                  )}
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="p-4 border-t bg-white">
            <div className="relative">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Message..."
                className="w-full p-2 pr-32 border rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="1"
              />
              <div className="absolute h-[32px] right-2 top-1/2 -translate-y-1/2 flex gap-1">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  className="hidden"
                  accept="image/*"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current.click()}
                  className="p-2 text-gray-600 rounded-full hover:bg-gray-100"
                >
                  <i className="fa-solid fa-paperclip" />
                </button>
                {file && (
                  <button
                    type="button"
                    onClick={() => setFile(null)}
                    className="p-2 text-red-500 rounded-full hover:bg-gray-100"
                  >
                    <i className="fa-solid fa-xmark" />
                  </button>
                )}
                <button 
                  type="submit"
                  className="p-2 bg-purple-600 text-white rounded-full hover:bg-purple-700"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 32 32" 
                    className="w-5 h-5 fill-current"
                  >
                    <path d="M26.71 10.29l-10-10a1 1 0 0 0-1.41 0l-10 10 1.41 1.41L15 3.41V32h2V3.41l8.29 8.29z"/>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
