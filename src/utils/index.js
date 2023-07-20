export async function getStaticData() {
  let staticData = await fetch('http://localhost:3000/data/data.json');
  staticData = await staticData.json();
  return staticData;
}
