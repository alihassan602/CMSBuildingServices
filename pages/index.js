import { Footer, Hero, Navigation } from './components'

const Home = () => (
	<>
		<div className="container">
			<div className="animate">
				<Navigation />
				<Hero />
			</div>
			<Footer />
		</div>
		<style jsx>{`
			@keyframes fadeIn {
				from {
					opacity: 0;
				}

				to {
					opacity: 1;
				}
			}

			.animate {
				animation: fadeIn 1s forwards 1.5s;
				display: flex;
				flex-flow: column nowrap;
				height: 100%;
				justify-content: space-between;
				min-height: calc(100vh - 60px);
				opacity: 0;
			}

			.container {
				border: 10px solid black;
				display: flex;
				flex-flow: column nowrap;
				height: 100%;
				margin: 20px;
				min-height: calc(100vh - 40px);
				position: relative;
			}

			@media (max-width: 750px) {
				.animate {
					animation: fadeIn 1s forwards;
					opacity: 0;
				}

				.container {
					border: 5px solid black;
					margin: 5px;
					min-height: calc(100vh - 10px);
				}
			}
		`}</style>
	</>
)

export default Home
