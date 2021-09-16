import React from 'react';
// import VARNAME from 'PFAD_ZUR_DATEI.JSON'
import elainData from '../data/data.json'
import { v4 as uuidv4 } from 'uuid';

class DataItem extends React.Component {
    state = {
        ericState: elainData,
        inputFirstName: "",
        inputLastName: "",
        inputEmail: ""
    }
    handleAddUser = () => {
        // let tempArray = this.state.ericState
        // tempArray.push({
        //     id: tempArray.length + 1,
        //     first_name: "Jane",
        //     last_name: "Doe",
        //     email: "some@mail.com"
        // })
        // console.log(tempArray)
        // this.setState({ ericState: tempArray });

        // console.log(this.state.ericState)
        // console.log(...this.state.ericState)

        this.setState({
            ericState: [
                ...this.state.ericState,
                {
                    id: uuidv4(),
                    first_name: this.state.inputFirstName,
                    last_name: this.state.inputLastName,
                    email: this.state.inputEmail
                }
            ]
        });
    }
    handleSortUser = () => {
        let temp = [...this.state.ericState]
        temp.sort((a, b) => (a.first_name > b.first_name) ? 1 : ((b.first_name > a.first_name) ? -1 : 0))
        console.log(temp)
        this.setState({ ericState: temp });
    }
    handleRemoveUser = (id) => {
        console.log(id)
        // let temp = this.state.ericState // erstellt nur einen Zeiger auf den State
        let temp = [...this.state.ericState] // erstellt ein neues Array mit den Objekten aus dem State
        // Lange filter Variante
        let temp2 = temp.filter(user => {
            if (user.id === id) {
                console.log("Stimmt")
            } else {
                console.log("Stimmt nicht")
                return user
            }
        })
        // Kurze filter Variante
        let temp3 = temp.filter(user => user.id !== id)
        console.log(temp3)
        this.setState({ ericState: temp3 });
    }
    render() {
        return <div>
            {this.state.ericState.map(user => <div key={user.id}>
                <h1>{user.first_name} {user.last_name}</h1>
                <a href={`mailto:${user.email}`}>Write me!</a>
                <span onClick={() => this.handleRemoveUser(user.id)}>x</span>
            </div>)}
            {/* Im Notfall kann der key auch der index des Elements sein
            {this.state.ericState.map((user, index) => <div key={index}>
                <h1>{user.first_name} {user.last_name}</h1>
                <a href={`mailto:${user.email}`}>Write me!</a>
            </div>)} */}
            {/* <button onClick={() => this.handleAddUser()}>Add User</button> */}
            {/* <button onClick={this.handleAddUser}>Add User</button> */}
            <button onClick={this.handleSortUser}>Sort</button>
            <form>
                <input type="text"
                    onChange={(event) => this.setState({ inputFirstName: event.target.value })}
                    value={this.state.inputFirstName}
                />
                <input type="text"
                    onChange={(event) => this.setState({ inputLastName: event.target.value })}
                    value={this.state.inputLastName}
                />
                <input type="email"
                    onChange={(event) => this.setState({ inputEmail: event.target.value })}
                    value={this.state.inputEmail}
                />
                {/* <button> könnte probleme machen, da er es an ein backenend senden wollte */}
                <input type="button" value="Senden" onClick={this.handleAddUser} />
            </form>
        </div>;
    }
}

export default DataItem;