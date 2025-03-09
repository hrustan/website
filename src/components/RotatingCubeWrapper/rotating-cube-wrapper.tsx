import {
    createSignal,
    JSXElement,
    onCleanup,
    onMount,
    type Component,
} from 'solid-js'
import styles from './rotating-cube-wrapper.module.css'

type RotatingCubeWrapperProps = {
    children: JSXElement
    onRotationChange: (rotation: { x: number; y: number }) => void
}

export const RotatingCubeWrapper: Component<RotatingCubeWrapperProps> = (
    props
) => {
    const [rotation, setRotation] = createSignal({ x: 0, y: 0 })
    const [isDragging, setIsDragging] = createSignal(false)
    const [lastMousePosition, setLastMousePosition] = createSignal({
        x: 0,
        y: 0,
    })
    const [velocity, setVelocity] = createSignal({ x: 0, y: 0 })
    let animationFrameId: number

    const handleMouseDown = (event: MouseEvent) => {
        setIsDragging(true)
        setLastMousePosition({ x: event.clientX, y: event.clientY })
    }

    const handleMouseMove = (event: MouseEvent) => {
        if (!isDragging()) return

        const deltaX = event.clientX - lastMousePosition().x
        const deltaY = event.clientY - lastMousePosition().y

        setVelocity({ x: deltaY * 0.3, y: deltaX * 0.3 })
        setRotation((prev) => {
            const newRotation = {
                x: prev.x - deltaY * 0.3,
                y: prev.y + deltaX * 0.3,
            }
            props.onRotationChange(newRotation)
            return newRotation
        })

        setLastMousePosition({ x: event.clientX, y: event.clientY })
    }

    const handleTouchStart = (event: TouchEvent) => {
        setIsDragging(true)
        const touch = event.touches[0]
        setLastMousePosition({ x: touch.clientX, y: touch.clientY })
    }

    const handleTouchMove = (event: TouchEvent) => {
        if (!isDragging()) return

        const touch = event.touches[0]
        const deltaX = touch.clientX - lastMousePosition().x
        const deltaY = touch.clientY - lastMousePosition().y

        setVelocity({ x: deltaY * 0.3, y: deltaX * 0.3 })
        setRotation((prev) => {
            const newRotation = {
                x: prev.x - deltaY * 0.3,
                y: prev.y + deltaX * 0.3,
            }
            props.onRotationChange(newRotation)
            return newRotation
        })

        setLastMousePosition({ x: touch.clientX, y: touch.clientY })
    }

    const handleMouseUpOrLeave = () => {
        setIsDragging(false)
        animationFrameId = requestAnimationFrame(updateRotation)
    }

    const handleTouchEnd = () => {
        setIsDragging(false)
        animationFrameId = requestAnimationFrame(updateRotation)
    }

    const updateRotation = () => {
        setRotation((prev) => {
            const newRotation = {
                x: prev.x - velocity().x,
                y: prev.y + velocity().y,
            }
            props.onRotationChange(newRotation)
            return newRotation
        })

        setVelocity((prev) => ({
            x: prev.x * 0.85,
            y: prev.y * 0.85,
        }))

        if (Math.abs(velocity().x) > 0.01 || Math.abs(velocity().y) > 0.01) {
            animationFrameId = requestAnimationFrame(updateRotation)
        }
    }

    const animateToInitialRotation = () => {
        const targetRotation = { x: -45, y: 45 }
        const duration = 3000
        const startTime = performance.now()

        const animate = (currentTime: number) => {
            const elapsedTime = currentTime - startTime
            const progress = Math.min(elapsedTime / duration, 1)

            const newRotation = {
                x: progress * targetRotation.x,
                y: progress * targetRotation.y,
            }
            setRotation(newRotation)
            props.onRotationChange(newRotation)

            if (progress < 1) {
                requestAnimationFrame(animate)
            }
        }

        requestAnimationFrame(animate)
    }

    onMount(() => {
        animateToInitialRotation()
    })

    onCleanup(() => {
        cancelAnimationFrame(animationFrameId)
    })

    return (
        <div
            class={styles.cubeBody}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            onMouseLeave={handleMouseUpOrLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {props.children}
        </div>
    )
}
