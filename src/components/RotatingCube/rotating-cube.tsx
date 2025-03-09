import { createSignal, For, type Component } from 'solid-js'
import { colorPalette, cubeText, faces } from '../constants/constants'
import styles from './rotating-cube.module.css'

type RotatingCubeProps = {
    rotation: {
        x: number
        y: number
    }
}

export const RotatingCube: Component<RotatingCubeProps> = (props) => {
    const getRandomColor = (): string => {
        const randomIndex = Math.floor(Math.random() * colorPalette.length)
        return colorPalette[randomIndex]
    }

    // Maybe repurpose into some kind of cubeFace text rememberer?
    // Can use memory router for cubeText link

    // It'd be cool if after clicking on a link i.e. 'resume' it enlarged that particular face of the cube and went into a different view. We could use the solid router to control this behavior

    const handleLinkClick = (face: string): void => {
        // setRandomColor(getRandomColor())
        console.log(face)
    }

    return (
        <div
            class={styles.cube}
            style={`transform: rotateX(${props.rotation.x}deg) rotateY(${props.rotation.y}deg);`}
        >
            <For each={faces}>
                {(face, index) => (
                    <button
                        class={`${styles.face} ${styles[face]}`}
                        style={`background: ${getRandomColor()}`}
                        onClick={() => handleLinkClick(cubeText[index()])}
                    >
                        {cubeText[index()]}
                    </button>
                )}
            </For>
        </div>
    )
}
