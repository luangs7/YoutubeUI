import React from 'react';
import {
    Platform,
} from 'react-native';

import { Router, Scene } from 'react-native-router-flux';
import Home from './context/Home';
import View2 from './context/View2';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <Scene key='root' hideNavBar={true} style={{paddingTop: Platform.OS === 'ios' ? 64 : 54}}>
                    <Scene key='home' title='Home' component={Home}/>
                    <Scene key='view2' title='View2' component={View2}/>
                </Scene>
            </Router>
        );
    }
}