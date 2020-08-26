import Head from 'next/head'
// import logo from '/logo.png';
import { Divider, Image, List, Typography } from 'antd'
const { Text, Title } = Typography

const data = [
	'Painting',
	'Joinery',
	'Plumbing',
	'Handyman',
	'Electric',
	'Glass',
]

export default function Home() {
	return (
		<div className="container">
			<Head>
				<title>CMS Building Services</title>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<header className="header">
				<a href="tel:07467 947786" className="headerText">
					Call us on 07467 947786
				</a>
			</header>
			<main>
				<img className="logo" src="/logo.png" />
				<Text
					style={{
						width: 600,
						textAlign: 'center',
						fontSize: '1.25rem',
					}}
					className="description"
				>
					We provide all aspects of decorating, plumbing, joinery and
					installation of bathrooms and kitchens. We also do
					electrician for all homes and sites. We can do all aspects
					of building and building maintenance. We are a jack of all
					trades including all glass.
				</Text>
				{/* <Text
					style={{
						width: 600,
						textAlign: 'center',
						fontSize: '1.25rem',
						paddingTop: '16px',
					}}
					className="description"
				>
					Travel within lorem ipsum lorem ipsum lorem ipsum.
				</Text> */}
				<p className="description"></p>,
				<div className="grid">
					<div className="card">
						<h3>Services include</h3>

						<List
							size="small"
							bordered
							dataSource={data}
							renderItem={(item) => <List.Item>{item}</List.Item>}
						/>
					</div>

					<div className="card">
						<h3>Contact us</h3>
						<a href="mailto:cmsbuildingservices@gmail.com">
							cmsbuildingservices@gmail.com
						</a>
						<br />
						<a href="tel:07467 947786" className="headerText">
							07467 947786
						</a>
						<br />
						<a href="https://www.facebook.com/cleaningandmaintenancesco">
							Facebook
						</a>{' '}
					</div>

					{/* <div className="card">
						<h3>Social Feeds</h3>
						<p>Facebook</p>
					</div>

					<div className="card">
						<h3>.....</h3>
						<p>Lorem ipsum lorem ipsum lorem ipsum lorem ipsum.</p>
					</div> */}
				</div>
			</main>

			<footer className="footer">
				<div>CMSBuildingServices 2020 ©</div>
				<div>
					<a href="https://www.facebook.com/cleaningandmaintenancesco">
						Facebook
					</a>
				</div>
			</footer>

			<style jsx>{`
				.container {
					min-height: 100vh;
					// padding: 0 0.5rem;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				main {
					padding: 5rem 0;
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
				}

				header {
					background-color: #2196f3;
					width: 100%;
					height: 80px;
					// text-align: center;
					display: flex;
					// justify-content: center;
					align-items: center;
					font-size: 2rem;
					padding-left: 32px;
					padding-top: 8px;
				}

				headerText {
					text-color: white;
					padding: 10px 0 0 0;
					font-weight: 800;
				}

				footer {
					width: 100%;
					height: 100px;
					border-top: 1px solid #eaeaea;
					display: flex;
					justify-content: center;
					align-items: center;
				}

				image {
					width: 200px;
					height: 200px;
				}

				footer {
					display: flex;
					align-items: center;
					justify-content: space-between;
					// flex-wrap: wrap;

					// max-width: 800px;
					padding: 0 2rem;
					margin-top: 3rem;
				}

				footer img {
					margin-left: 0.5rem;
				}

				footer a {
					display: flex;
					justify-content: center;
					align-items: center;
				}

				a {
					color: inherit;
					text-decoration: none;
				}

				.title a {
					color: #0070f3;
					text-decoration: none;
				}

				.title a:hover,
				.title a:focus,
				.title a:active {
					text-decoration: underline;
				}

				.title {
					color: #0070f3;
					margin: 0;
					line-height: 1.15;
					font-size: 4rem;
				}

				.title,
				.description {
					text-align: center;
				}

				.description {
					line-height: 1.5;
					font-size: 1.5rem;
					max-width: 800px;
				}

				code {
					background: #fafafa;
					border-radius: 5px;
					padding: 0.75rem;
					font-size: 1.1rem;
					font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
						DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New,
						monospace;
				}

				.grid {
					display: flex;
					align-items: center;
					justify-content: center;
					// flex-wrap: wrap;

					max-width: 800px;
					margin-top: 3rem;
				}

				.card {
					margin: 1rem;
					flex-basis: 45%;
					padding: 1.5rem;
					text-align: left;
					color: inherit;
					text-decoration: none;
					border: 1px solid #eaeaea;
					border-radius: 10px;
					transition: color 0.15s ease, border-color 0.15s ease;
					height: 220px;
				}

				.card:hover,
				.card:focus,
				.card:active {
					// color: #0070f3;
					// border-color: #0070f3;
				}

				.card h3 {
					margin: 0 0 1rem 0;
					font-size: 1.5rem;
				}

				.card p {
					margin: 0;
					font-size: 1.25rem;
					line-height: 1.5;
				}

				.logo {
					width: 400px;
					height: 400px;
				}

				@media (max-width: 600px) {
					.grid {
						width: 100%;
						flex-direction: column;
					}
				}
			`}</style>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
					font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
						Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
						Helvetica Neue, sans-serif;
				}

				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	)
}
