import React from "react";
import { Helmet } from "react-helmet-async";
import LegalLayout from "./LegalLayout";

const CookiesPolicy = () => {
  return (
    <LegalLayout title="Cookies Policy">  
     
      <p className="text-gray-500">
        This demo template does not collect user data.
        Cookies can be implemented when integrating backend services.
      </p>
      
      <p className="mt-8 text-gray-600">
        Last updated: <strong>{new Date().getFullYear()}</strong>
      </p>
    </LegalLayout>
  );
};

export default CookiesPolicy;
