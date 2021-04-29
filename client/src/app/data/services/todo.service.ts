import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { JsonApiService, BASE_URL } from './json-api.service';
import { Todo } from '../schema/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private jsonApiService: JsonApiService) {}

  getAll(userId: number = -1): Observable<Array<Todo>> {
    return this.jsonApiService
      .getHttpClient()
      .get<Todo[]>(`${BASE_URL}/todos`, {
        headers: this.jsonApiService.getHttpHeaders(),
        params: { userId: userId === -1 ? '' : String(userId) },
      });
  }

  getSingle(id: number): Observable<Todo> {
    return this.jsonApiService
      .getHttpClient()
      .get<Todo>(`${BASE_URL}/todos/${id}`, {
        headers: this.jsonApiService.getHttpHeaders(),
      });
  }
}
