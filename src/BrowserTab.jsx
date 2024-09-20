const BrowserTab = ({ url, imageUrl }) => {
  return (
    <a href={url} className="cursor-pointer">
      <div className="browser-tab h-[350px] lg:h-[500px] xl:h-[400px] border border-gray-300 rounded-lg shadow-md overflow-hidden">
        <div className="tab-header bg-gray-100 p-2 flex items-center border-b border-gray-300">
          <div className="url-bar flex items-center">
            <div className="ssl-icon mr-2">
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.22139 4.58516H7.77694C8.05479 4.58516 8.27059 4.80488 8.27059 5.06438V7.79165C8.27059 8.05115 8.05479 8.27087 7.77694 8.27087H2.22139C1.94354 8.27087 1.72773 8.05115 1.72773 7.79165V5.06438C1.72773 4.80488 1.94354 4.58516 2.22139 4.58516Z"
                  stroke="#202126"
                  strokeWidth="0.6"
                  strokeLinecap="square"
                  strokeLinejoin="bevel"
                />
                <path
                  d="M2.85645 4.28488V3.01504C2.85645 2.59406 3.08221 2.19032 3.48407 1.89264C3.88594 1.59497 4.43098 1.42773 4.9993 1.42773C5.56762 1.42773 6.11267 1.59497 6.51453 1.89264C6.91639 2.19032 7.14216 2.59406 7.14216 3.01504V4.28488"
                  fill="#202126"
                />
              </svg>
            </div>
            <div className="url text-sm text-gray-700">{url}</div>
          </div>
        </div>
        <div className="content flex justify-center items-center h-full">
          <img src={imageUrl} loading="lazy" alt="Website preview" className="w-full h-full object-fill" />
        </div>
      </div>
    </a>
  );
};

export default BrowserTab;
