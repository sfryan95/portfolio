import SectionText from './SectionText';

export default function WorkText() {
  return (
    <div id="work" className="py-8">
      <div className="container mx-auto grid grid-cols-12 gap-8 px-8 md:px-[100px]">
        <div className="col-span-12">
          <SectionText
            subheadline="Work"
            headlineFirstLine="A small selection"
            headlineSecondLine="of recent projects."
            description="I've been deeply passionate about supporting clients in achieving their goals while actively contributing to the open-source community, driving innovation and collaboration forward."
            layoutType="split"
            headingElement="h2"
          />
        </div>
      </div>
    </div>
  );
}
