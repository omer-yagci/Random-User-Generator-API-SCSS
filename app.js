const button = document.querySelector("#btn");
const personName = document.querySelector(".name");
const personLastName = document.querySelector(".last-name");
const personAddress = document.querySelector(".location");
const personPhone = document.querySelector(".phone");
const conctactMail = document.querySelector(".email");
const innerContainer = document.querySelector(".inner-container");

button.addEventListener("click", (id) => {
  const getPersonData = async () => {
    try {
      let url = `https://randomuser.me/api`;
      let res = await fetch(url);
      let data = await res.json();
      createPersonData(data);
    } catch (error) {
      alert(error);
    }
  };

  const createPersonData = (person) => {
    let name = person.results[0].name.first;
    let lastName = person.results[0].name.last;
    let address = person.results[0].location.country;
    let img = person.results[0].picture.medium;
    let { phone, email } = person.results[0];

    // Satır 27 ile 28,29 aynı işlevi görüyor...

    // let phone = person.results[0].phone;
    // let email = person.results[0].email;
    console.log(person);

    innerContainer.innerHTML = `
     <img  src=${img} alt="person-img" />
    <p>
          <i class="fa-solid fa-user"></i> Name :
          <span class="name"> ${name}</span>
        </p>
        <p>
          <i class="fa-solid fa-user"></i> LastName :
          <span class="last-name"> ${lastName}</span>
        </p>
        <p>
          <i class="fa-solid fa-magnifying-glass-location"></i> Location :
          <span class="location"> ${address} </span>
        </p>
        <p>
          <i class="fa-solid fa-phone-flip"></i>Phone :
          <span class="phone">${phone}</span>
        </p>
        <p>
          <i class="fa-solid fa-envelope"></i>Email :
          <span class="email">${email}</span>
        </p>
      </section>
      
    `;
  };

  getPersonData();
});
