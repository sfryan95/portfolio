import CrosshairSVG from './assets/crosshair.svg';

export default function FAQTab({ question, answer, isOpen, onClick }) {
  return (
    <div className="flex flex-col border-2 border-[#DBDBDB] w-[90%] md:w-[60%] xl:w-[35%] rounded-lg text-md mb-6 px-1 py-2">
      <div className="flex items-center justify-between cursor-pointer p-4" onClick={onClick}>
        <div className="flex items-center">
          {/* Apply rotation based on isOpen */}
          <img src={CrosshairSVG} alt="bulletpoint" className={`mr-2 transform transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-90' : '-rotate-90'}`} />
          <p className="w-full break-words text-lg font-semibold">{question}</p> {/* Ensure question wraps */}
        </div>
      </div>
      {isOpen && (
        <div className="text-[#808080] pb-4 w-full">
          <p className="break-words w-full px-11">{answer}</p> {/* Ensure answer wraps */}
        </div>
      )}
    </div>
  );
}
