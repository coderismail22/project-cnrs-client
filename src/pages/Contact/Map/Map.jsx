const Map = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <iframe
        className="w-full xs:w-[380px] sm:w-[500px] md:w-[700px] lg:w-[1000px] h-[450px] "
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d29205.666303762875!2d90.406582!3d23.7934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70e7e779c17%3A0x39d085f8ef36e8d3!2sCenter%20for%20Natural%20Resource%20Studies%20(CNRS)!5e0!3m2!1sen!2sus!4v1724758357286!5m2!1sen!2sus"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
