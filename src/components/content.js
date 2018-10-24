import React, { Component } from 'react';
import './content.css';

class Content extends Component {

    render(){
        return(
            <div>
                <h1>{this.props.title}</h1>
                {
                    this.props.content.map( (cont, index) => {
                        return(
                            <div className="card-body" key={index}>
                                <h5 className="card-title">{cont.title}</h5>
                                {
                                    // this is image element
                                    cont.img ? <img src={cont.img} alt={cont.title} /> : ''
                                }
                                <p className="card-text">{cont.content}</p>
                                <button type="button" className="btn btn-primary btn-padding">Comment</button>
                                <button type="button" className="btn btn-light btn-padding">Share</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default Content;