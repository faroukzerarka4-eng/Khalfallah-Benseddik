import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-hero-radial px-6 text-center">
      <div>
        <p className="font-display text-8xl font-bold text-gradient-green">٤٠٤</p>
        <h1 className="mt-4 text-2xl font-bold">الصفحة غير موجودة</h1>
        <p className="mx-auto mt-2 max-w-md text-muted">
          عذرًا، يبدو أن الصفحة التي تبحث عنها غير متوفرة. يمكنك العودة إلى
          الصفحة الرئيسية.
        </p>
        <Link href="/" className="btn-primary mt-8">
          <Home size={18} />
          العودة للرئيسية
        </Link>
      </div>
    </main>
  );
}
