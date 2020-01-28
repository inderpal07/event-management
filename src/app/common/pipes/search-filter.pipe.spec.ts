import { SearchFilterPipe } from './search-filter.pipe';
import { EventModel } from '../models/events.model';

describe('SearchFilterPipe', () => {

  let testEvent = new EventModel('Test Event', '', 'Test location', new Date(), 'male');
  it('create an instance', () => {
    const pipe = new SearchFilterPipe();
    expect(pipe).toBeTruthy();
  });

  it('pipe transform should filter events having substring', () => {
    const pipe = new SearchFilterPipe();
    expect(pipe.transform([testEvent], 'Test')).toEqual([testEvent]);
    expect(pipe.transform([testEvent], 'loca')).toEqual([testEvent]);
    expect(pipe.transform([testEvent], 'female')).toEqual([]);
  });

  it('pipe transform should return empty list if no events match', () => {
    const pipe = new SearchFilterPipe();
    expect(pipe.transform([testEvent], 'female')).toEqual([]);
  });
});
