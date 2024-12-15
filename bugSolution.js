// bugSolution.js
export async function getServerSideProps(context) {
  const { params } = context;
  const productId = params.id;

  try {
    const res = await fetch(`https://api.example.com/products/${productId}`);
    if (!res.ok) {
      // Handle HTTP errors
      if (res.status === 404) {
        return {
          notFound: true,
        };
      } else {
        throw new Error(`Failed to fetch product: ${res.status}`);
      }
    }
    const product = await res.json();
    return { props: { product } };
  } catch (error) {
    console.error("Error fetching product:", error);
    return {
      props: {
        error: 'Failed to load product. Please try again later.',
      },
    };
  }
}