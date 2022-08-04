import React from 'react';

class SearchInput extends React.Component{
    constructor(props){
        super(props)
        this.state={entry:''}
    }

    render(){
        return(
            <div>
                <form className='ui segment' action=''>
                    <div className='field'>
                        <div className='ui massive icon input'>
                        <input 
                        type='text' 
                        placeholder='search here...'
                        onChange={(event)=> this.setState({entry:event.target.value}) }
                        vlaue={this.state.entry}
                        />
                        <i className='search icon'></i>
                        </div>
                    </div>
                </form>                                                                    
            </div>
        )
    }
}

export default SearchInput