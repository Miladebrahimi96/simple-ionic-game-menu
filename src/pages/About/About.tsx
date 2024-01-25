import { IonContent, IonIcon, IonImg, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import React from 'react';
import { Header } from '../../components';
import { callOutline } from 'ionicons/icons';
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
          <IonList lines='none' style={{ width: "100%" }}>
            <IonItem className={`${cssPrefix}-field`}>
              <IonImg
                slot='start'
                draggable={false}
                className='icon'
                src='/assets/logos/call.png'
              />
              <IonLabel>
                <a href="tel:02188516871">021-88516871-3</a>
              </IonLabel>
            </IonItem>
            <IonItem className={`${cssPrefix}-field`}>
              <IonImg
                slot='start'
                draggable={false}
                className='icon'
                src='/assets/logos/call.png'
              />
              <IonLabel>
                <a href="tel:09224042982">09224042982</a>
              </IonLabel>
            </IonItem>
            <IonItem className={`${cssPrefix}-field`}>
              <IonImg
                slot='start'
                draggable={false}
                className='icon'
                src='/assets/logos/instagram.svg'
              />
              <IonLabel>
                <a href="https://instagram.com/stadiumgamecafe">
                  stadiumgamecafe
                </a>
              </IonLabel>
            </IonItem>
            <IonItem className={`${cssPrefix}-field`}>
              <IonImg
                slot='start'
                draggable={false}
                className='icon'
                src='/assets/logos/location.png'
              />
              <IonLabel>
                خیابان سهروردی شمالی - خبابان شهید قندی غربی - بین سیبویه و عربعلی - پلاک ۵۷ - طبقه ۲
              </IonLabel>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;