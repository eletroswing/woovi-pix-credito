import WooviIcon from "@web/components/icons/woovi"
import ShieldCheck from "@web/components/icons/shield-check"

function Footer(props: { children?: string }): JSX.Element {
    return (
        <>
            {
                props.children && (
                    <div className="w-full flex flex-col justify-center items-center mt-4 select-none">
                        <span className="text-xs text-woovi-border-dark font-medium">
                            Identificador:
                        </span>
                        <span className="text-sm text-woovi-text-color font-extrabold">
                            {props.children}
                        </span>
                    </div>
                )
            }
            <div className="w-full flex justify-center my-4 items-center select-none">
                <ShieldCheck className="text-woovi-border-dark" width={15} />
                <span className="text-xs text-woovi-border-dark font-medium">
                    Pagamento 100% seguro via:
                </span>
                <WooviIcon className="text-woovi-border-dark" width={45} />
            </div>
        </>
    )
};

export default Footer;