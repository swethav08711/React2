import CardChild from "./CardsChild"

function CardCategory() {
  return (
    <div>
      <CardChild
        color={{ backgroundColor: "cyan" }}
        date="28/10/2020"
        heading="Amazon"
        subheading="Pay"
        devices="Desktop - Mobile"
        url="amazon-brands.svg"
      />
      <CardChild
        color={{ backgroundColor: "yellow" }}
        date="17 Sep 2020"
        heading="Apple"
        subheading="Payment"
        devices="MacOS - Mobile"
        url="apple-brands.svg"
      />
    </div>
  )
}
export default CardCategory
