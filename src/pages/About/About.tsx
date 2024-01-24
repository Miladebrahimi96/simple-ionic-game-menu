import { IonContent, IonIcon, IonImg, IonPage } from '@ionic/react';
import React from 'react';
import { Header } from '../../components';
import { logoInstagram } from 'ionicons/icons';
import './style.css';

const cssPrefix = 'about-page';

const About = () => {
  return (
    <IonPage>
      <Header />
      <IonContent>
        <div className={`${cssPrefix}-container`}>
          <div className={`${cssPrefix}-logo-container`}>
            <IonImg
              draggable={false}
              className={`${cssPrefix}-logo`}
              src='/assets/logos/logo-transparent.png'
            />
          </div>
          <div className={`${cssPrefix}-contact-container`}>
            <a href="tel:09224042982">09224042982</a>
            <a href="tel:02188516871">021-88516871-3</a>
            <a href="https://instagram.com/stadiumgamecafe">
              <IonIcon icon={logoInstagram} />
            </a>
          </div>
        </div>

      </IonContent>
    </IonPage>
  );
};

export default About;