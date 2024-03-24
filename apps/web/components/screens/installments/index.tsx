import { useState } from "react";

import Header from "@web/components/header"
import List from "@web/components/listing"
import Footer from "@web/components/footer";

function Installments() {
  const [selectedValue, setSelectedValue] = useState<string>('');

    const handleRadioChange = (value: string) => {
        setSelectedValue(value);
    };

  return (
    <main className="mt-6 flex flex-col w-full items-center">
      <div className="lg:w-1/3 md:w-1/2 w-full">
        <Header />
        <List title="Pix" name="default-group" onChange={handleRadioChange} currentValue={selectedValue} items={
          [
            { title: "R$ 30.000,00", value: "1", pre_title: "1x", subtitle: "Ganhe 3% de CashBack", enhanced: true, badge: { content: "de volta no seu Pix", pre_content: "🤑 R$ 300" } }
          ]} />
        <List title="Pix Parcelado" name="default-group" onChange={handleRadioChange} currentValue={selectedValue} items={
          [
            { title: "R$ 30.000,00", pre_title: "2x", subtitle: "Total: R$ 300,00.", value: "2"},
            { title: "R$ 30.000,00", pre_title: "3x", subtitle: "Total: R$ 300,00.", value: "3"},
            { title: "R$ 30.000,00", pre_title: "4x", subtitle: "Total: R$ 300,00.", value: "4"},
            { title: "R$ 30.000,00", pre_title: "5x", subtitle: "Total: R$ 300,00.", value: "5"},
            { title: "R$ 30.000,00", pre_title: "6x", subtitle: "Total: R$ 300,00.", value: "6"},
         ]} />
         <Footer />
      </div>
    </main>
  )
}

export default Installments
