import React from 'react'

/*
https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1
https://reactjs.org/blog/2018/03/29/react-v-16-3.html#component-lifecycle-changes
*/

class Appclass extends React.Component {

    constructor() {
        super()
        this.state = {
            quantidade: 0
        }
    }

    componentDidMount() {
        console.log('componentDidMount')
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.quantidade !== this.state.quantidade)
            console.log('componentDidUpdate')
    }

    componentWillUnmount() {
        
    }

    render() {
        return (
            <div>
                <p>Você clicou {this.state.quantidade} vezes</p>
                <button onClick={() => this.setState({quantidade: this.state.quantidade + 1})} > Clique Aqui</button>
            </div>
        )
    }

}

export default Appclass