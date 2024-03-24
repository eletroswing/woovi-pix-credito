import Check from "@web/components/icons/check";

function Stepper(props: { items: { title: string, subtitle: string, filled?: boolean, next?: boolean }[] }): JSX.Element {
    return (
        <div className="w-full flex flex-col select-none mt-4">
            <ul className="flex flex-col items-start w-full">
                {
                    props.items.map((item: { title: string, subtitle: string, filled?: boolean, next?: boolean }, index: number) => {
                        return (
                            <li key={JSON.stringify(item)} className={`w-full flex ${index !== 0 && "mt-3"} items-center content-center justify-center ${index !== props.items.length - 1 && "connect"} text-woovi-border-dark`}>
                                <div className={`rounded-full w-4 h-4 text-[#fff] ${item.filled ? 'bg-woovi-green border-woovi-green border' : item.next ? 'border-woovi-green border-2' : 'border-woovi-border-dark border'}`}>
                                    {
                                        item.filled && (
                                            <Check />
                                        )
                                    }
                                </div>
                                <div className="w-full flex justify-between">
                                   <span className="text-woovi-text-color ml-2 font-medium">
                                       {item.title}
                                   </span>
                                   <span  className="text-woovi-text-color ml-2 font-bold">
                                    {item.subtitle}
                                    </span>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Stepper;
