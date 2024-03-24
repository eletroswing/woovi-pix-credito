import Header from "@web/components/header";
import Footer from "@web/components/footer";
import Stepper from "@web/components/verticalStepper";
import CET from "@web/components/CET";
import CreditInfo from "@web/components/credit";

function Credit() {
  return (
    <main className="mt-6 flex flex-col w-full items-center">
      <div className="lg:w-1/3 md:w-1/2 w-full px-3">
        <Header>Agora, pague as parcelas restantes no cartão</Header>
        <CreditInfo expiresAt="15/12/2021 - 08:17" />
        <Stepper items={
          [
            { title: "1ª entrada no Pix", subtitle: "R$ 15.000,00 ", filled: true },
            { title: "2ª no cartão", subtitle: "R$ 15.000,00 ", next: true},
          ]
        } />
        <CET />
        <Footer>123456789</Footer>
      </div>
    </main>
  )
}

export default Credit
