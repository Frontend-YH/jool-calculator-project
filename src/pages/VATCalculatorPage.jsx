import VATCalculator from "../components/VatCalculator";

function VATCalculatorPage() {

  const pTitle2 = {fontSize: "28px", fontWeight: "bold", color: "red", fontFamily: "Arial, Verdana"};
  const pTitle = {fontSize: "38px", fontWeight: "bold", color: "green", fontFamily: "Arial, Verdana"};

  return (
    <>
      <div>

      <p style={pTitle}>Avancerad utan props:</p><br/>
        <VATCalculator lang="swedish"/><br/><br/>

        <p style={pTitle2}>Simpel (gui = "0") med props:</p>
        <p style={{color: "red"}}>Följande exempel har: &lt;VATCalculator gui="0" totalPrice={1000} percVAT={1.25}/&gt;</p><br/>
        <VATCalculator gui="0" totalPrice={1000} percVAT={1.25}/>

        </div>


    </>
  )
}

export default VATCalculatorPage;





        