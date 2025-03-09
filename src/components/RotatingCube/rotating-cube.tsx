import { createSignal, For, type Component } from 'solid-js'
import { cubeText, faces } from '../constants/constants'
import styles from './rotating-cube.module.css'

export const RotatingCube: Component = () => {
    const getRandomNumber = (): number => Math.floor(Math.random() * 256)

    const getRandomColor = (): string =>
        `rgba(${getRandomNumber()}, ${getRandomNumber()}, ${getRandomNumber()}, 0.9)`

    // Maybe repurpose into some kind of cubeFace text rememberer?
    // Can use memory router for cubeText links
    const [randomColor, setRandomColor] = createSignal(getRandomColor())

    // It'd be cool if after clicking on a link i.e. 'resume' it enlarged that particular face of the cube and went into a different view. We could use the solid router to control this behavior

    const handleLinkClick = (face: string): void => {
        // setRandomColor(getRandomColor())
        console.log('hello!', face)
    }

    return (
        <div class={styles.cube}>
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
