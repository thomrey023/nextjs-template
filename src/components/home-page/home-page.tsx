const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Homepage = async () => {
  await delay(5000);
  return <main className="main-screen"></main>;
};

export default Homepage;
