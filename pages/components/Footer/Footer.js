const Brick = ({ size = 'full', delay = '20' }) => (
	<>
		<div className={`brick ${size}`}></div>
		<style jsx>{`
			@keyframes fadeIn {
				from {
					opacity: 0;
				}

				to {
					opacity: 1;
				}
			}

			.brick {
				animation: fadeIn 0.3s linear ${delay * 100}ms forwards;
				border-left: 6px solid #a0a0a0;
				border-top: 6px solid #a0a0a0;
				height: 100%;
				max-width: 88px;
				opacity: 0;
				width: 100%;
			}

			.half {
				max-width: 44px;
				width: 100%;
			}
		`}</style>
	</>
)

const Footer = () => (
	<>
		<footer>
			<div className="container">
				<video playsInline="" autoPlay="autoplay" muted loop="loop">
					<source type="video/mp4" src="video.mp4" />
				</video>
				<div className="layer">
					<Brick delay="11" />
					<Brick delay="10" />
					<Brick delay="9" />
				</div>
				<div className="layer">
					<Brick delay="8" />
					<Brick delay="7" />
					<Brick delay="6" />
					<Brick delay="5" size="half" />
				</div>
				<div className="layer">
					<Brick delay="4" />
					<Brick delay="3" />
					<Brick delay="2" />
					<Brick delay="1" />
				</div>
			</div>
		</footer>
		<style jsx>{`
			@keyframes fadeIn {
				from {
					opacity: 0;
				}

				to {
					opacity: 1;
				}
			}

			.container {
				bottom: 0;
				display: flex;
				flex-flow: column nowrap;
				justify-content: flex-end;
				position: absolute;
				right: 0;
				width: 100%;
				z-index: -1;
			}

			footer {
				bottom: 0;
				position: absolute;
				right: 0;
				width: 100%;
			}

			.layer {
				display: flex;
				height: 44px;
				justify-content: flex-end;
			}

			video {
				animation: fadeIn 1s forwards 1.2s;
				opacity: 0;
				align-self: flex-end;
				width: fit-content;
			}

			@media (max-width: 750px) {
				.container {
					position: relative;
				}

				footer {
					margin-top: 22px;
					position: relative;
				}

				video {
					display: none;
				}
			}
		`}</style>
	</>
)

export default Footer
