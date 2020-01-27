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
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(item => item.eventType.indexOf(filter) !== -1);
}

}
