const fetcher = async (
  url: string,
  method: string,
  body:
    | string
    | Record<string, string>
    | string[][]
    | URLSearchParams
    | NonNullable<unknown>
    | null,
  token: string | null,
) => {
  const res = await fetch(url, {
    method,
    body: body ? JSON.stringify(body) : null,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    },
  });
  if (res.ok) {
    const response = await res.json();
    return response;
  }
  throw res.status;
};

export default fetcher;
