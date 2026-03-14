export const getServerSideURL = () => {
  let url = process.env.NEXT_PUBLIC_SERVER_URL;

  if (!url) {
    url = "https://visumstelle.vercel.app"; // TODO: update in prod
  }

  return url;
};
