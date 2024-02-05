import {
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow
} from '@ionic/react';
import { Card, Header } from '../../components';
import { store } from '../../data';
import { ProductModel } from '../../models';
import { useParams } from 'react-router';
import { CategoryModel } from '../../models/categories';

export type routerParamsProps = {
  id: string | undefined;
}

const Store = () => {
  const { id } = useParams<routerParamsProps>();
  const categories = store as ProductModel[];

  return (
    <IonPage>
      <Header />
      <IonContent>
        <IonGrid>
          <IonRow>
            {store?.map((d: ProductModel) =>
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

export default Store;