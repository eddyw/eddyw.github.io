import Link from 'next/link'

export default function Index() {
	return (
		<section>
			<Link href="/other">
				<h1>Go to other</h1>
			</Link>
		</section>
	)
}
