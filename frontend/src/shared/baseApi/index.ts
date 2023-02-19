export type T_Headers = Record<string, string>;
export enum E_Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export abstract class BaseApi {
  private static defaultErrorMessage = 'Something went wrong...';
  private static defaultHeaders: T_Headers = {
    'Content-Type': 'application/json;charset=utf-8',
  };

  constructor(private baseUrl: string) {}

  protected async apiFetch<T_Res = unknown>({
    endpoint,
    method = E_Methods.GET,
    body,
    headers,
  }: {
    endpoint: string;
    method?: E_Methods;
    headers?: Record<string, string>;
    body?: string;
  }): Promise<T_Res> {
    try {
      const response = fetch(this.baseUrl + endpoint, {
        method,
        body,
        headers: {
          ...BaseApi.defaultHeaders,
          ...headers,
        },
      });

      return (await response).json();
    } catch (error) {
      if (error instanceof Error) throw error;
      throw new Error(BaseApi.defaultErrorMessage);
    }
  }
}
