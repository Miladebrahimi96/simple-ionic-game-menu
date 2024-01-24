import { IonAvatar, IonBackButton, IonButtons, IonHeader, IonImg, IonToolbar } from '@ionic/react';

import './style.css'
const cssPrefix = 'header';

const Header = () => {
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot='start'>
          <IonBackButton></IonBackButton>
        </IonButtons>
        <IonImg
          src="/src/assets/logos/logo-transparent.png"
          className={`${cssPrefix}-avatar`}
          slot='end'
          alt=''
        />
      </IonToolbar>
    </IonHeader>
  );

};

export default Header;