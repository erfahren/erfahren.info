import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="block w-16 h-6 mx-auto mb-4 rounded-full bg-conic-120 from-gradient-2 from-0% to-gradient-8 to-60%" />
      <p className="text-2xl text-center dark:text-white">
        <Link href="/">{name}</Link>
      </p>
    </header>
  );
}

