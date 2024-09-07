import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <section
      id="contacto"
      className="flex flex-col items-center justify-center min-h-screen"
    >
      <h1 className="pb-4 m-16 text-6xl font-semibold border-b-4 border-current">
        Contáctame
      </h1>
      <ContactForm />
    </section>
  );
};

export default Contact;
