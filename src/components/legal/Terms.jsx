import React from "react";
import { Helmet } from "react-helmet-async";
import LegalLayout from "./LegalLayout";

const Terms = () => {
  return (
    <LegalLayout title="Terms & Conditions">  
      

      <p className="text-gray-500">
        These terms apply to the usage of the QuickBite
        UI template demonstration.
      </p>

      <p className="mt-8 text-gray-600">
        Last updated: <strong>{new Date().getFullYear()}</strong>
      </p>
    </LegalLayout>
  );
};

export default Terms;
