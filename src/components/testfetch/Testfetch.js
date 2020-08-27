import React from "react"

class Testfetch extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCharacter: {}
        }
    }
    componentDidMount() {
        this.myTestFetch()
    }
    myTestFetch() {
        fetch("https://swapi.dev/api/people/5")
            .then(response => response.json())
            .then(characterJSON => {
                this.setState({ currentCharacter: characterJSON })
            })
    }
    render() {
        return (
            <div className="TestFetch">
                Name: {this.state.currentCharacter.name}
                <br/> 
                Height: {this.state.currentCharacter.height}
                <br/>
                Eye Color: {this.state.currentCharacter.eye_color}
                <br/>
                Hair Color: {this.state.currentCharacter.hair_color}
                <br/>
                Mass: {this.state.currentCharacter.mass}
                <br/>
                Birth Year: {this.state.currentCharacter.birth_year}
                <br/>
                Home World: {this.state.currentCharacter.homeworld}
            </div>
        )
    }
}


export default Testfetch