"use client";

import { useState,useRef } from "react";
import { RiMailLine, RiMapPinLine } from "react-icons/ri";
import emailjs from "@emailjs/browser";
import RevealOnScroll from "./RevealOnScroll";

const SERVICE_ID = "service_pb23vas";
const TEMPLATE_ID = "template_qniugzc";
const PUBLIC_KEY = "Y3YB5bHpQ_Osrpn5b";

export default function Contact() {
	const formRef = useRef<HTMLFormElement | null>(null);

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		// 1) Try EmailJS first
		try {
			if (!formRef.current) throw new Error("Form ref not found");

			await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
				publicKey: PUBLIC_KEY,
			});

			setSubmitted(true);
			setFormData({ name: "", email: "", message: "" });
			setTimeout(() => setSubmitted(false), 3000);
			return;
		} catch (err) {
			console.error("EmailJS failed, falling back to mailto:", err);
		}

		// 2) Fallback: mailto
		const subject = `Project Inquiry from ${formData.name}`;
		const body = `${formData.message}\n\nFrom: ${formData.email}`;
		const mailtoLink = `mailto:rudraparmar1309@gmail.com?subject=${encodeURIComponent(
			subject,
		)}&body=${encodeURIComponent(body)}`;

		window.location.href = mailtoLink;

		setSubmitted(true);
		setTimeout(() => setSubmitted(false), 3000);
	};
	return (
		<section id="contact" className="py-24 px-4 max-w-5xl mx-auto">
			<RevealOnScroll>
				<div className="bg-white border-4 border-black shadow-hard-xl p-8 md:p-12 relative mt-12">
					<div className="absolute -top-10 -left-6 bg-neo-yellow border-4 border-black px-6 py-2 shadow-hard -rotate-[5deg]">
						<span className="font-black text-2xl">START A PROJECT</span>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
						<div>
							<h2 className="text-6xl font-black uppercase mb-6 leading-[0.85]">
								Let&apos;s
								<br />
								Talk
								<br />
								Code.
							</h2>
							<p className="font-[family-name:var(--font-mono)] text-lg mb-8 text-gray-600">
								I am currently available for freelance work and open to
								full-time opportunities.
							</p>
							<div className="space-y-4">
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
										<RiMailLine className="text-xl" />
									</div>
									<a
										href="mailto:rudraparmar1309@gmail.com"
										className="text-xl font-bold hover:bg-neo-blue transition-colors px-1"
									>
										rudraparmar1309@gmail.com
									</a>
								</div>
								<div className="flex items-center gap-4">
									<div className="w-12 h-12 bg-neo-black text-white flex items-center justify-center border-2 border-black">
										<RiMapPinLine className="text-xl" />
									</div>
									<span className="text-xl font-bold">Mumbai, India</span>
								</div>
							</div>
						</div>

						<form
							ref={formRef}
							onSubmit={handleSubmit}
							className="space-y-6 bg-gray-50 p-6 border-2 border-black"
						>
							<div className="flex flex-col">
								<label className="font-[family-name:var(--font-mono)] font-bold mb-1 uppercase text-xs">
									Identity
								</label>
								<input
									name="name_company"
									type="text"
									placeholder="NAME / COMPANY"
									required
									value={formData.name}
									onChange={(e) =>
										setFormData({ ...formData, name: e.target.value })
									}
									className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all"
								/>
							</div>

							<div className="flex flex-col">
								<label className="font-[family-name:var(--font-mono)] font-bold mb-1 uppercase text-xs">
									Coordinates
								</label>
								<input
									name="email"
									type="email"
									placeholder="EMAIL ADDRESS"
									required
									value={formData.email}
									onChange={(e) =>
										setFormData({ ...formData, email: e.target.value })
									}
									className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all"
								/>
							</div>

							<div className="flex flex-col">
								<label className="font-[family-name:var(--font-mono)] font-bold mb-1 uppercase text-xs">
									Transmission
								</label>
								<textarea
									name="project_details"
									rows={4}
									placeholder="PROJECT DETAILS..."
									required
									value={formData.message}
									onChange={(e) =>
										setFormData({ ...formData, message: e.target.value })
									}
									className="bg-white border-2 border-black p-3 font-bold focus:outline-none focus:bg-neo-yellow focus:shadow-hard-sm transition-all resize-none"
								/>
							</div>

							{/* optional timestamp */}
							<input
								type="hidden"
								name="submitted_at"
								value={new Date().toLocaleString()}
							/>

							<button
								type="submit"
								className={`w-full ${
									submitted ? "bg-neo-green" : "bg-neo-blue"
								} text-white font-black text-xl py-4 border-2 border-black shadow-hard hover:bg-neo-black hover:translate-y-1 hover:shadow-none transition-all`}
							>
								{submitted ? "✔ TRANSMISSION SENT" : "TRANSMIT DATA"}
							</button>
						</form>
					</div>
				</div>
			</RevealOnScroll>
		</section>
	);
}
