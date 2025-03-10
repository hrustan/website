import { Component } from 'solid-js'

export const SmileyFace: Component = () => {
    return (
        <svg
            viewBox="0 0 200 200"
            width="50"
            height="50"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle
                cx="100"
                cy="100"
                fill="yellow"
                r="78"
                stroke="black"
                stroke-width="3"
            />
            <g class="eyes">
                <circle cx="61" cy="82" r="12" />
                <circle cx="127" cy="82" r="12" />
            </g>
            <path
                d="m136.81 116.53c.69 26.17-64.11 42-81.52-.73"
                style="fill:none; stroke: black; stroke-width: 3;"
            />
        </svg>
    )
}
