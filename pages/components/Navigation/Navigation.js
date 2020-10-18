import Logo from '../Logo'

const Navigation = () => (
	<>
		<div className="container">
			<div className="logoContainer">
				<Logo />
				<h1>
					<span>CMS</span>
					<span>Building</span>
					<span>Services</span>
				</h1>
			</div>
			<a href="tel:07467 947786">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
				>
					<path d="M20.89 23.654c-7.367 3.367-18.802-18.86-11.601-22.615l2.107-1.039 3.492 6.817-2.083 1.026c-2.189 1.174 2.37 10.08 4.609 8.994.091-.041 2.057-1.007 2.064-1.011l3.522 6.795c-.008.004-1.989.978-2.11 1.033zm-9.438-2.264c-1.476 1.072-3.506 1.17-4.124.106-.47-.809-.311-1.728-.127-2.793.201-1.161.429-2.478-.295-3.71-1.219-2.076-3.897-1.983-5.906-.67l.956 1.463c.829-.542 1.784-.775 2.493-.609 1.653.388 1.151 2.526 1.03 3.229-.212 1.223-.45 2.61.337 3.968 1.243 2.143 4.579 2.076 6.836.316-.412-.407-.811-.843-1.2-1.3z" />
				</svg>
				<span className="call-us">Call us on </span>07467 947786
			</a>
		</div>

		<style jsx>{`
			a {
				color: #6655d6;
				font-family: 'Montserrat Subrayada', sans-serif;
				font-size: 22px;
				font-style: normal;
				font-weight: 600;
				text-decoration: none;
				margin-right: 44px;
			}

			.call-us {
				color: black;
				font-family: 'Cormorant Garamond', serif;
				font-size: 26px;
			}

			.container {
				align-items: center;
				border-bottom: 5px solid #a0a0a0;
				display: flex;
				justify-content: space-between;
			}

			h1 {
				display: flex;
				flex-flow: column nowrap;
				font-family: 'Montserrat Subrayada', sans-serif;
				font-size: 16px;
				font-weight: 700;
				height: 50px;
				justify-content: space-between;
				line-height: 13px;
				margin: 0 0 0 6px;
			}

			.logoContainer {
				align-items: center;
				border-right: 5px solid #a0a0a0;
				display: flex;
				flex-flow: row nowrap;
				justify-content: center;
				padding: 10px;
				width: 162px;
			}

			svg {
				fill: black;
				margin-right: 4px;
				vertical-align: middle;
			}

			@media (max-width: 750px) {
				a {
					background-color: #6655d6;
					color: white;
					font-size: 16px;
					left: 0;
					padding: 10px;
					position: absolute;
					text-align: center;
					top: 0;
					width: 100%;
				}

				.call-us {
					color: white;
					font-size: 18px;
				}

				.container {
					justify-content: center;
				}

				.logoContainer {
					border-right: 0;
					padding-top: 58px;
				}

				svg {
					fill: white;
				}
			}
		`}</style>
	</>
)

export default Navigation
