import React from 'react';
import './ContactArea.css';
import SocialMediaLink from './SocialMediaLink';

import { phoneNumber, emailLink, socialMediaLinks } from './constants';


class ContactArea extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    let telNumberLink = 'tel:' + phoneNumber;
    let mailToLink = "mailto:" + emailLink;
    return (

      <div className='contactArea'>


        <div id='socialMediaBox'>
          <SocialMediaLink website='linkedin' link={socialMediaLinks['linkedin']}></SocialMediaLink>
          <SocialMediaLink website='instagram' link={socialMediaLinks['instagram']}></SocialMediaLink>
          <SocialMediaLink website='github' link={socialMediaLinks['github']}></SocialMediaLink>

        </div>

        <div id='emailAndPhoneBox'>
          <p><a href={mailToLink}>{emailLink}</a></p>
          <p><a href={telNumberLink}>{phoneNumber}</a></p>
        </div>

        <div id='copyrightBox'>
          <p>	&copy; Tushar Shahi</p>
        </div>
      </div>
    );
  }
}
export default ContactArea;
