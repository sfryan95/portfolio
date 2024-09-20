import { useEffect } from 'react';
import BrowserTab from './BrowserTab';

const Work = () => {
  const browserTabsData = [
    { url: 'https://contracthero.com', imageUrl: 'https://cdn.prod.website-files.com/646b443c3877cab907282c19/646e951f7eb54cdf5c59a237_contracthero-case.webp' },
    { url: 'https://www.reactype.dev/', imageUrl: '/src/assets/ReacType.png' },
    { url: 'https://example3.com', imageUrl: 'https://via.placeholder.com/474x306' },
    { url: 'https://example4.com', imageUrl: 'https://via.placeholder.com/474x306' },
  ];

  // Preload the images when the component mounts
  useEffect(() => {
    const preloadImages = () => {
      browserTabsData.forEach((tab) => {
        const img = new Image();
        img.src = tab.imageUrl;
      });
    };

    preloadImages();
  }, []); // Empty dependency array means it runs only once after the component mounts

  return (
    <div className="container mx-auto items-center pt-4 pb-12">
      <div className="flex flex-col px-8 md:px-[100px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Responsive grid with different columns on different screen sizes */}
          {browserTabsData.map((tab, index) => (
            <BrowserTab key={index} url={tab.url} imageUrl={tab.imageUrl} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
