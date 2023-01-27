import React, { Component } from "react";

class MovieCard extends Component{
    constructor(props){
      super(props);
    }
    render(){

    

        return(
            <div className='movie'>
              <div><p>{this.props.movie.Year}</p></div>

              <div><img src={this.props.movie.Poster !== 'N/A' ? this.props.movie.Poster : 'https://via.placeholder.com/400'} alt="movie one image"/></div>
              
              <div>
                <span>{this.props.movie.Type}</span>
                <h3>{this.props.movie.Title}</h3>
              </div>
            </div>
        )
    }
  }

export default MovieCard;



/*

class MovieCard extends Component{
    constructor(props){
        super(props);
        this.movie={
          
        };
    }

    render(){
        return(
            <div className='movie'>
              <div><p>{this.movie.Year}</p></div>
              <div><img src={this.movie.Poster !== 'N/A' ? this.movie.Poster : 'https://via.placeholder.com/400'} alt="movie one image"/></div>
              <div>
                <span>{this.movie.Type}</span>
                <h3>{this.movie.Title}</h3>
              </div>
            </div>
        )
    }
}

*/