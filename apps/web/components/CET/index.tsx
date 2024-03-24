
function CET(props: { cet?: string, total?: string}): JSX.Element {
    return (
        <div className="w-full mx-2 border-y border-woovi-border mt-5 pr-3">
        <div className="flex justify-between py-3 items-center">
           <span className="text-woovi-text-color text-sm ">
            CET: {props.cet || "0,5%"}
           </span>
           <span className="text-woovi-text-color font-medium">
            Total: {props.total || "R$ 30.000,00"}
           </span>
        </div>
      </div>
    )
};

export default CET;