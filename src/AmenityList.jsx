import PropTypes from 'prop-types';
import './AmenityList.css'

import accessible_to_disabled from './assets/amenities/accessible_to_disabled.svg'
import bike_parking_v2 from './assets/amenities/bike_parking_v2.svg'
import bins from './assets/amenities/bins.svg'
import blue_flag from './assets/amenities/blue_flag.svg'
import changing_room_v2 from './assets/amenities/changing_room_v2.svg'
import danger from './assets/amenities/danger.svg'
import diving_tower from './assets/amenities/diving_tower.svg'
import dogs_allowed from './assets/amenities/dogs_allowed.svg'
import doorzicht from './assets/amenities/doorzicht.svg'
import first_aid from './assets/amenities/first_aid.svg'
import generic from './assets/amenities/generic.svg'
import information_sign from './assets/amenities/information_sign.svg'
import jetski from './assets/amenities/jetski.svg'
import kite_surfing from './assets/amenities/kite_surfing.svg'
import lifeguard from './assets/amenities/lifeguard.svg'
import line from './assets/amenities/line.svg'
import nude_beach_v2 from './assets/amenities/nude_beach_v2.svg'
import observation_tower from './assets/amenities/observation_tower.svg'
import paid_entrance from './assets/amenities/paid_entrance.svg'
import parking_v2 from './assets/amenities/parking_v2.svg'
import playing_area from './assets/amenities/playing_area.svg'
import play_field from './assets/amenities/play_field.svg'
import public_transport_v2 from './assets/amenities/public_transport_v2.svg'
import restaurant from './assets/amenities/restaurant.svg'
import salt_water from './assets/amenities/salt_water.svg'
import sand_beach from './assets/amenities/sand_beach.svg'
import shower from './assets/amenities/shower.svg'
import slope from './assets/amenities/slope.svg'
import sunbathing_area from './assets/amenities/sunbathing_area.svg'
import sweet_water from './assets/amenities/sweet_water.svg'
import ticks from './assets/amenities/ticks.svg'
import tidal_water from './assets/amenities/tidal_water.svg'
import toezicht_c from './assets/amenities/toezicht_c.svg'
import toezicht_d from './assets/amenities/toezicht_d.svg'
import toilet from './assets/amenities/toilet.svg'
import trailer from './assets/amenities/trailer.svg'
import water_level from './assets/amenities/water_level.svg'
import water_slide from './assets/amenities/water_slide.svg'
import wind_surfing from './assets/amenities/wind_surfing.svg'

const amenity_mapping = new Map([
    [5943890, [danger, "Gevaar"]],
    [5943891, [slope, "Aflopende kant"]],
    [5943892, [bins, "Afvalbakken"]],
    [5943893, [public_transport_v2, "Openbaar vervoer"]],
    [5943894, [blue_flag, "Blauwe vlag"]],
    [5943895, [water_level, "Waterniveau"]],
    [5943896, [doorzicht, "Doorzicht"]],
    [5943897, [shower, "Douche"]],
    [5943898, [line, "Drijflijn"]],
    [5943899, [diving_tower, "Duiktoren"]],
    [5943900, [first_aid, "EHBO"]],
    [5943901, [paid_entrance, "Betaald parkeren"]],
    [5943902, [bike_parking_v2, "Fietsenrek"]],
    [5943903, [tidal_water, "Getijdewater"]],
    [5943904, [generic, "Voorziening"]],
    [5943905, [dogs_allowed, "Honden toegestaan"]],
    [5943906, [restaurant, "Horeca"]],
    [5943907, [information_sign, "Informatiebord"]],
    [5943908, [jetski, "Jetski"]],
    [5943909, [kite_surfing, "Kitesurfen"]],
    [5943910, [changing_room_v2, "Kleedruimte"]],
    [5943911, [sunbathing_area, "Zonnebaden"]],
    [5943912, [nude_beach_v2, "Naakstrand"]],
    [5943913, [parking_v2, "Parkeerplaats"]],
    [5943914, [lifeguard, "Reddingsbrigade"]],
    [5943915, [playing_area, "Speeltuin"]],
    [5943916, [play_field, "Speelveld"]],
    [5943917, [generic, "Voorziening"]],
    [5943918, [accessible_to_disabled, "Toegankelijk"]],
    [5943919, [wind_surfing, "Windsurfen"]],
    [5943920, [ticks, "Teken"]],
    [5943921, [accessible_to_disabled, "Toegankelijk"]],
    [5943922, [toezicht_c, "Toezicht klasse C"]],
    [5943923, [toezicht_d, "Toezicht klasse D"]],
    [5943924, [trailer, "Trailerhelling"]],
    [5943925, [observation_tower, "Observatietoren"]],
    [5943926, [accessible_to_disabled, "Toegankelijk"]],
    [5943928, [water_slide, "Glijbaan"]],
    [5943927, [toilet, "WC"]],
    [5943929, [sand_beach, "Zandstrand"]],
    [5943930, [sweet_water, "Zoet water"]],
    [5943931, [salt_water, "Zout water"]],
    [5943932, [line, "Drijflijn"]],
]);

export function AmenityList({ amenities }) {
    if (amenities == null) {
        return null;
    }

    return (
        <ul className='result-amenities'>
            {amenities.map(element => {
                let item = amenity_mapping.get(element);
                return <li key={element}>
                    <img key={element} src={item[0]} title={item[1]} />
                </li>
            })}
        </ul>
    )
}

AmenityList.propTypes = {
    amenities: PropTypes.array
}