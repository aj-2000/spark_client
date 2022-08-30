import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();
const { name } = publicRuntimeConfig.site;

const Home = () => {
  return (
    <h1>{name}</h1>
  );
};

export default Home;
