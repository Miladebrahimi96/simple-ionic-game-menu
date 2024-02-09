import {
  IonContent,
  IonItem,
  IonList,
  IonPage,
} from '@ionic/react';

import { Header } from '../../components';

import './style.css';
import { useRouteMatch } from 'react-router';

const Categories = () => {
  const { path } = useRouteMatch();
  return (
    <IonPage>
      <Header />
      <IonContent >
        <div className='category-page'>
          <IonList>
            <IonItem routerLink={`${path}/games`}>
              بازی
            </IonItem>
            <IonItem routerLink={`${path}/snacks`}>
              میان وعده
            </IonItem>
            <IonItem routerLink={`${path}/cold_bars`}>
              بار سرد
            </IonItem>
            <IonItem routerLink={`${path}/warm_bars`}>
              بار گرم
            </IonItem>
            <IonItem routerLink={`${path}/drinks`}>
              نوشیدنی
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Categories;