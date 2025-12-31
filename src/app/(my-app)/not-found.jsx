import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>404 - صفحه پیدا نشد</h1>
      <p>صفحه مورد نظر در سایت Ariafire وجود ندارد.</p>
      <Link href="/" style={{ color: 'red' }}>بازگشت به صفحه اصلی</Link>
    </div>
  )
}