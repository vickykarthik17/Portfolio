import React from 'react';

const projects = [
	{
		title: 'Commonwealth Games Dashboard',
		description:
			'Analyzed medal and participation data using seaborn, ggplot2, and leaflet, improving data insight clarity by 25%.',
		number: '1',
	},
	{
		title: 'Diwali Sales EDA',
		description:
			'Analyzed 5 years of sales data using pandas, matplotlib, and seaborn, providing trend-based strategic recommendations.',
		number: '2',
	},
];

const DataAnalysisProjects = () => {
	return (
		<div className="bg-blue-600/90 backdrop-blur-xl rounded-xl shadow-lg border border-gray-200/50 p-8 text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
			<h2
				className="text-3xl font-bold mb-4"
				style={{ fontFamily: 'Petrona, serif' }}
			>
				Data Analysis Projects
			</h2>
			<p className="text-blue-100 mb-8 leading-relaxed">
				Applied data analysis techniques to extract insights and provide strategic
				recommendations from large datasets.
			</p>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				{projects.map((project, index) => (
					<div key={index} className="relative">
						{/* Top border */}
						<div className="absolute -top-4 left-0 right-0 h-1 bg-white/30 rounded-t-lg"></div>

						{/* Number circle */}
						<div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
							{project.number}
						</div>

						{/* Content */}
						<div className="bg-white/10 border border-white/20 rounded-lg p-6 pt-8 hover:bg-white/20 transition-colors duration-200">
							<h3 className="text-xl font-semibold mb-3">{project.title}</h3>
							<p className="text-blue-100 leading-relaxed">
								{project.description}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DataAnalysisProjects;