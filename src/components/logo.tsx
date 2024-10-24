import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" alt="Image Logo" width={197} height={36} />
    </Link>
  );
}
