import Check from "@web/components/icons/check"

function Item(props: { key: string, title: string, value?: string, name: string, first: boolean, last: boolean, pre_title: string, selected?: boolean, onChange: Function, subtitle: string, enhanced?: boolean, badge?: { content: string, pre_content: string } }): JSX.Element {
    const customName = (Math.random() + 1).toString(36).substring(7);

    return (
        <>
            <div className={`w-full select-none text-woovi-text-color flex flex-col py-3 ${props.selected? "border border-woovi-green bg-woovi-shadow z-10": "border border-woovi-border cursor-pointer"} ${props.first && "rounded-t-md"} ${props.last && "rounded-b-md"}` } onClick={() => props.onChange(props.value)}>
                <div className="flex justify-between mx-3">
                    <span>
                        <b className="mr-1">
                            {props.pre_title}
                        </b>
                        {props.title}
                    </span>
                    <label htmlFor={customName}>
                        <div className={`rounded-full border w-4 h-4 text-[#fff] ${props.selected ? 'bg-woovi-green border-woovi-green' : 'border-woovi-border-dark'}`}>
                            {
                                props.selected && (
                                    <Check />
                                )
                            }
                        </div>
                    </label>
                    <input
                        type="checkbox"
                        className="hidden"
                        name={props.name}
                        id={customName}
                        value={props.value}
                        checked={props.selected}
                        onChange={() => props.onChange(props.value)}
                    />
                </div>
                <span className={`text-xs mx-3 ${props.enhanced ? "text-woovi-green" : "text-woovi-border-dark"}`}>{props.subtitle}</span>
                {
                    props.badge && (
                        <div className={`w-[93%] bg-woovi-purple text-center flex items-center py-[4px] rounded-md mt-1 mx-3 flag ${props.selected ? "text-woovi-shadow": "text-[#fff]"}`}>
                            <span className="text-xs text-[#fff] ml-2">
                                <b className="mr-1 font-bold">
                                    {props.badge?.pre_content}
                                </b>
                                {props.badge?.content}
                            </span>
                        </div>
                    )
                }
            </div>
        </>
    )
}

function Listing(props: { title: string, name: string, currentValue?: string, onChange: Function, items: { title: string, pre_title: string, value?: string, subtitle: string, enhanced?: boolean, badge?: { content: string, pre_content: string } }[] }): JSX.Element {
    return (
        <div className="w-full flex flex-col items-center relative mt-4">
            <div className="bg-woovi-border px-4 text-woovi-text-color font-bold text-xs rounded-full absolute left-5 -top-2 z-20">
                <span>{props.title || "Pix"}</span>
            </div>
            <div className={`w-[95%] rounded-md`}>
                {
                    props.items.map((item: { title: string, pre_title: string, value?: string, subtitle: string, enhanced?: boolean, badge?: { content: string, pre_content: string } }, index: number) => {
                        return (
                            <Item {...item} name={props.name} key={JSON.stringify(item)} first={index === 0} last={props.items.length -1 === index} onChange={props.onChange} selected={props.currentValue === item.value} />
                        )
                    })
                }
            </div>
        </div>
    )
};

export default Listing;