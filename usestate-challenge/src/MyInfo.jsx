import React from 'react'

export default function MyInfo(props) {

    const styles = {color: props.color, backgroundColor: props.backgroundColor}

    return (
        <div>
            <h1>Fábio Ramos</h1>
            <p>Sou desenvolvedor de software com mais de 13 anos de experiência...</p>
            <h3>Três locais que gostaria de visitar: </h3>
            <ul>
                <li style={styles}>Portugal</li>
                <li style={styles}>Austrália</li>
                <li style={styles}>Índia</li>
            </ul>
        </div>
    )

}