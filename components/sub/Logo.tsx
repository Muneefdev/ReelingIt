import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="inline-block">
      <Image
        width={130}
        height={130}
        src="/logo/logo.svg"
        alt="ReelingIt Logo"
      />
    </Link>
  );
}
