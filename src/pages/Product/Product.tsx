import React from 'react';
import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow
} from '@ionic/react';
import { Card, Header } from '../../components';
import { items } from '../../data';
import { ProductModel } from '../../models';
import { useLocation, useParams, useRouteMatch } from 'react-router';
import { CategoryModel } from '../../models/categories';

export type routerParamsProps = {
  id: string | undefined;
}

const Product = () => {
  const { id } = useParams<routerParamsProps>();
  console.log(id);
  console.log(items);
  const categories = items as CategoryModel;

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          <IonRow>
            {id && categories[id as keyof CategoryModel]?.map((d: ProductModel) =>
              <IonCol
                key={d.id}
                sizeXs='6'
                sizeSm='4'
                sizeMd='3'
                sizeXl='2'
              >
                <Card item={d} />
              </IonCol>
            )}
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Product;