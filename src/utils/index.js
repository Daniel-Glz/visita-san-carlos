export async function addStaticData(data) {
  const staticData = await getStaticData();
  data = { ...data, ...staticData };

  return data;
}

export async function getStaticData() {
  let staticData = await fetch('http://localhost:3000/data/data.json');
  staticData = await staticData.json();
  return staticData;
}
