const Contact = () => (
	<>
		<div className="board">
			<h3>Contact</h3>
			<div className="content">
				<ul>
					<li>
						<a href="mailto:cmsbuildingservices@gmail.com">
							cmsbuildingservices@gmail.com
						</a>
					</li>
					<li>
						<a href="tel:07467 947786">07467 947786</a>
					</li>
				</ul>
				<ul className="social">
					<li>
						<a href="https://www.facebook.com/cleaningandmaintenancesco">
							<svg
								className="facebook"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 516.338 516.339"
							>
								<path d="M497.446 0H18.893C8.458 0 .006 8.458.006 18.893v478.554c0 10.435 8.458 18.893 18.886 18.893h93.869V316.135c0-6.763-5.484-12.24-12.24-12.24H81.169c-6.756 0-12.24-5.477-12.24-12.239v-48.74c0-6.762 5.483-12.24 12.24-12.24h19.352c6.756 0 12.24-5.478 12.24-12.24v-31.842c0-31.279 7.387-54.958 22.172-71.028 14.78-16.078 39.101-24.113 72.963-24.113h46.279c6.762 0 12.24 5.478 12.24 12.24v48.74c0 6.763-5.478 12.24-12.24 12.24h-24.37c-6.702 0-12.075.557-16.114 1.677-4.039 1.12-6.964 3.139-8.764 6.059-1.805 2.925-2.968 5.888-3.482 8.893-.514 3.011-.771 7.264-.771 12.766v24.37c0 6.763 5.483 12.24 12.24 12.24h41.781c6.756 0 11.665 5.447 10.955 12.173l-5.165 48.875c-.71 6.72-6.763 12.172-13.525 12.172h-34.045c-6.757 0-12.24 5.478-12.24 12.24v200.204h296.771c10.435 0 18.887-8.458 18.887-18.893V18.893C516.333 8.458 507.88 0 497.446 0z" />
							</svg>
						</a>
					</li>
				</ul>
			</div>
		</div>
		<style jsx>{`
			a {
				color: #6655d6;
				text-decoration: none;
			}

			.board {
				background-color: white;
				box-shadow: 0 16px 24px rgba(0, 0, 0, 0.22);
				display: flex;
				flex-flow: column nowrap;
				justify-content: flex-start;
				min-width: 300px;
				padding: 24px;
			}

			.content {
				display: flex;
				flex-flow: column nowrap;
				height: 100%;
				justify-content: space-between;
			}

			.facebook {
				height: 50px;
			}

			h3 {
				font-family: 'Montserrat Subrayada', sans-serif;
				font-size: 22px;
				font-weight: 700;
				line-height: 40px;
				margin: 0;
			}

			li {
				color: #a0a0a0;
				font-family: 'Cormorant Garamond', serif;
				font-size: 20px;
				font-style: normal;
				font-weight: 300;
			}

			.social {
				margin: 0;
			}

			ul {
				list-style: none;
				padding: 0;
			}
			@media (max-width: 750px) {
				.board {
					width: 100%;
				}
			}
		`}</style>
	</>
)

export default Contact
