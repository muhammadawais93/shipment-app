import React from 'react';
import ShipmentDetail from './ShipmentDetail';

import renderer from 'react-test-renderer';

it('renders Shipment details', () => {
    const tree = renderer
        .create(<ShipmentDetail />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});