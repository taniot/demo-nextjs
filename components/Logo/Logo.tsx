import Image from 'next/image';
import Link from 'next/link';
const Logo = () => {
  return (
    <Link href="/" title="Main Title">
      <Image src="/logo-demo.jpg" alt="Logo Demo" width={200} height={200} />
    </Link>
  );
};

export default Logo;
