import cities from '../cities';

export function displayCities() {
  // TODO: Api call! For now, simulate a DB
  return {
    type: 'DISPLAY_CITIES',
    payload: cities
  };
}

export function selectedCity(city) {
  return {
    type: 'SELECT_CITY',
    payload: city
  };
}
