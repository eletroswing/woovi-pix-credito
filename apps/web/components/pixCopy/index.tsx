import { useState } from 'react';
import Copy from "@web/components/icons/copy"
import Check from "@web/components/icons/check"
import { CopyToClipboard } from 'react-copy-to-clipboard';

function Pix(props: { qrBase64: string, qrValue: string, expiresAt: string }): JSX.Element {
    const [copied, setCopied] = useState(false);

    return (
        <div className="mt-4 w-full flex flex-col items-center justify-center">
            <img alt="pix qr" src={props.qrBase64} className="aspect-square w-1/2 md:3/4 rounded-md border-2 border-woovi-green" />
            {
                copied ? (
                    <button className="w-[65%] bg-woovi-green text-[#fff] text-sm rounded-md mx-4 py-2 font-sans mt-3 flex justify-center">
                        Copiado
                        <Check width={20} />
                    </button>
                ) : (
                    <CopyToClipboard text={props.qrValue}
                        onCopy={() => {
                            setCopied(true);
                            setTimeout(() => {
                                setCopied(false);
                            }, 1500);
                        }}>
                        <button className="w-[65%] bg-woovi-purple text-[#fff] text-sm rounded-md mx-4 py-2 font-sans mt-3 flex justify-center">
                            Clique para copiar o QR CODE
                            <Copy width={20} />
                        </button>
                    </CopyToClipboard>
                )
            }
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

export default Pix;