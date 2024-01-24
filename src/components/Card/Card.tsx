import React from 'react';
import { ProductModel } from '../../models';

import {
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonImg,
} from '@ionic/react';

import './style.css';

const cssPrefix = 'card';

export type CardProps = {
  item: ProductModel;
}

const Card = (props: CardProps) => {
  return (
    <IonCard
      className={`${cssPrefix}`}
    >
      <IonCardContent className={`${cssPrefix}-content`}>
        <IonImg
          draggable={false}
          className={`${cssPrefix}-image`}
          src={props.item.image}
        />
      </IonCardContent>
      <IonCardTitle
        className={`${cssPrefix}-title ion-text-center`}
      >
        {props.item.name}
      </IonCardTitle>
      <IonCardSubtitle
        className={`${cssPrefix}-subtitle 'ion-text-center'`}
      >
        {props.item.price}
      </IonCardSubtitle>
    </IonCard>
  );
};

export default Card;