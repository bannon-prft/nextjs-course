import Link from 'next/link'

export default function NewPage() {
  return (
    <>
      <h1>News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framework">
            NextJS Is a Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </>
  )
}
