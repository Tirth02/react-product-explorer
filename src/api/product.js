const BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Fetch list of products
 */
export async function getProducts({
  page = 1,
  limit = 10,
  query = ''
} = {}) {
  const url = `${BASE_URL}/randomproducts?page=${page}&limit=${limit}&query=${query}`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Failed to fetch products');
  }

  const data = await response.json();
  return data;
}

/**
 * Fetch product by ID
 */
export async function getProductById(id) {
  const response = await fetch(`${BASE_URL}/randomproducts/${id}`);

  if (!response.ok) {
    throw new Error('Failed to fetch product');
  }

  const data = await response.json();
  return data;
}

/**
 * Fetch random product
 */
export async function getRandomProduct() {
  const response = await fetch(
    `${BASE_URL}/randomproducts/product/random`
  );

  if (!response.ok) {
    throw new Error('Failed to fetch random product');
  }

  const data = await response.json();
  return data;
}
