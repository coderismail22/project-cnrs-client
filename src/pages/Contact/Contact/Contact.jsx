import ContactCards from "../ContactCards/ContactCards";
import Map from "../Map/Map";

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-yeseva font-bold text-3xl my-5">Find Us Here</h1>
      <ContactCards />
      <Map />
    </div>
  );
};

export default Contact;
