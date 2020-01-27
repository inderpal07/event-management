import { Pipe, PipeTransform } from '@angular/core';
import { EventModel } from '../models/events.model';

@Pipe({
  name: 'searchFilter',
  pure: false
})
export class SearchFilterPipe implements PipeTransform {

  transform(items: EventModel[], filter: string): any {
    if (!items || !filter) {
        return items;
    }
    filter = filter.toLowerCase();
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter((item) => 
      item.eventType.toLowerCase().indexOf(filter) !== -1  ||
      item.eventLocation.toLowerCase().indexOf(filter) !== -1 ||
      (item.eventDateTime && item.eventDateTime.toString().toLowerCase().indexOf(filter) !== -1) ||
      item.genderAllowed.toLowerCase().indexOf(filter) !== -1
    );
}

}
