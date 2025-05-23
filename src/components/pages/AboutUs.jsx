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

        <p className="text-xl mb-2">
          The Drugs.com Drug Information Database is powered by several
          independent leading medical-information suppliers, including; American
          Society of Health-System Pharmacists, Cerner Multum and Micromedex.
          Individual drug (or drug-class) content compiled by these sources is
          peer reviewed and delivered by Drugs.com.
        </p>

        <p className="text-xl mb-3">
          AnestheSure also publishes health content from other sources such as;
        </p>

        <h2 className="text-2xl font-bold mb-3">
          Harvard Health Publications
        </h2>

        <p className="text-xl mb-3">
          Articles include Harvard Health Topics A to Z and Harvard Health
          Decision Guides (used in our Symptom Checker). Harvard Health
          Publications is the publishing division of the Harvard Medical School
          of Harvard University and draws on the expertise of the 9,000 faculty
          physicians to provide authoritative and trustworthy consumer health
          information.
        </p>

        <h2 className="text-2xl font-bold mb-3">
          DVMetrics - Animalytics
        </h2>
        
        <p className="text-xl pb-10">
          The Drugs.com Veterinary Product Database is an online version of the
          Compendium of Veterinary Products published by DVMetrics. The
          Compendium of Veterinary Products is the animal health industrys
          largest and most comprehensive database of more than 6,000
          pharmaceutical, biological, parasiticide and supplement product
          monographs. DVMetrics is the home for some of the most trusted
          resources used by veterinary professionals in North America including
          the North American Compendium of Veterinary Products and the Safety
          Data Sheet Library which has been available for over 30 and 25 years,
          respectively.
        </p>
      </div>

      <Footer />
    </div>
  );
}

export default AboutUs
