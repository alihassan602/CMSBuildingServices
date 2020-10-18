const Services = () => (
	<>
		<div className="board">
			<h3>Services</h3>
			<ul>
				<li>Painting</li>
				<li>Joinery</li>
				<li>Plumbing</li>
				<li>Handyman</li>
				<li>Electric</li>
				<li>Glass</li>
			</ul>
		</div>
		<style jsx>{`
			.board {
				background-color: white;
				box-shadow: 0 16px 24px rgba(0, 0, 0, 0.22);
				margin-right: 44px;
				min-width: 300px;
				padding: 24px;
			}

			h3 {
				font-family: 'Montserrat Subrayada', sans-serif;
				font-size: 22px;
				font-weight: 700;
				line-height: 40px;
				margin: 0;
			}

			li {
				color: black;
				font-family: 'Cormorant Garamond', serif;
				font-size: 20px;
				font-style: normal;
				font-weight: 300;
			}

			ul {
				list-style: none;
				padding: 0;
			}

			@media (max-width: 750px) {
				.board {
					margin-bottom: 44px;
					margin-right: 0;
					width: 100%;
				}
			}
		`}</style>
	</>
)

export default Services
