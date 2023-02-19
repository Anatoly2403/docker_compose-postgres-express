import { BaseApi, E_Methods } from '../../baseApi';
import { I_Todo } from './models';

class TodoApi extends BaseApi {
  constructor() {
    // TODO использовать енв переменные
    super('http://localhost:3001/api');
  }

  getAll(): Promise<I_Todo[]> {
    return this.apiFetch<I_Todo[]>({
      endpoint: '/todo',
    });
  }
  getById(id: number): Promise<I_Todo> {
    return this.apiFetch<I_Todo>({
      endpoint: `/todo/${id}`,
    });
  }
  delete(id: number): Promise<string> {
    return this.apiFetch<string>({
      endpoint: `/todo/${id}`,
      method: E_Methods.DELETE,
    });
  }
  create(title: string): Promise<I_Todo> {
    return this.apiFetch<I_Todo>({
      endpoint: `/todo`,
      method: E_Methods.POST,
      body: JSON.stringify({
        title,
      }),
    });
  }
}

export const todoApi = new TodoApi();
