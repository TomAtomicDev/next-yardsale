import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import './SentEmail.scss';
import iconLogo from '@logos/logo_yard_sale.svg';
import iconEmail from '@icons/email.svg';

function SentEmail() {
  return (
    <div className="SentEmail">
      <div className="SentEmail-container">
        <Image src={iconLogo} alt="logo" className="logo" />
        <h1 className="title">Email has been sent!</h1>
        <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>
        <div className="email-icon">
          <Image src={iconEmail} alt="Email" />
        </div>
        <button className="button button--primary">Login</button>
        <p className="tinny-note">
          <span>Didn&#39;t received the email?</span>
          <Link className="tinny-note__link" href="/">
            Resend
          </Link>
        </p>
      </div>
    </div>
  );
}

export { SentEmail };
