import React from 'react';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

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
		href: 'http://linkedin.com/in/vikram-karthik-04a9212a9',
	},
];

const Contact = () => {
	return (
		<div className="rounded-xl border border-gray-200/50 bg-white/75 p-8 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl backdrop-blur-xl">
			<h2
				className="mb-4 text-3xl font-bold text-gray-900"
				style={{ fontFamily: 'Petrona, serif' }}
			>
				Contact Me
			</h2>
			<p className="mb-8 leading-relaxed text-gray-700">
				Feel free to reach out via email or phone, or connect with me on GitHub
				and LinkedIn.
			</p>

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
							className="group flex items-start gap-4 rounded-lg p-4 transition-colors duration-200 hover:bg-gray-50"
						>
							<div className="flex-shrink-0 w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform duration-200">
								<Icon className="w-full h-full" />
							</div>
							<div>
								<h3 className="mb-1 font-semibold text-gray-900">
									{contact.title}
								</h3>
								<p className="break-all text-sm text-gray-600">
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