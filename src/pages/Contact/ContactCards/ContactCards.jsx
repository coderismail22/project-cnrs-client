import ContactCard from "../../../components/ContactCard/ContactCard";

const ContactCards = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5  p-5 max-w-5xl">
      <ContactCard
        icon={"office"}
        title={"Head Office Address"}
        description={
          "House 13 (4th-6th floor), Road 17, Block D, Banani, Dhaka 1213"
        }
      />
      <ContactCard
        icon={"tree"}
        title={"Work Hours"}
        description={"Sunday to Thursday: 10am– 7pm Weekend: Operational"}
      />
      <ContactCard
        icon={"phone"}
        title={"Phone Numbers"}
        description={"Tel: +(880 2) 222274127-8"}
      />
      <ContactCard
        icon={"mail"}
        title={"Email us at"}
        description={"info@cnrs.org.bd"}
      />
    </div>
  );
};

export default ContactCards;
