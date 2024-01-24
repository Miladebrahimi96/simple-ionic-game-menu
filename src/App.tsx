import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, gridOutline, informationCircleOutline } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { AboutPage, CategoryPage, HomePage, ProductPage } from './pages';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet dir='rtl'>

          <Route exact path="/categories">
            <CategoryPage />
          </Route>
          <Route exact path="/categories/:id">
            <ProductPage />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/home">
            <HomePage />
          </Route>
          <Route exact path="/">
            <Redirect to="/categories" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="about" href="/about">
            <IonIcon aria-hidden="true" icon={informationCircleOutline} />
            <IonLabel>درباره ما</IonLabel>
          </IonTabButton>
          <IonTabButton tab="categories" href="/categories">
            <IonIcon aria-hidden="true" icon={gridOutline} />
            <IonLabel>دسته بندی ها</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
