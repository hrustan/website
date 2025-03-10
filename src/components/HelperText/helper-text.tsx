import { Show, type Component } from 'solid-js'
import styles from './helper-text.module.css'

type HelperTextProps = {
    visible: boolean
    text: string
}

export const HelperText: Component<HelperTextProps> = (props) => {
    return (
        <div class={styles.helperText}>
            <Show when={props.visible}>
                <p
                    class={`${styles.helperText} ${styles.xxlarge} ${styles.px5}`}
                >
                    {props.text}
                </p>
            </Show>
        </div>
    )
}
