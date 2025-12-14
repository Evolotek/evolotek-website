'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import '../app/styles/work-section.css';

const projects = [
	{
		id: 1,
		name: 'Cybrella',
		description:
			'Advanced cybersecurity solutions specializing in IoT, mobile, cloud, and data security with proactive cyber defense and comprehensive fraud prevention.',
		image:
			'https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
		category: 'Cybersecurity',
		gridSpan: 'large',
	},
	{
		id: 2,
		name: 'Zoomaya',
		description:
			'Enterprise-grade platform that monitors, identifies, and prevents internal threats, fraud, and privilege abuse in cloud systems.',
		image:
			'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
		category: 'Analytics',
		gridSpan: 'standard',
	},
	{
		id: 3,
		name: 'Sipstr',
		description:
			'Revolutionary alcohol delivery platform with smart inventory management and seamless ordering experience.',
		image:
			'https://images.pexels.com/photos/602750/pexels-photo-602750.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
		category: 'E-commerce',
		gridSpan: 'large',
	},
	{
		id: 4,
		name: 'VeraEaty',
		description:
			'AI-powered meal planning assistant that creates personalized meal plans, smart grocery lists, and helps minimize food waste.',
		image:
			'https://images.pexels.com/photos/1640774/pexels-photo-1640774.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
		category: 'AI & Food',
		gridSpan: 'standard',
	},
	{
		id: 5,
		name: 'Briskpe',
		description:
			'All-in-one global payment platform enabling businesses to receive and process international transactions seamlessly.',
		image:
			'https://images.pexels.com/photos/8370752/pexels-photo-8370752.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&fit=crop',
		category: 'Fintech',
		gridSpan: 'large',
	},
];

interface ProjectCardProps {
	project: (typeof projects)[0];
	index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
	const [isHovered, setIsHovered] = useState(false);
	const [isTouched, setIsTouched] = useState(false);
	const cardRef = useRef<HTMLDivElement>(null);

	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);

	const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
		damping: 20,
		stiffness: 100,
	});
	const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
		damping: 20,
		stiffness: 100,
	});

	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!cardRef.current) return;

		const rect = cardRef.current.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		const moveX = (e.clientX - centerX) / rect.width;
		const moveY = (e.clientY - centerY) / rect.height;

		mouseX.set(moveX);
		mouseY.set(moveY);
	};

	const handleMouseLeave = () => {
		mouseX.set(0);
		mouseY.set(0);
		setIsHovered(false);
	};

	// Mobile touch handlers
	const handleTouchStart = () => {
		setIsTouched(true);
	};

	const handleTouchEnd = () => {
		setIsTouched(false);
	};

	// Determine if hovering (desktop) or touched (mobile)
	const isActive = isHovered || isTouched;

	return (
		<motion.div
			ref={cardRef}
			className={`project-card ${
				project.gridSpan === 'large'
					? 'project-card-large'
					: 'project-card-standard'
			}`}
			onMouseMove={handleMouseMove}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={handleMouseLeave}
			onTouchStart={handleTouchStart}
			onTouchEnd={handleTouchEnd}
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: '-100px' }}
			transition={{ duration: 0.6, delay: index * 0.1 }}
			style={{
				rotateX: isTouched ? 0 : rotateX,
				rotateY: isTouched ? 0 : rotateY,
				transformStyle: 'preserve-3d',
			}}
		>
			<Link href="/work" className="block h-full">
				<div className="project-card-inner">
					{/* Project Number Badge */}
					<motion.div
						className="project-badge"
						initial={{ scale: 0 }}
						whileInView={{ scale: 1 }}
						transition={{ delay: index * 0.1 + 0.3, type: 'spring' }}
					>
						{String(index + 1).padStart(2, '0')}
					</motion.div>

					{/* Image Container */}
					<div className="project-image-container">
						<motion.img
							src={project.image}
							alt={project.name}
							className="project-image"
							animate={{
								scale: isActive ? 1.1 : 1,
							}}
							transition={{ duration: 0.6, ease: 'easeOut' }}
						/>

						{/* Gradient Overlay */}
						<motion.div
							className="project-gradient-overlay"
							animate={{
								opacity: isActive ? 1 : 0.3,
							}}
							transition={{ duration: 0.4 }}
						/>

						{/* Animated Border */}
						<motion.div
							className="project-border"
							animate={{
								opacity: isActive ? 1 : 0,
							}}
						/>
					</div>

					{/* Content */}
					<div className="project-content">
						<motion.div
							className="project-meta"
							animate={{
								y: isActive ? 0 : 10,
								opacity: isActive ? 1 : 0.7,
							}}
							transition={{ duration: 0.3 }}
						>
							<span className="project-category">{project.category}</span>
						</motion.div>

						<motion.h3
							className="project-title"
							animate={{
								y: isActive ? 0 : 10,
							}}
							transition={{ duration: 0.3 }}
						>
							{project.name}
						</motion.h3>

						<motion.p
							className="project-description"
							animate={{
								y: isActive ? 0 : 20,
								opacity: isActive ? 1 : 0,
							}}
							transition={{ duration: 0.4, delay: 0.1 }}
						>
							{project.description}
						</motion.p>

						<motion.div
							className="project-cta"
							animate={{
								x: isActive ? 0 : -10,
								opacity: isActive ? 1 : 0,
							}}
							transition={{ duration: 0.4, delay: 0.15 }}
						>
							<span>View Project</span>
							<motion.span
								animate={{ x: isActive ? 5 : 0 }}
								transition={{ duration: 0.3 }}
							>
								→
							</motion.span>
						</motion.div>
					</div>
				</div>
			</Link>
		</motion.div>
	);
}

export function OurWorkSection() {
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const titleVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
			},
		},
	};

	return (
		<section className="work-section">
			<div className="work-container">
				<motion.div
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: '-100px' }}
					variants={containerVariants}
				>
					{/* Header */}
					<motion.div variants={titleVariants} className="work-header">
						<div className="work-title-wrapper">
							<h2 className="work-title">Our Work</h2>
							<motion.div
								className="work-title-underline"
								initial={{ scaleX: 0 }}
								whileInView={{ scaleX: 1 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8, delay: 0.3 }}
							/>
						</div>
						<p className="work-subtitle">
							Reinvent your business and realize exceptional experiences that win
							hearts and move markets.
						</p>
					</motion.div>

					{/* Bento Grid */}
					<div className="bento-grid">
						{projects.map((project, index) => (
							<ProjectCard key={project.id} project={project} index={index} />
						))}
					</div>

					{/* View All Projects CTA */}
					<motion.div
						className="work-footer"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.4 }}
					>
						<Link href="/work" className="view-all-btn">
							<span>View All Projects</span>
							<motion.span
								animate={{ x: [0, 5, 0] }}
								transition={{ duration: 1.5, repeat: Infinity }}
							>
								→
							</motion.span>
						</Link>
					</motion.div>
				</motion.div>
			</div>

			{/* Floating Background Elements */}
			<div className="work-bg-elements">
				<motion.div
					className="work-bg-circle work-bg-circle-1"
					animate={{
						x: [0, 30, 0],
						y: [0, -30, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
				<motion.div
					className="work-bg-circle work-bg-circle-2"
					animate={{
						x: [0, -30, 0],
						y: [0, 30, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: 'linear',
					}}
				/>
			</div>
		</section>
	);
}
