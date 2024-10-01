import Footer from "../layout/Footer"


function AboutUs() {
  return (
    <div className="pt-24">
      <div className="pl-20">
        <h1 className="text-4xl font-bold py-5">About AnestheSure</h1>
        <h3 className="text-2xl font-bold py-5">Mission Statement</h3>
        <p className="text-xl mb-3">
          Drugs.com is the largest, most widely visited, independent medicine
          information website available on the Internet. Our aim is to be the
          Internet’s most trusted resource for drug and related health
          information. We will achieve this aim by presenting independent,
          objective, comprehensive and up-to-date information in a clear and
          concise format for both consumers and healthcare professionals.
        </p>
        <h2 className="text-2xl font-bold mb-3">The AnestheSure Database</h2>
        <p>
          The Drugs.com Drug Information Database is powered by several
          independent leading medical-information suppliers, including; American
          Society of Health-System Pharmacists, Cerner Multum and Micromedex.
          Individual drug (or drug-class) content compiled by these sources is
          peer reviewed and delivered by Drugs.com.
        </p>
        <p className="">
          AnestheSure also publishes health content from other sources such as;
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs
