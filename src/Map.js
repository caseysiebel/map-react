import React from 'react';
//import { render } from 'react-dom';
import { Map, Polyline, Marker, Popup, TileLayer, LayersControl } from 'react-leaflet';

const { BaseLayer, Overlay } = LayersControl


import ToggleContainer from './ToggleContainer'

console.log('LayersControl', LayersControl)
console.log('BaseLayer', BaseLayer)

import parser from './parser'

import route1 from './data/route1'
import route2 from './data/route2'
import route3 from './data/route3'

import midPointGen from './midPointFinder'
import genPolyline from './genPolyline'

//console.log('route2', route2)
//console.log('route3', route3)

let parsed1 = parser(route1)
let parsed2 = parser(route2)
let parsed3 = parser(route3)

let position =  midPointGen([ parsed1, parsed2, parsed3 ])

//console.log('position', position)

const multiPolyline = [
    genPolyline(parsed1),
    genPolyline(parsed2),
    genPolyline(parsed3)
]

console.log('multiline', multiPolyline)
export default class MapContainer extends React.Component {
    render() {
        return (
            <Map center={position} zoom={15}>
				<Polyline color='red' positions={multiPolyline} />
                <LayersControl position='topright'>
					<BaseLayer checked name='OpenStreetMap.Mapnik'>
					<TileLayer
					  attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					  url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
					/>
				  </BaseLayer>

                </LayersControl>

            </Map>
        )
    }
}
