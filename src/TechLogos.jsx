import { motion } from 'framer-motion';

const TechList = () => {
  const techLogos = {
    typescript: 'https://cdn.worldvectorlogo.com/logos/typescript.svg',
    javascript: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg',
    python: 'https://cdn.worldvectorlogo.com/logos/python-5.svg',
    solidity: 'https://cdn.worldvectorlogo.com/logos/solidity.svg',
    html5: 'https://cdn.worldvectorlogo.com/logos/html-1.svg',
    css: 'https://cdn.worldvectorlogo.com/logos/css-3.svg',
    tailwindcss: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg',
    react: 'https://cdn.worldvectorlogo.com/logos/react-2.svg',
    redux: 'https://cdn.worldvectorlogo.com/logos/redux.svg',
    node: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg',
    express: 'https://icon.icepanel.io/Technology/png-shadow-512/Express.png',
    nextjs: 'https://cdn.worldvectorlogo.com/logos/next-js.svg',
    mongodb: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg',
    mongoose: 'https://icon.icepanel.io/Technology/svg/Mongoose.js.svg',
    postgresql: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg',
    reactrouter: 'https://www.svgrepo.com/show/354262/react-router.svg',
    materialui: 'https://cdn.worldvectorlogo.com/logos/material-ui-1.svg',
    restapi: 'https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png',
    webpack: 'https://cdn.worldvectorlogo.com/logos/webpack-icon.svg',
    vite: 'https://cdn.worldvectorlogo.com/logos/vitejs.svg',
    jest: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/jest-js-icon.png',
    vitest: 'https://vitest.dev/logo-shadow.svg',
    git: 'https://cdn.worldvectorlogo.com/logos/git-icon.svg',
    github: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg',
    aws: 'https://cdn.worldvectorlogo.com/logos/aws-logo.svg',
    docker: 'https://cdn.worldvectorlogo.com/logos/docker-4.svg',
    kubernetes: 'https://cdn.worldvectorlogo.com/logos/kubernets.svg',
    socketio: 'https://cdn.worldvectorlogo.com/logos/socket-io.svg',
    opencv: 'https://icon.icepanel.io/Technology/svg/OpenCV.svg',
    pandas: 'https://cdn.worldvectorlogo.com/logos/pandas.svg',
    numpy: 'https://cdn.worldvectorlogo.com/logos/numpy-1.svg',
    scipy: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/SCIPY_2.svg',
    matplotlib: 'https://cdn.worldvectorlogo.com/logos/matplotlib-1.svg',
    seaborn: 'https://cdn.worldvectorlogo.com/logos/seaborn-1.svg',
    fastapi: 'https://cdn.worldvectorlogo.com/logos/fastapi-1.svg',
    hardhat: 'https://cdn.worldvectorlogo.com/logos/hardhat-seeklogo-com.svg',
    ethersjs: 'https://svgmix.com/uploads/813f18-web3js.svg',
    web3js: 'https://files.svgcdn.io/logos/ethers.svg',
  };

  const logoEntries = Object.entries(techLogos);
  const scrollingLogos = [...logoEntries, ...logoEntries]; // Duplicate to create a seamless loop

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="text-gray-600 text-md mt-16 lg:mt-24 mb-8">Skills</div>
      <div className="flex justify-center items-center w-full">
        <div className="w-[85%] lg:w-[70%] flex items-center justify-center">
          <div className="tech-list-container relative overflow-hidden mb-24 lg:mb-[152px]">
            <motion.div
              className="inline-flex"
              animate={{ x: ['0%', '-75%'] }} // Move only half to allow a seamless loop
              transition={{ ease: 'linear', duration: 240, repeat: Infinity }}
              style={{
                margin: '0 100px', // Add margin to create space on the sides
                maskImage: 'linear-gradient(to right, transparent, black 10%, black 100%, transparent)',
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 100%, transparent)',
              }}>
              {scrollingLogos.map(([techName, logoUrl], index) => (
                <div key={index} className="tech-item mx-16 flex justify-center items-center">
                  <img src={logoUrl} alt={`${techName} logo`} className="w-8 h-8 object-contain filter grayscale contrast-100" />
                  <p className="pl-2">{techName}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechList;
