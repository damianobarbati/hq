import { Button } from "nano-ux";
import * as React from "react";
import { Link } from "wouter";
import { ProjectCard } from "../components/ProjectCard";
import { featuredWork, products } from "../data/projects";
import { bio, path, title } from "../data/site";
import { IArrowUpRight } from "../icons";

export const Home = () => {
	const [ready, setReady] = React.useState(false);
	const [address, setAddress] = React.useState("");

	React.useEffect(() => setReady(true), []);

	const result = (
		<>
			<header className="hero">
				<h1 className="heading-hero">
					Damiano
					<br />
					Barbati
				</h1>
				<div>
					<h2 className="hero-title">{title}</h2>
					<p className="hero-copy">{bio}</p>
					<div className="actions">
						<Link href="/experience/" asChild>
							<Button as="a" href={path("experience/")}>
								Explore experience
							</Button>
						</Link>
						<Link href="/projects/" asChild>
							<Button as="a" href={path("projects/")} variant="outline">
								Browse projects
							</Button>
						</Link>
					</div>
				</div>
			</header>

			<section className="home-products" aria-labelledby="products-title">
				<div className="section-heading">
					<h2 id="products-title">SaaS products</h2>
				</div>
				<div className="product-grid">
					{products.map((product) => (
						<a
							className="product-tile"
							data-product={product.id}
							key={product.id}
							href={product.links[0].url}
							target="_blank"
							rel="noopener"
						>
							<div className="product-text">
								<h3>{product.name}</h3>
								<p>{product.summary}</p>
								<span className="product-domain">
									{new URL(product.links[0].url).hostname}
								</span>
							</div>
							{product.preview && (
								<img
									src={path(product.preview.asset)}
									alt=""
									fetchPriority="high"
								/>
							)}
							<span className="product-arrow">
								<IArrowUpRight aria-hidden="true" />
							</span>
						</a>
					))}
				</div>
			</section>

			<section className="home-work" aria-labelledby="work-title">
				<div className="section-heading">
					<h2 id="work-title">Open-source work</h2>
					<Link className="inline-link" href="/projects/">
						All projects <IArrowUpRight aria-hidden="true" />
					</Link>
				</div>
				<div className="work-grid open-source-grid">
					{featuredWork.map((project) => (
						<ProjectCard key={project.id} project={project} />
					))}
				</div>
			</section>

			<section
				id="contact"
				className="home-contact"
				aria-labelledby="contact-title"
				tabIndex={-1}
			>
				<h2 id="contact-title">Contact me</h2>
				<Button
					aria-expanded={!!address}
					aria-controls="email-address"
					hidden={!ready || !!address}
					onClick={() => {
						const codePoints = [
							80, 85, 89, 93, 85, 90, 91, 26, 86, 85, 70, 86, 85, 64, 93, 116,
							83, 89, 85, 93, 88, 26, 87, 91, 89,
						];

						setAddress(
							String.fromCharCode(...codePoints.map((value) => value ^ 52)),
						);
					}}
				>
					Reveal email
				</Button>
				<a
					id="email-address"
					hidden={!address}
					href={address ? `mailto:${address}` : undefined}
					ref={(element) => {
						if (element && address) element.focus();
					}}
				>
					{address}
				</a>
			</section>
		</>
	);

	return result;
};
