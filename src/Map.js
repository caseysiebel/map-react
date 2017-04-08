import React from 'react';
//import { render } from 'react-dom';
import { Map, Polyline, Marker, Popup, TileLayer } from 'react-leaflet';

import parser from './parser'

import route1 from './data/route1'
import route2 from './data/route2'

import midPointGen from './midPointFinder'
import genPolyline from './genPolyline'

let parsed1 = parser(route1)
let parsed2 = parser(route2)

//console.log('1', parser1)
//console.log('2', parser2)

let position =  midPointGen([ parsed1, parsed2 ])

console.log('position', position)
/*
const polyline = [
    [37.775,	-122.401],
    [37.7749,	-122.401],
    [37.7742,	-122.4],
    [37.7726,	-122.399],
    [37.7716,	-122.398],
    [37.7712,	-122.398],
    [37.771,	-122.398],
    [37.7709,	-122.398]
]
const multiPolyline = [
    [[51.5, -0.1], [51.5, -0.12], [51.52, -0.12]],
    [[51.5, -0.05], [51.5, -0.06], [51.52, -0.06]]
]
*/
const multiPolyline = [
    genPolyline(parsed1),
    genPolyline(parsed2),
]
console.log('multiPolyline', multiPolyline)

export default class MapContainer extends React.Component {
    render() {
        return (
            <Map center={position} zoom={13}>
                <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Polyline color='red' positions={multiPolyline} />

            </Map>
        )
    }
}
