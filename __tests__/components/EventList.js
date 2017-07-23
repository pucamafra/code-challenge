import 'react-native';
import React from 'react';
import EventList from '../../app/components/EventList/EventList.js';
import Data from '../../app/api/match_sample.json';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Event renders correctly', () => {
    const tree = renderer.create(
        <EventList data={Data}/>
    );
});
