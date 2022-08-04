import React from 'react';
import axios from 'axios';
import SearchInput from './SearchInput';
import ImageList from './ImageList';

class App extends React.Component{

    constructor(props){
        super(props)
        this.state = { images: []}
        this.onSearchSubmit=this.onSearchSubmit.bind(this)
    }

    async onSearchSubmit(entry){
        const response = await axios.get(`https://pixabay.com/api/?key=29056422-c589187f5f853843e4929e7c4&q=${entry}&image_type=photo&pretty=true`)
        console.log(response.data.hits)
        this.setState({images: response.data.hits})
    }
     render(){return(
        <div className='ui container' style={{marginTop:'30px'}}> 
            <SearchInput onSearchSubmit={this.onSearchSubmit} />  
            We found {this.state.images.length} images.
            <ImageList images = {this.state.images}/>
        </div>
    )
    }
}

export default App;