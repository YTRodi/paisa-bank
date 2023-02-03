export const API_HEADERS = {
  API_KEY: 'x-api-key',
}

export const cardKeys = {
  all: ['cards'] as const,
  lists: () => [...cardKeys.all, 'list'] as const,
  list: (filters: string) => [...cardKeys.lists(), { filters }] as const,
  details: () => [...cardKeys.all, 'detail'] as const,
  detail: (id: number) => [...cardKeys.details(), id] as const,
}
