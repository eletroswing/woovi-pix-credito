const Icon = (props: any): JSX.Element => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="currentColor"
            fillRule="evenodd"
            d="M9.293 3.293A1 1 0 0 1 10 3h4a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V9a1 1 0 0 1 .293-.707l5-5ZM14 5h-3v4a1 1 0 0 1-1 1H6v5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1ZM7.414 8H9V6.414L7.414 8ZM19 5a1 1 0 0 1 1 1v12a3 3 0 0 1-3 3H7a1 1 0 1 1 0-2h10a1 1 0 0 0 1-1V6a1 1 0 0 1 1-1Z"
            clipRule="evenodd"
        />
    </svg>
)
export default Icon
