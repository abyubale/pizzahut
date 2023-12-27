const PrivacyPolicy = () => {
  return (
    <div
      className="privacy-policy-container"
      style={{ minHeight: "71vh", padding: "100px" }}
    >
      <h1>Privacy Policy</h1>

      <section className="policy-section">
        <h2>1. Introduction</h2>
        <p>
          <strong>1.1 Overview:</strong> Briefly explain the purpose of the
          privacy policy and its importance.
        </p>
        <p>
          <strong>1.2 Scope:</strong> Specify the scope of the policy,
          indicating the types of personal information covered.
        </p>
      </section>

      <section className="policy-section">
        <h2>2. Information We Collect</h2>
        <p>
          <strong>2.1 Personal Information:</strong> Clearly list the types of
          personal information you collect (e.g., name, email, address).
        </p>
        <p>
          <strong>2.2 Automatically Collected Information:</strong> Describe any
          information collected automatically (e.g., IP address, device
          information).
        </p>
        <p>
          <strong>2.3 Cookies and Similar Technologies:</strong> Explain the use
          of cookies, tracking pixels, and similar technologies.
        </p>
      </section>

      <section className="policy-section">
        <h2>9. Contact Information</h2>
        <p>
          <strong>9.1 Contact Details:</strong> Provide contact information for
          users to reach out with privacy-related concerns.
        </p>
      </section>

      <section className="conclusion-section">
        <p>
          Reiterate the importance of privacy and encourage users to review the
          policy periodically.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
