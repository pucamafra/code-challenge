import 'react-native';
import React from 'react';
import Event from '../../app/components/Event/Event.js';
import Data from '../../app/api/match_sample.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Event renders correctly', () => {
    let item = Data.events[1];
    const tree = renderer.create(
        <Event icon={item.value} time= {item.time} value={item.label} side={item.side}/>
    );
});
