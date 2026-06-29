import { Metadata } from 'next';

import NotFound from '@/components/error/not-found';

export const metadata: Metadata = {
  title: 'Oops! Page Not Found',
  description: 'Something went wrong, or this link no longer exists.',
};

const NotFoundPage = () => {
  return <NotFound />;
};

export default NotFoundPage;
