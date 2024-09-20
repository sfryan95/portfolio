import SectionText from './SectionText';

export default function ContactText() {
  const currentTime = new Date();
  const formattedTime = currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  return (
    <div className="py-8">
      <div className="container mx-auto grid grid-cols-12 gap-8 px-8 md:px-[100px]">
        <div className="col-span-12">
          <SectionText
            subheadline="Contact"
            headlineFirstLine="Want to work with me?"
            headlineSecondLine="I'd love to hear from you!"
            description={
              <>
                <div className="flex text-[#808080] hover:text-[#EB6335] mt-4 md:mt-0">
                  <div id="local-time-label">Local Time: &nbsp;</div>
                  <time aria-labelledby="local-time-label" aria-live="polite">
                    <span className="font-bold">{formattedTime}</span> PST
                  </time>
                </div>
              </>
            }
            layoutType="contact"
            headingElement="h5"
          />
        </div>
      </div>
    </div>
  );
}
