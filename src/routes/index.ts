export async function get({ params }) {
  const data = await import("../data.json");

  if (data) {
    return {
      body: { data },
    };
  }

  return {
    status: 404,
  };
}
