import google from "/images/google.png";
import amazon from "/images/amazon.png";
import meta from "/images/meta.png";
import microsoft from "/images/microsoft.png";
import netflix from "/images/netflix.png";

const Partners = () => {
  const partners = (
    <>
      <img className="w-24 h-32 object-contain" src={google} alt="Google" />
      <img className="w-24 h-32 object-contain" src={meta} alt="Meta" />
      <img
        className="w-28 h-32 object-contain"
        src={microsoft}
        alt="Microsoft"
      />
      <img className="w-28 h-32 object-contain" src={netflix} alt="Netflix" />
      <img className="w-28 h-32 object-contain" src={amazon} alt="Amazon" />
    </>
  );
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-4">Our Partners</h1>
      <hr className="max-w-xs mx-auto" />
      <div className="flex items-center justify-evenly flex-wrap">
        {partners}
      </div>
    </div>
  );
};

export default Partners;
