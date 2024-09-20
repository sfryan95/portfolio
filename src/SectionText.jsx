import PropTypes from 'prop-types';

const SectionText = ({
  subheadline,
  headlineFirstLine,
  headlineSecondLine,
  description,
  layoutType,
  marginTop = '0', // Default value for marginTop
  fontSize = 'text-2xl sm:text-3xl md:text-4xl', // Default value for fontSize
  headingElement: HeadingElement = 'h1', // Default value for headingElement
}) => {
  const renderHeadline = () => (
    <div className={`w-full mt-${marginTop}`}>
      {/* Subheadline */}
      <p className={layoutType === 'contact' ? 'text-md md:text-lg text-[#EB6335] mb-4' : 'text-md md:text-lg text-[#EB6335] mb-[-25px]'}>{subheadline}</p>

      {/* Headline for contact section */}
      {layoutType === 'contact' ? (
        <HeadingElement className={`${fontSize} leading-tight text-center`}>
          {/* Display headlines on separate lines for smaller screens and inline on xl screens */}
          <span className="block xl:inline-block">{headlineFirstLine}</span>
          <span className="block xl:inline-block xl:ml-2">{headlineSecondLine}</span>
        </HeadingElement>
      ) : (
        /* Default headline rendering */
        <HeadingElement className={`${fontSize} leading-tight mb-6 text-center`}>
          <span className={layoutType === 'default' ? 'block pl-20' : 'block'}>{headlineFirstLine}</span>
          <span className="block text-start">{headlineSecondLine}</span>
        </HeadingElement>
      )}
    </div>
  );

  return (
    <div className="col-span-12">
      {(() => {
        switch (layoutType) {
          case 'default':
            return (
              <div className="mb-6 flex flex-col w-full">
                {renderHeadline()}
                <div className="w-full">
                  {/* Conditional rendering for description */}
                  {typeof description === 'string' ? <p className="md:text-lg sm:text-md text-sm text-gray-600">{description}</p> : <div className="md:text-lg sm:text-md text-sm text-gray-600">{description}</div>}
                </div>
              </div>
            );
          case 'split':
            return (
              <div className="flex flex-col xl:flex-row items-start justify-between">
                <div className="w-full xl:w-1/2">{renderHeadline()}</div>
                <div className="w-full xl:w-1/2">
                  {/* Conditional rendering for description */}
                  {typeof description === 'string' ? <p className="md:text-lg sm:text-md text-sm text-gray-600">{description}</p> : <div className="md:text-lg sm:text-md text-sm text-gray-600">{description}</div>}
                </div>
              </div>
            );
          case 'contact': // Example third case, replace with your layout type
            return (
              <div className="flex flex-col items-center justify-center">
                <div className="w-full text-center">{renderHeadline()}</div>
                <div className="w-full mt-4 flex justify-center">
                  {/* Conditional rendering for description */}
                  {typeof description === 'string' ? <p className="md:text-lg sm:text-md text-sm text-gray-600 text-center">{description}</p> : <div className="md:text-lg sm:text-md text-sm text-gray-600 text-center">{description}</div>}
                </div>
              </div>
            );
          default:
            return null;
        }
      })()}
    </div>
  );
};

SectionText.propTypes = {
  subheadline: PropTypes.string.isRequired,
  headlineFirstLine: PropTypes.string.isRequired,
  headlineSecondLine: PropTypes.string.isRequired,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired, // Accepts either a string or an object
  layoutType: PropTypes.oneOf(['default', 'split']).isRequired, // Determines the layout style
  marginTop: PropTypes.string, // Optional prop for margin-top
  fontSize: PropTypes.string, // Optional prop for font size
  headingElement: PropTypes.elementType, // Heading element (h1, h2, h3, etc.)
};

export default SectionText;
