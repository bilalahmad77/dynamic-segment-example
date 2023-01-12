import Link from 'next/link';

export default function Home() {
  return (
    <div>
          Hello World from Panaverse DAO!
          <br/>
          <Link href="/bilal">Go to Bilal page</Link>
          <br/>
          <Link href="/ahmad">Go to Ahmad page</Link>
          <br/>
          <Link href="/awan">Go to Awan page</Link>
          <br/>
          You can also create a dynamic page by entering this URL in the browser: http://localhost:3000/xyz
    </div>
  )
}