import { createSignal, onCleanup, onMount, type Component } from 'solid-js'
import { RotatingCube } from './components/RotatingCube/rotating-cube'
import styles from './App.module.css'
import { RotatingCubeWrapper } from './components/RotatingCubeWrapper/rotating-cube-wrapper'

const App: Component = () => {
    const [rotation, setRotation] = createSignal({ x: 0, y: 0 })

    const handleRotationChange = (newRotation: { x: number; y: number }) => {
        setRotation(newRotation)
    }

    return (
        <div class={styles.App}>
            <RotatingCubeWrapper onRotationChange={handleRotationChange}>
                <RotatingCube rotation={{ x: rotation().x, y: rotation().y }} />
            </RotatingCubeWrapper>
            <div class={styles.flatCubeBody}>
                Other section/component here. It'd be cool to have a flat
                representation of the cube here for easy navigation
            </div>
        </div>
    )
}

export default App
