function CustomInput(props: { name: string, format?: string, title: string, alt: string }): JSX.Element {
    return (
        <div className="w-full rounded-md border border-woovi-border relative mt-2">
            <span className="bg-[#fff] absolute text-woovi-text-color text-xs -top-2 left-3 font-semibold">
                {props.title}
            </span>
            <input type="text" name={props.name} required className="rounded-md w-full h-full pl-3 py-3" pattern={props.format} title={props.alt} />
        </div>
    )
}

function FakeInput(props: { title: string, text: string }): JSX.Element {
    return (
        <div className="w-full rounded-md border border-woovi-border relative mt-2 py-3">
            <span className="bg-[#fff] absolute text-woovi-text-color text-xs -top-2 left-3 font-semibold">
                {props.title}
            </span>
            <span className="rounded-md w-full h-full pl-3 ">
                {props.text}
            </span>
        </div>
    )
}

function CreditInfo(props: { expiresAt: string }): JSX.Element {
    return (
        <div className="mt-4 w-full flex flex-col items-center justify-center">
            <div className="w-[95%] text-woovi-text-color font-medium">
                <CustomInput name={"name"} title="Nome Completo" alt="Seu nome completo" />
                <CustomInput name={"cpf"} title="CPF" format="\d{3}\.\d{3}\.\d{3}-\d{2}" alt="Seu CPF" />
                <CustomInput name={"card"} title="Número do Cartão" alt="Número do seu cartão " />
                <div className="flex gap-4">
                    <CustomInput name={"due"} title="Vencimento" alt="Vencimento do cartão" format="\d{2}\/\d{2}\" />
                    <CustomInput name={"cvv"} title="CVV" alt="CVV" format="\d{3}\" />
                </div>
                <FakeInput title="Parcelas" text="1x de R$ 15.000,00" />
            </div>
            <button className="w-[95%] bg-woovi-purple text-[#fff] text-sm rounded-md mx-4 py-2 font-sans mt-3 flex justify-center">
                Pagar
            </button>
            <div className="w-full flex flex-col justify-center items-center mt-4 select-none">
                <span className="text-xs text-woovi-border-dark font-medium">
                    Prazo de pagamento:
                </span>
                <span className="text-sm text-woovi-text-color font-extrabold">
                    {props.expiresAt}
                </span>
            </div>
        </div>
    );
};

export default CreditInfo;