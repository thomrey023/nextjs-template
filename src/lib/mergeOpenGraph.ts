import type { Metadata } from 'next';

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description: 'ProjectName', // TODO: change description
  images: [
    {
      url: `https://example.vercel.app/favicon.svg`, // TODO: update in prod
      width: 1200,
      height: 630,
      alt: 'ProjectName Preview Image', // TODO: change alt text
    },
  ],
  siteName: 'ProjectName', // TODO: change siteName
  title: 'ProjectName', // TODO: change title
};

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  };
};
