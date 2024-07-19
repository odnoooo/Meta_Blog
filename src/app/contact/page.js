"use client";

const ContactPage = () => {
  return (
    <div className="lg:w-[643px] m-auto flex flex-col gap-5 lg:gap-10 p-3 ">
      <div className="flex flex-col gap-5">
        <div className="[&>p]:text-gray-500 text-lg flex flex-col gap-5">
          <h1 className="text-2xl font-semibold">Contact Us</h1>
          <p className="font-light text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam
          </p>
        </div>
        <div className=" flex flex-col gap-5 lg:flex-row lg:gap-[50px] [&>h1]:text-xl [&>h1]:font-semibold ">
          <div className="w-full p-3 text-gray-500 flex flex-col gap-2 border rounded-xl lg:flex-1 ">
            <h1 className="font-semibold text-black">Address</h1>
            <p className="font-light text-sm">
              1328 Oak Ridge Drive, Saint <br /> Louis, Missouri
            </p>
          </div>
          <div className="p-3 text-gray-500 flex flex-col gap-2 border rounded-xl flex-1">
            <h1 className="font-semibold text-black">Contact</h1>
            <p className="font-light text-sm">
              313-332-8662 <br /> info@email.com
            </p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 lg:p-10 lg:pr-40 rounded-xl flex flex-col gap-6">
        <p className="font-semibold">Leave a message</p>
        <div>
          <form className="flex flex-col gap-8 font-light text-sm [&>input]:p-2">
            <div className="flex flex-col  lg:flex-row gap-4">
              <input
                className="w-full lg:flex-1 p-2 border rounded"
                name="yourName"
                placeholder="Your Name"
                required
              />
              <input
                className="w-full lg:flex-1 p-2 border rounded"
                name="yourEmail"
                placeholder="Your Email"
                type="email"
                required
              />
            </div>
            <div className="relative  flex items-center py-2">
              <input
                className="border rounded absolute  p-2 w-full"
                name="subject"
                placeholder="Subject"
                required
              />
              <input
                className="flex right-2 absolute w-4 p-2"
                type="ckeckbox"
              />
            </div>

            <textarea
              className="border rounded p-2 "
              name="message"
              placeholder="Write a message"
              required
            />
          </form>
        </div>
      </div>
      <button className="bg-[#4B6BFB] hover:bg-blue-600 px-4 py-2 lg:w-fit text-white rounded text-sm font-light cursor-pointer ">
        Send Message
      </button>
    </div>
  );
};

export default ContactPage;
