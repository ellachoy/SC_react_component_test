import React from 'react';

class CollaItem extends React.Component {
    state = {
        isOpen: false
    }

    handleIsOpen = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        return <div>
            <div>
                <h2>Why is React great?</h2>
                <button onClick={this.handleIsOpen}>
                    {this.state.isOpen ? "-" : "+"}
                </button>
            </div>
            <div style={{ display: this.state.isOpen ? "block" : "none", color: "red" }}>
                <h2>React is great!</h2>
            </div>
            <div className={
                this.state.isOpen ?
                    "show" :
                    "hide"
            }>
                <h2>React is great!</h2>
            </div>
            <div className={`
            static-class 
            ${this.state.isOpen ?
                    "show" :
                    "hide"
                }
                    `}>
                <h2>React is great!</h2>
            </div>
            <div className={"static-class " + (this.state.isOpen ? "show" : "hide")}>
                <h2>React is great!</h2>
            </div>
        </div>;
    }
}

export default CollaItem;