// fetchData.test.js
import fetchDataAndLog from '../api';

// Mock the fetch function to return a resolved promise with sample data
global.fetch = jest.fn().mockResolvedValue({
  json: jest.fn().mockResolvedValue([
    {
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
    },
  ]),
});

describe('fetchDataAndLog', () => {
  it('should fetch data and log the first item', async () => {
    // Mock console.log
    console.log = jest.fn();

    // Call the function
    await fetchDataAndLog();

    // Check if the fetch function is called with the correct URL
    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products/1');

    // Check if the console.log is called with the correct data
    expect(console.log).toHaveBeenCalledWith({
      id: 1,
      title: 'iPhone 9',
      description: 'An apple mobile which is nothing like apple',
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: 'Apple',
      category: 'smartphones',
      thumbnail: 'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      images: [
        'https://i.dummyjson.com/data/products/1/1.jpg',
        'https://i.dummyjson.com/data/products/1/2.jpg',
        'https://i.dummyjson.com/data/products/1/3.jpg',
        'https://i.dummyjson.com/data/products/1/4.jpg',
        'https://i.dummyjson.com/data/products/1/thumbnail.jpg',
      ],
    });
  });

  it('should handle errors and log the error message', async () => {
    // Mock the fetch function to throw a network error
    global.fetch = jest.fn().mockRejectedValue(new Error('Network error'));

    // Mock console.error
    console.error = jest.fn();

    // Call the function
    await fetchDataAndLog();

    // Check if the fetch function is called with the correct URL
    expect(fetch).toHaveBeenCalledWith('https://dummyjson.com/products/1');

    // Check if the console.error is called with the correct error message
    expect(console.error).toHaveBeenCalledWith(
      'Error fetching data:',
      new Error('Network error'),
    );
  });
});
