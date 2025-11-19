'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const projects = [
	{
		id: 1,
		name: 'Cybrella',
		description:
			'Advanced cybersecurity solutions specializing in IoT, mobile, cloud, and data security with proactive cyber defense and comprehensive fraud prevention.',
		image:
			'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop', // Cybersecurity visualization
		align: 'left',
	},
	{
		id: 2,
		name: 'Zoomaya',
		description:
			'Enterprise-grade SAAS security platform that monitors, identifies, and prevents internal threats, fraud, and privilege abuse in cloud systems.',
		image:
			'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop', // Enterprise security dashboard
		align: 'right',
	},
	{
		id: 3,
		name: 'Sipstr',
		description:
			'Revolutionary alcohol delivery platform with smart inventory management and seamless ordering experience.',
		image:
			'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop', // Premium beverage display
		align: 'left',
	},
	{
		id: 4,
		name: 'VeraEaty',
		description:
			'AI-powered meal planning assistant that creates personalized meal plans, smart grocery lists, and helps minimize food waste.',
		image:
			'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop', // Meal planning and cooking
		align: 'right',
	},
	{
		id: 5,
		name: 'Briskpe',
		description:
			'All-in-one global payment platform enabling businesses to receive and process international transactions seamlessly.',
		image:
			'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop', // Digital payments and fintech
		align: 'left',
	},
];

export function OurWorkSection() {
	const [hoveredId, setHoveredId] = useState<number | null>(null);

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 40 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
			},
		},
	};

	return (
		<section className="relative w-full bg-black py-20 md:py-32 px-6 md:px-12 lg:px-20">
			<div className="max-w-[1400px] mx-auto">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={containerVariants}
					className="space-y-8 md:space-y-16"
				>
					<motion.div
						variants={itemVariants}
						className="space-y-4 mb-16 md:mb-24"
					>
						<h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white">
							Our Work
						</h2>
						<p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
							Reinvent your business and realize exceptional experiences that win
							hearts and move markets.
						</p>
					</motion.div>

					<div className="space-y-12 md:space-y-20">
						{projects.map((project, index) => (
							<motion.div
								key={project.id}
								variants={itemVariants}
								className={`flex flex-col ${
									project.align === 'right'
										? 'md:flex-row-reverse'
										: 'md:flex-row'
								} gap-8 md:gap-12 items-center`}
							>
								<div className="w-full md:w-1/2">
									<Link href="/work">
										<motion.div
											className="relative overflow-hidden rounded-lg aspect-video bg-gray-900 cursor-pointer group"
											onMouseEnter={() => setHoveredId(project.id)}
											onMouseLeave={() => setHoveredId(null)}
										>
											<motion.img
												src={project.image}
												alt={project.name}
												className="w-full h-full object-cover"
												animate={{
													scale: hoveredId === project.id ? 1.08 : 1,
												}}
												transition={{
													duration: 0.6,
													ease: 'easeOut',
												}}
											/>

											<motion.div
												className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center p-6"
												animate={{
													opacity: hoveredId === project.id ? 1 : 0,
												}}
												transition={{
													duration: 0.4,
													ease: 'easeOut',
												}}
											>
												<motion.div
													animate={{
														y: hoveredId === project.id ? 0 : 20,
													}}
													transition={{
														duration: 0.4,
														ease: 'easeOut',
													}}
													className="space-y-3"
												>
													<h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
														{project.name}
													</h3>
												</motion.div>
											</motion.div>
										</motion.div>
									</Link>
								</div>

								<div className="w-full md:w-1/2 space-y-4">
									<h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white">
										{project.name}
									</h3>
									<p className="text-base md:text-lg text-gray-300 leading-relaxed">
										{project.description}
									</p>
									<Link
										href="/work"
										className="inline-flex items-center gap-2 text-white hover:gap-4 transition-all group mt-4"
									>
										View Project
										<span className="text-lg group-hover:translate-x-1 transition-transform">
											→
										</span>
									</Link>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
