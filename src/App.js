import React, { Component } from 'react';
import './App.css';

//components
import Navbar from "./components/navbar";
import Content from "./components/content";

//libraries
import Axios from "axios";

class App extends Component {
    state ={
        content: [],
        categories: [],
        selected: 0,
        renderedContent: []
    };

    componentWillMount(){
        Axios.get('./content.json').then(resp => {
            this.setState({
                content: resp.data.content,
                categories: resp.data.categories,
                renderedContent: resp.data.content
            });
        });
    };

    updateData = (idx) => {
        idx > 0 ? this.setState({renderedContent: [this.state.content[idx]], selected: idx}) : this.setState({renderedContent: this.state.content, selected: idx})
    };

    render() {
        return (
          <div className="App">
            <Navbar categories={this.state.categories} selectedCategory={this.state.selected} updateContent={this.updateData}/>
            <div className="container">
                <div className="row">
                    <div className="d-none d-sm-block col-sm-3">
                        <ul>
                            { this.state.categories.map((cat, index)=> <li key={index} onClick={()=> this.updateData(index)}><a className={"cat " + (this.state.selected === index ? "active" : "") }>{cat}</a></li>)}
                        </ul>
                    </div>
                    <div className="col-xs-12 col-sm-9">
                        <Content content={this.state.renderedContent} title={"Category: "+this.state.categories[this.state.selected]}/>
                    </div>
                </div>
            </div>
          </div>
        );
    }
}

export default App;
