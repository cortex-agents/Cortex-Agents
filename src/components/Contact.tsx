'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { sendEmail } from '@/utils/emailSerivce';
export default function Contact() {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [message,setmMessage]=useState('')
  const [subject,setSubject]=useState('')

  const handleSubmit =async (e: React.FormEvent)=>{
     e.preventDefault();

     const templateParams ={
        to_name: "SU Crafts Solution",
        from_name: name,
        from_email: email,
        reply_to: email,
        message: message,
        subject: subject
     }

     try{
       await sendEmail(templateParams);
        alert("Email sent sucessfully");
        setName('');
        setEmail('');
        setmMessage('');
        setSubject('');
     }
    catch(error){
      console.error('Email Error', error);
      alert("Faild to send email");

    } 
  }

  return (
    <section className="bg-black text-white py-16 px-6 md:px-16">
      <motion.h2
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Us
      </motion.h2>

      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Contact Info */}
        <motion.div 
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold">Contact Info</h3>
          <p className="text-lg"><span className="font-bold">Email:</span> info@murcrafts.com</p>
          <p className="text-lg"><span className="font-bold">Phone:</span> +123 456 7890</p>
          <p className="text-lg"><span className="font-bold">Address:</span> 123 MUR Crafts Lane, City, Country</p>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          className="w-full md:w-1/2 bg-gray-900 p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                placeholder='Your name'
                className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 flex-1"
                name='name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                required
              />

              <input
                type="email"
                placeholder='Your email'
                className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500 flex-1"
                name='email'
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required
              />
            </div>

            <input
              type="text"
              placeholder='Subject'
              className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
              style={{width: "100%"}}
              name='subject'
              value={subject}
              onChange={(e)=>setSubject(e.target.value)}
              required
            />

            <textarea
              placeholder='Your message'
              className="p-3 bg-gray-800 border border-gray-600 rounded-md focus:ring-2 focus:ring-blue-500"
              style={{height: "224px"}}
              name='message'
              value={message}
              onChange={(e)=>setmMessage(e.target.value)}
              required
            ></textarea>

            <motion.button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
