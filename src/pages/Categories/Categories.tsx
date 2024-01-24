import {
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonList,
  IonPage,
  IonRouterOutlet,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';

import { Card, Header } from '../../components';

import './style.css';
import { Route, useParams, useRouteMatch } from 'react-router';
import { ProductPage } from '../Product';
import { items } from '../../data';
import { CategoryModel } from '../../models/categories';
import { CategoryPage } from '.';
import { ProductModel } from '../../models';

const Categories = () => {
  const { path } = useRouteMatch();
  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonList>
          <IonItem routerLink={`${path}/games`}>
            بازی ها
          </IonItem>
          <IonItem routerLink={`${path}/snacks`}>
            اسنک ها
          </IonItem>
          <IonItem routerLink={`${path}/cold_bars`}>
            بار سرد
          </IonItem>
          <IonItem routerLink={`${path}/warm_bars`}>
            بار گرم
          </IonItem>
          <IonItem routerLink={`${path}/drinks`}>
            نوشیدنی ها
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Categories;