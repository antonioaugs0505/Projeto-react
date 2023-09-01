import logoReact from "../assets/react.svg"

export default function Principal(){
    
    //Area declarativa
    let altLogoReact = "Logo React"

    return(
        <>
        <section>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, ipsum commodi iste corporis similique tenetur reprehenderit, quaerat maxime dolorem nulla unde excepturi eveniet rerum nemo tempore esse odit praesentium. Eos?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nisi ratione, dolor ullam, consequatur earum asperiores, assumenda consectetur molestiae nulla dolore autem cupiditate eaque corrupti repudiandae quae dolorem blanditiis a.</p>
          <img src={logoReact} alt={altLogoReact} />

        </div>
      </section>
      </>
        
    )
}

