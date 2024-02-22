<script>
  let firstName = "Sushanth";
  let lastName = "Kummitha";

  let combinedName = `${firstName} ${lastName}`; // This is not reactive => means it will not update when firstName or lastName changes

  // reactive declaration
  $: fullName = `${firstName} ${lastName}`; // This is reactive => means it will update when firstName or lastName changes

  console.log(combinedName);
  console.log(fullName); // this is not reactive => means it will not log the fullName when firstName or lastName changes

  // reactive statement
  $: console.log(fullName); // this is reactive => means it will log the fullName when firstName or lastName changes

  $: {
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  }

  const changeName = () => {
    if (firstName === "Sushanth") {
      firstName = "Phaneendra";
      lastName = "Naga";
    } else {
      firstName = "Sushanth";
      lastName = "Kummitha";
    }
  };

  let volume = 10;

  const incrementVolume = () => {
    volume += 2;
  };

  const decrementVolume = () => {
    volume -= 2;
  };

  $: if (volume < 0) {
    alert("Volume cannot be less than 0");
    volume = 0;
  } else if (volume > 20) {
    alert("Volume cannot be more than 20");
    volume = 20;
  }
</script>

<main>
  <h1>{firstName} {lastName}</h1>
  <h2>{combinedName}</h2>
  <h2>{fullName}</h2>
  <button on:click={changeName}>Change Name</button>
  <br />
  <h1>Volume: {volume}</h1>
  <button on:click={incrementVolume}>Increase Volume</button>
  <button on:click={decrementVolume}>Decrease Volume</button>
</main>
