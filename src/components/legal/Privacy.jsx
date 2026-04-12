import React from "react";
import { Helmet } from "react-helmet-async";
import LegalLayout from "./LegalLayout";

const Privacy = () => {
  return (
    <LegalLayout title="Privacy Policy" className='mt-1'> 

     

      <p className="text-gray-500 mb-4">
        This template is provided for UI demonstration purposes.
        Developers can integrate their own privacy policies when
        building real applications.
      </p>

      <p className="mt-8 text-gray-600">
        Last updated: <strong>{new Date().getFullYear()}</strong>
      </p>
    </LegalLayout>
  );
};

export default Privacy;
