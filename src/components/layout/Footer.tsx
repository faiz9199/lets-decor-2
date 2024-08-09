const Footer = () => {
    return (
      <div className="border border-t-slate-400">
        <div className="flex justify-evenly my-10">
          <div>
            <p className="text-xl font-semibold">Get In Touch</p>
            <p>Portland, Oregon</p>
            <p>Office 2 - Silom, Bangkok, Thailand</p>
            <p>Phone: +1 971-295-3811</p>
            <p>Mail: Info.Eventcracker@Gmail.Com</p>
          </div>
          <div className="hidden md:block">
            <p className="text-xl font-semibold">Our Locations</p>
            <p>Portland</p>
            <p>Northern California</p>
            <p>Thailand</p>
          </div>
        </div>
        <div className="bg-red-300 h-3 w-full"></div>
      </div>
    );
  };
  export default Footer;
  