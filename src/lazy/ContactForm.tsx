import React, { forwardRef, useImperativeHandle } from "react";

export type ContactOrPurposeHandle = {
  submit: () => void;
};

type Props = {
  id: string;
};

const ContactForm = forwardRef<ContactOrPurposeHandle, Props>(
  ({ id }, ref) => {
    useImperativeHandle(ref, () => ({
      submit() {
        alert(`Submitting form ${id}`);
      },
    }));

    return (
      <div style={{ marginBottom: 20 }}>
        <h3>Form {id}</h3>
        <input placeholder={`Input for ${id}`} />
      </div>
    );
  }
);

export default ContactForm;