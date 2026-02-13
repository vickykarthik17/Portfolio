import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
	{
		title: 'Commonwealth Games Dashboard',
		problem: 'Medal and participation data scattered across sources; hard to visualize trends.',
		solution: 'Interactive dashboard analyzing medal distribution, participation trends, and country performance.',
		tech: 'Python, seaborn, ggplot2, leaflet',
		impact: 'Improved data insight clarity by 25% through interactive visualizations.',
		number: '1',
		githubUrl: 'https://github.com/vickykarthik17', // Replace with actual repo URL
		demoUrl: null, // Add if you have a hosted dashboard
	},
	{
		title: 'Diwali Sales EDA',
		problem: '5 years of sales data needs analysis to identify trends and strategic opportunities.',
		solution: 'Comprehensive EDA revealing seasonal patterns, product performance, and revenue trends.',
		tech: 'Python, pandas, matplotlib, seaborn',
		impact: 'Provided trend-based strategic recommendations for inventory and marketing.',
		number: '2',
		githubUrl: 'https://github.com/vickykarthik17', // Replace with actual repo URL
		demoUrl: null, // Add if you have a hosted notebook/dashboard
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
						<div className="space-y-2 mb-4">
							<p className="text-sm text-blue-200">
								<span className="font-medium text-white">Problem:</span> {project.problem}
							</p>
							<p className="text-sm text-blue-100">
								<span className="font-medium text-white">Solution:</span> {project.solution}
							</p>
							<p className="text-xs text-blue-200/90">
								<span className="font-medium text-white">Tech:</span> {project.tech}
							</p>
							<p className="text-xs text-blue-100">
								<span className="font-medium text-white">Impact:</span> {project.impact}
							</p>
						</div>
						<div className="flex flex-wrap gap-3 pt-3">
							{project.githubUrl && (
								<a
									href={project.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 active:bg-white/40 rounded-full text-sm font-semibold min-h-[44px] shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transform hover:scale-105 active:scale-100"
								>
									<Github className="w-4 h-4" />
									<span>Source Code</span>
								</a>
							)}
							{project.demoUrl && (
								<a
									href={project.demoUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/20 hover:bg-white/30 active:bg-white/40 rounded-full text-sm font-semibold min-h-[44px] shadow-sm hover:shadow-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-600 transform hover:scale-105 active:scale-100"
								>
									<ExternalLink className="w-4 h-4" />
									<span>View Dashboard</span>
								</a>
							)}
						</div>
					</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default DataAnalysisProjects;