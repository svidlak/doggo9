import React, { Component } from 'react';

class Navbar extends Component {
    updateContent = (index) => {
        this.props.updateContent(index);
        const x = this.refs.navbarCollapse ? this.refs.navbarCollapse.className = 'navbar-collapse collapse' : '';
    };

    render(){

        return(
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a className="navbar-brand" href="#">Doggo9</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                        aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse" ref="navbarCollapse">
                    <ul className="navbar-nav mr-auto d-block d-sm-none">
                        {
                            this.props.categories.map((cat, index) => {
                                return(
                                    <li className="nav-item" key={index} onClick={()=> this.updateContent(index)}>
                                        <a className="nav-link" href="#">{cat}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navbar;