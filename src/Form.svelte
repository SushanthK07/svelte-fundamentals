<script>
  const formValues = {
    name: "",
    email: "",
    password: "",
    dateOfBirth: "",
    country: "",
    married: "",
    experience: 0,
    bio: "",
    favColor: "#00ff66",
    jobLocations: [],
    shareData: false,
    skills: [],
  };

  const submitForm = (event) => {
    // event.preventDefault();
    console.log(formValues);
  };
</script>

<main>
  <form action="post" on:submit|preventDefault={submitForm}>
    <label for="name">Name:</label>
    <input type="text" id="name" name="name" bind:value={formValues.name} />
    <br />
    <!-- <label for="email">Email:</label>
    <input type="email" id="email" name="email" bind:value={formValues.email} />
    <br />
    <label for="password">Password:</label>
    <input
      type="password"
      id="password"
      name="password"
      bind:value={formValues.password}
    /> -->
    <br />
    <label for="dateOfBirth">Date of Birth:</label>
    <input
      type="date"
      id="dateOfBirth"
      name="dateOfBirth"
      bind:value={formValues.dateOfBirth}
    />
    <br />
    <label for="country">Country:</label>
    <select name="country" id="country" bind:value={formValues.country}>
      <option value="">Select</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="UK">UK</option>
    </select>
    <br />
    <div class="flex">
      <label for="married">Married:</label>
      <input
        type="radio"
        id="marriedYes"
        name="married"
        value="yes"
        bind:group={formValues.married}
      />
      <label for="marriedYes">Yes</label>
      <input
        type="radio"
        id="marriedNo"
        name="married"
        value="no"
        bind:group={formValues.married}
      />
      <label for="marriedNo">No</label>
    </div>
    <br />
    <label for="experience">Experience</label>
    <input
      type="number"
      name="experience"
      id="experience"
      bind:value={formValues.experience}
    />
    <br />
    <label for="bio">Bio:</label>
    <textarea
      name="bio"
      id="bio"
      cols="30"
      rows="5"
      bind:value={formValues.bio}
    />
    <br />
    <label for="favColor">Favorite Color:</label>
    <input
      type="color"
      name="favColor"
      id="favColor"
      bind:value={formValues.favColor}
    />
    <br />
    <label for="jobLocations">Job Locations:</label>
    <select
      name="jobLocations"
      id="jobLocations"
      multiple
      bind:value={formValues.jobLocations}
    >
      <option value="">Select</option>
      <option value="India">India</option>
      <option value="USA">USA</option>
      <option value="UK">UK</option>
    </select>
    <br />
    <div class="flex">
      <input
        type="checkbox"
        name="shareData"
        id="shareData"
        bind:checked={formValues.shareData}
      />
      <label for="shareData">Share Data</label>
    </div>
    <br />
    <label for="skills">Skills:</label>
    <div class="flex">
      <input
        type="checkbox"
        name="html"
        id="html"
        value="HTML"
        bind:group={formValues.skills}
      />
      <label for="html">HTML</label>
    </div>
    <div class="flex">
      <input
        type="checkbox"
        name="css"
        id="css"
        value="CSS"
        bind:group={formValues.skills}
      />
      <label for="css">CSS</label>
    </div>
    <div class="flex">
      <input
        type="checkbox"
        name="js"
        id="js"
        value="JS"
        bind:group={formValues.skills}
      />
      <label for="js">JS</label>
    </div>
    <br />
    <input type="submit" value="Submit" />
    <input type="reset" value="Reset" />
  </form>
  <br />
  <div class="formValuesContainer">
    <pre>{JSON.stringify(formValues, null, 4)}</pre>
  </div>
</main>

<style>
  main {
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  .flex {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .formValuesContainer {
    width: 50%;
  }

  div > input {
    margin: 0;
  }
</style>
