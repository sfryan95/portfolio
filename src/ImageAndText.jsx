import SectionText from './SectionText';
import PropTypes from 'prop-types';

const ImageAndText = ({
  id = '', // Default value for id
  subheadline,
  headlineFirstLine,
  headlineSecondLine,
  headingElement,
  description,
  buttonText,
  buttonLink,
  imageUrl,
  swapOrder = false, // Default value for swapOrder
  marginTop = '0', // Default value for marginTop
  fontSize = 'text-4xl', // Default value for fontSize
}) => {
  return (
    <div id={id} className="py-20 xl:py-[152px]">
      <div className="container mx-auto grid grid-cols-12 gap-8 px-8 md:px-[100px]">
        {/* Swapping image and text based on the swapOrder prop */}
        {swapOrder ? (
          <>
            {/* Text Section */}
            <div className="col-span-12 xl:col-span-6 flex flex-col items-center">
              <SectionText
                fontSize={fontSize}
                subheadline={subheadline}
                headlineFirstLine={headlineFirstLine}
                headlineSecondLine={headlineSecondLine}
                description={description}
                layoutType="default"
                marginTop={marginTop}
                headingElement={headingElement}
              />

              {/* Customizable Button */}
              <a href={buttonLink} className="inline-block py-3 px-6 bg-[#EB6335] text-white font-bold rounded-lg hover:bg-[#D8532F] transition duration-300 self-start">
                {buttonText}
              </a>
            </div>

            {/* Image Section */}
            <div className="col-span-12 xl:col-span-6 flex justify-end overflow-hidden">
              <img src={imageUrl} alt="Hero Image" className="w-full h-auto max-h-[480px] max-w-[560px] rounded-xl object-cover" />
            </div>
          </>
        ) : (
          <>
            {/* Image Section */}
            <div className="col-span-12 xl:col-span-6 flex justify-start overflow-hidden">
              <img src={imageUrl} alt="Hero Image" className="w-full h-auto max-h-[480px] max-w-[560px] rounded-xl object-cover" />
            </div>

            {/* Text Section */}
            <div className="col-span-12 xl:col-span-6 flex flex-col justify-center">
              <SectionText
                fontSize={fontSize}
                subheadline={subheadline}
                headlineFirstLine={headlineFirstLine}
                headlineSecondLine={headlineSecondLine}
                description={description}
                layoutType="default"
                marginTop={marginTop}
                headingElement={headingElement}
              />

              {/* Customizable Button */}
              <a href={buttonLink} className="inline-block py-3 px-6 bg-[#EB6335] text-white font-bold rounded-lg hover:bg-[#D8532F] transition duration-300 self-start">
                {buttonText}
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

ImageAndText.propTypes = {
  id: PropTypes.string, // Adding the id prop to the validation
  subheadline: PropTypes.string.isRequired,
  headlineFirstLine: PropTypes.string.isRequired,
  headlineSecondLine: PropTypes.string.isRequired,
  headingElement: PropTypes.string,
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired, // Accepts either a string or an object
  buttonText: PropTypes.string.isRequired,
  buttonLink: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  fontSize: PropTypes.string, // Optional prop for font size
  swapOrder: PropTypes.bool, // Controls whether to swap image and text sections
  marginTop: PropTypes.string, // Optional margin-top for SectionText
};

export default ImageAndText;
