import Contact from '../Contact'
import Services from '../Services'

const Main = () => (
	<>
		<section>
			<div className="content">
				<h2>
					Edinburgh based
					<br />
					building services
					<br />
					that you can trust!
				</h2>
				<p>
					We provide all aspects of decorating, plumbing, joinery,
					installation of bathrooms and kitchens. We also do electric
					work for all homes and sites. We can do all aspects of
					building and building maintenance. We maintain high 
					levels of health and safety whilst working.
				</p>
			</div>
			<div className="boxes">
				<Services />
				<Contact />
			</div>
		</section>

		<style jsx>{`
			.boxes {
				display: flex;
				flex-flow: row wrap;
				width: 100%;
			}

			.content {
				margin-bottom: 44px;
			}

			h2 {
				font-family: 'Montserrat Subrayada', sans-serif;
				font-size: calc(28px + 1vw);
				font-weight: 700;
				margin: 40px 0 0;
				padding: 0 24px;
			}

			p {
				color: black;
				font-family: 'Cormorant Garamond', serif;
				font-size: calc(18px + 0.5vw);
				font-style: normal;
				font-weight: 300;
				margin-bottom: 0;
				margin-top: 22px;
				max-width: 800px;
				padding: 0 24px;
			}

			section {
				align-items: flex-start;
				display: flex;
				flex-flow: column nowrap;
				flex: 1;
				height: 100%;
				justify-content: space-between;
				padding: 44px;
				position: relative;
				width: 100%;
			}

			@media (max-width: 750px) {
				.boxes {
					justify-content: center;
				}

				h2 {
					font-size: 26px;
				}

				section {
					padding: 22px;
				}
			}
		`}</style>
	</>
)

export default Main
