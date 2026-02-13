import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send } from 'lucide-react';

const contactInfo = [
	{
		icon: Mail,
		title: 'Email',
		value: 'vkarthik560@gmail.com',
		href: 'mailto:vkarthik560@gmail.com',
	},
	{
		icon: Phone,
		title: 'Phone',
		value: '+91 7287982697',
		href: 'tel:+917287982697',
	},
	{
		icon: Github,
		title: 'GitHub',
		value: 'github.com/vickykarthik17',
		href: 'https://github.com/vickykarthik17',
	},
	{
		icon: Linkedin,
		title: 'LinkedIn',
		value: 'linkedin.com/in/vikram-karthik-04a9212a9',
		href: 'https://linkedin.com/in/vikram-karthik-04a9212a9',
	},
];

const Contact = () => {
	const [formData, setFormData] = useState({ name: '', email: '', message: '' });
	const [status, setStatus] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setStatus('sending');

		// Using Web3Forms (free, no backend needed)
		// Replace with your access key from https://web3forms.com
		const formDataToSend = new FormData();
		formDataToSend.append('access_key', '66aad242-f2c1-4cd3-8cf7-fbe43b8c3d6b'); // Get from web3forms.com
		formDataToSend.append('name', formData.name);
		formDataToSend.append('email', formData.email);
		formDataToSend.append('message', formData.message);
		formDataToSend.append('subject', 'Portfolio Contact Form');

		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				body: formDataToSend,
			});

			const data = await response.json();
			if (data.success) {
				setStatus('success');
				setFormData({ name: '', email: '', message: '' });
				setTimeout(() => setStatus(''), 5000);
			} else {
				setStatus('error');
			}
		} catch (error) {
			setStatus('error');
		}
	};

	return (
		<div className="rounded-xl border border-gray-200/50 bg-white/75 p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl backdrop-blur-xl">
			<h2
				className="mb-4 text-3xl font-bold text-gray-900"
				style={{ fontFamily: 'Petrona, serif' }}
			>
				Contact Me
			</h2>
			<p className="mb-8 leading-relaxed text-gray-700">
				Open to full-time roles from 2026. Prefer email for opportunities and LinkedIn for networking.
			</p>

			{/* Contact Form */}
			<form onSubmit={handleSubmit} className="mb-8 space-y-4">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div>
						<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
							Name
						</label>
						<input
							type="text"
							id="name"
							required
							value={formData.name}
							onChange={(e) => setFormData({ ...formData, name: e.target.value })}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
							placeholder="Your name"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
							Email
						</label>
						<input
							type="email"
							id="email"
							required
							value={formData.email}
							onChange={(e) => setFormData({ ...formData, email: e.target.value })}
							className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors"
							placeholder="your.email@example.com"
						/>
					</div>
				</div>
				<div>
					<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
						Message
					</label>
					<textarea
						id="message"
						required
						rows={4}
						value={formData.message}
						onChange={(e) => setFormData({ ...formData, message: e.target.value })}
						className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-colors resize-none"
						placeholder="Tell me about opportunities or let's connect!"
					/>
				</div>
				<button
					type="submit"
					disabled={status === 'sending' || status === 'success'}
					className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 active:bg-blue-800 disabled:bg-blue-400 disabled:cursor-not-allowed shadow-md hover:shadow-lg disabled:shadow-none transition-all duration-200 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transform hover:scale-105 active:scale-100 disabled:transform-none"
				>
					<Send className={`w-5 h-5 ${status === 'sending' ? 'animate-pulse' : ''}`} />
					<span>
						{status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : status === 'error' ? 'Error - Try Email' : 'Send Message'}
					</span>
				</button>
				{status === 'success' && (
					<p className="text-sm text-green-600">Thanks! I'll get back to you soon.</p>
				)}
				{status === 'error' && (
					<p className="text-sm text-red-600">Something went wrong. Please email me directly at vkarthik560@gmail.com</p>
				)}
			</form>

			{/* Contact Links */}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
				{contactInfo.map((contact, index) => {
					const Icon = contact.icon;
					return (
						<a
							key={index}
							href={contact.href}
							target={contact.href.startsWith('http') ? '_blank' : undefined}
							rel={
								contact.href.startsWith('http')
									? 'noopener noreferrer'
									: undefined
							}
							className="group flex items-start gap-4 rounded-lg p-4 min-h-[80px] transition-all duration-200 hover:bg-gray-50 hover:shadow-md active:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 transform hover:scale-[1.02] active:scale-100"
						>
							<div className="flex-shrink-0 w-10 h-10 text-blue-600 group-hover:scale-110 group-hover:text-blue-700 transition-all duration-200 flex items-center justify-center">
								<Icon className="w-6 h-6" />
							</div>
							<div className="flex-1">
								<h3 className="mb-1 font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
									{contact.title}
								</h3>
								<p className="break-all text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
									{contact.value}
								</p>
							</div>
						</a>
					);
				})}
			</div>
		</div>
	);
};

export default Contact;