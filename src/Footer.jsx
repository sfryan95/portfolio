export default function Footer() {
  return (
    <div className="flex flex-col">
      <div className="border-b-2 border-[#DBDBDB]">
        <div className="container mx-auto grid grid-cols-12 pb-4">
          <div className="text-sm col-span-12 flex flex-col md:flex-row justify-start md:justify-between md:items-center px-[32px] md:px-[100px] mt-[56px]">
            <div className="mb-[48px] md:mb-0">
              <a className="font-medium text-[#898989] hover:text-[#EB6335]" href="mailto:sfryan95@gmail.com">
                sfryan95@gmail.com
              </a>
            </div>
            <div className="flex flex-row space-x-5 items-center justify-start">
              <div className="font-medium text-[#898989]">Follow me</div>
              <a href="https://www.linkedin.com/in/sean-francis-ryan/" className="text-[#a3a2a2] hover:text-[#EB6335]">
                LinkedIn
              </a>
              <a href="https://github.com/sfryan95" className="text-[#a3a2a2] hover:text-[#EB6335]">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-12 py-4 mb-[56px] text-[#a3a2a2] font-medium">
        <div className="text-sm col-span-12 flex flex-col md:flex-row justify-start md:justify-between md:items-center px-[32px] md:px-[100px]">
          <div className="mb-[48px] md:mb-0">
            <div>Version 1.0</div>
          </div>
          <div className="flex flex-row space-x-5 items-center justify-start">
            <div>Terms</div>
            <div>Privacy</div>
          </div>
        </div>
      </div>
    </div>
  );
}
