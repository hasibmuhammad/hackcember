const Faq = () => {
  return (
    <div className="mt-14">
      <h1 className="text-4xl font-bold text-center mb-4">FAQ</h1>
      <hr className="max-w-xs mx-auto" />
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="w-full md:w-3/5">
          <div>
            <div className="collapse collapse-plus bg-base-100">
              <input type="radio" name="my-accordion-3" checked="checked" />
              <div className="collapse-title text-xl font-medium">
                Is there a deadline for applications?
              </div>
              <div className="collapse-content">
                <p>
                  Deadline for team applications is 31st December 2023 at 23:59
                </p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                How long is the hackathon running for?
              </div>
              <div className="collapse-content">
                <p>For 3 weeks the hackathon is going to run.</p>
              </div>
            </div>
            <div className="collapse collapse-plus bg-base-200">
              <input type="radio" name="my-accordion-3" />
              <div className="collapse-title text-xl font-medium">
                What are the prizes?
              </div>
              <div className="collapse-content">
                <p>
                  The Prizes varies with the hackathon types. We mentioned in
                  your home page in detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
