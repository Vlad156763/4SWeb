import fetch from 'node-fetch';

export async function requestSum(a, b) {
  const query = `
    query {
      sum(a: ${a}, b: ${b})
    }
  `;

  const response = await fetch('http://localhost:3002/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  });

  const data = await response.json();
  return data.data.sum;
}

