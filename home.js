import React from 'react';
import './home.css';
import ProductCarousel from './ProductCarousel';
import SearchBar from './search';
function Home() {
    // const items = [
    //     {
    //         id: 1,
    //         image: 'https://via.placeholder.com/300x100',
    //         title: 'Item 1',
    //         subtitle: 'Subtitle for Item 1'
    //     },
    //     {
    //         id: 2,
    //         image: 'https://via.placeholder.com/300x200',
    //         title: 'Item 2',
    //         subtitle: 'Subtitle for Item 2'
    //     },
    //     {
    //         id: 3,
    //         image: 'https://via.placeholder.com/300x200',
    //         title: 'Item 3',
    //         subtitle: 'Subtitle for Item 3'
    //     },
    //     {
    //         id: 4,
    //         image: 'https://via.placeholder.com/300x200',
    //         title: 'Item 4',
    //         subtitle: 'Subtitle for Item 4'
    //     },
    //     {
    //         id: 5,
    //         image: 'https://via.placeholder.com/300x200',
    //         title: 'Item 5',
    //         subtitle: 'Subtitle for Item 5'
    //     }
    // ];
    return (
      <div className='bg'>
        <h1>Home Page</h1>
        <SearchBar  className='search'/>
        <br></br>
        <h3>Audio Podcasts :</h3>
        <ProductCarousel/>
      </div>
    );
}

export default Home