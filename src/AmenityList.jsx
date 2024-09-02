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
    [5943890, danger],
    [5943891, slope],
    [5943892, bins],
    [5943893, public_transport_v2],
    [5943894, blue_flag],
    [5943895, water_level],
    [5943896, doorzicht],
    [5943897, shower],
    [5943898, line],
    [5943899, diving_tower],
    [5943900, first_aid],
    [5943901, paid_entrance],
    [5943902, bike_parking_v2],
    [5943903, tidal_water],
    [5943904, generic],
    [5943905, dogs_allowed],
    [5943906, restaurant],
    [5943907, information_sign],
    [5943908, jetski],
    [5943909, kite_surfing],
    [5943910, changing_room_v2],
    [5943911, sunbathing_area],
    [5943912, nude_beach_v2],
    [5943913, parking_v2],
    [5943914, lifeguard],
    [5943915, playing_area],
    [5943916, play_field],
    [5943917, generic],
    [5943918, accessible_to_disabled],
    [5943919, wind_surfing],
    [5943920, ticks],
    [5943921, accessible_to_disabled],
    [5943922, toezicht_c],
    [5943923, toezicht_d],
    [5943924, trailer],
    [5943925, observation_tower],
    [5943926, accessible_to_disabled],
    [5943928, water_slide],
    [5943927, toilet],
    [5943929, sand_beach],
    [5943930, sweet_water],
    [5943931, salt_water],
    [5943932, line]
]);

function AmenityList({amenities}){
    if (amenities == null){
        return null;
    }

    return (
        <ul className='result-amenities'>
            {amenities.map(element => { 
                return  <li key={crypto.randomUUID()}>
                            <img key={crypto.randomUUID()} src={amenity_mapping.get(element)} title={element} />
                        </li> })}
        </ul>
    )
}

AmenityList.propTypes = {
    amenities: PropTypes.array
}

export default AmenityList