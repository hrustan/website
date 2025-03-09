import type { Component } from 'solid-js'

import styles from './App.module.css'
import { RotatingCube } from './components/RotatingCube/rotating-cube'

const App: Component = () => {
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                {/* <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    class={styles.link}
                    href="https://github.com/solidjs/solid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Solid
                </a> */}
                <RotatingCube />
            </header>
        </div>
    )
}

export default App
