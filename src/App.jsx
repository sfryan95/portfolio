import Header from './Header';
import Work from './Work';
import WorkText from './WorkText';
import ServicesText from './ServicesText';
import ImageAndText from './ImageAndText';
import Footer from './Footer';
import FAQ from './FAQ';
import frankieImage from './assets/frankie.webp'; // Dynamically imports the image with Vite handling the hash
import TechList from './TechLogos';
import Contact from './Contact';

// Preload the image by creating a new Image object
const img = new Image();
img.src = frankieImage;

function App() {
  return (
    <>
      <div className="flex flex-col">
        <Header />
        <ImageAndText
          id="home"
          subheadline="Sean Ryan"
          headlineFirstLine="Software Engineer"
          headlineSecondLine="& Digital Designer."
          description="I design and develop high-end full-stack experiences for design-driven companies that value attention to detail."
          buttonText="Contact me"
          buttonLink="#contact"
          imageUrl={frankieImage}
          marginTop="150px"
          fontSize="text-3xl sm:text-4xl md:text-5xl"
        />
        <TechList />
        <WorkText />
        <Work />
        <ServicesText />
        <ImageAndText
          id="about"
          subheadline="About"
          headlineFirstLine="Full-stack developer"
          headlineSecondLine="& open source contributor."
          description={
            <>
              <p>
                From the courtroom to the coding world, I bring 4 years of legal experience and a lifelong passion for technology to my engineering career. Whether solving legal puzzles or writing clean, efficient code, I thrive on turning complex
                challenges into elegant solutions.
              </p>
              <br></br>
              <p>
                When I'm not building full-stack applications, you can find me strategizing in FPS games with friends, chasing the perfect landscape shot, battling my cousin in chess, or diving into IPO filings to discover the latest tech
                innovations.
              </p>
            </>
          }
          buttonText="Learn More"
          buttonLink="#faq"
          imageUrl={frankieImage}
          marginTop="125px"
          swapOrder={true}
          fontSize="text-3xl sm:text-4xl md:text-5xl"
          headingElement="h4"
        />
        <Contact />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}

export default App;
