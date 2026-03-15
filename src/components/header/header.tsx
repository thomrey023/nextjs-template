import Image from 'next/image';
import Link from 'next/link';

import HeaderContent from '@/components/header/subcomponent/header-content';

const Header = () => {
  return (
    <header className="header-class min-h-18.5">
      <div className="row-flex px-constant w-full justify-between items-center">
        <Link href={`/`}>
          <Image
            className="object-cover shrink-0"
            src="/logos/nextjs-logo.svg"
            alt="Header logo"
            decoding="async"
            loading="eager"
            width={246}
            height={25}
            priority
          />
        </Link>

        <HeaderContent />
      </div>
    </header>
  );
};

export default Header;
