import SectionText from './SectionText';

export default function ServicesText() {
  return (
    <div className="py-8">
      <div className="container mx-auto grid grid-cols-12 gap-8 px-8 md:px-[100px]">
        <div className="col-span-12">
          <SectionText
            subheadline="Services"
            headlineFirstLine="Dream. Design."
            headlineSecondLine="Develop. Launch."
            description="My services include the full process of digital product design for websites and web apps, including user experience design (UX), user interface design (UI), and full-stack development."
            layoutType="split"
            headingElement="h3"
          />
        </div>
      </div>
    </div>
  );
}
