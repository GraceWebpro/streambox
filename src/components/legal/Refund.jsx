import React from "react";
import LegalLayout from "./LegalLayout";

const Refund = () => {
  return (
    <LegalLayout title="Refund Policy">
      

      <p className="text-gray-500 mb-4">
        This template is provided for UI demonstration purposes.
        Developers can integrate their own refund policies when
        building real applications.
      </p>

      <p className="mt-8 text-gray-600">
        Last updated: <strong>{new Date().getFullYear()}</strong>
      </p>
    </LegalLayout>
  );
};

export default Refund;
