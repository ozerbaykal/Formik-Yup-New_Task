import {NavigationContainer} from '@react-navigation/native';
import Navigation from './src/router/navigation';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, Layout, Text} from '@ui-kitten/components';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </ApplicationProvider>
  );
};

export default App;
