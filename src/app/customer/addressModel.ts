import { State } from './stateModel';
import { City } from './cityModel';

export class Address {
  address: string;
  city: City = new City();
  state: State = new State();
}
