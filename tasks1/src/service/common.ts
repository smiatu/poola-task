import { searchSpaces } from "./search";
import { searchSpaces as searchAddress } from './searchAddress';
import { Results } from '../components/Search/Search';

export const delay = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const delayedSearch = async (text: string, ms: number, searchType: 'space' | 'address'): Promise<Results> => {
  let results;
  if(searchType === 'space'){
    results = await searchSpaces(text);
  } else {
    results = await searchAddress(text);
  }
  
  await delay(ms)
  return results;
}