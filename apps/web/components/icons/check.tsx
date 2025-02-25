const Icon = (props: any): JSX.Element => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="m6 12 4.243 4.243 8.484-8.486"
        />
    </svg>
)
export default Icon
