import WooviIcon from "@web/components/icons/woovi"

function Header(props: { children?: string }): JSX.Element {
    return (
        <header className="w-full flex flex-col justify-center items-center">
            <WooviIcon className="text-woovi-logo-green" width={120} />
                <h1 className="text-woovi-text-color font-bold text-wrap w-2/3 text-xl text-center">{props.children || "Olá, como você quer pagar?"}</h1>
        </header>
    )
};

export default Header;