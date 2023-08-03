export default async function fetchDataAndLog() {
  try {
    const response = await fetch('https://dummyjson.com/products/1');
    const data = await response.json();
    console.log(data[0]);
    
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
