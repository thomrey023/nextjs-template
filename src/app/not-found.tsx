import { Metadata } from 'next';

import Error from '@/components/error/error';

export const metadata: Metadata = {
  title: 'Oops! Page Not Found',
  description: 'Something went wrong, or this link no longer exists.',
};

const NotFound = () => {
  return <Error />;
};

export default NotFound;
