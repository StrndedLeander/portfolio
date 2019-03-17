<template>
  <div class="contact">
    <p class="contactTitle">Contact</p>
    <div class="container contactOptions">
      <div class="columns">
        <div class="column">
          <button class="button" @click="openEmail">Send E-Mail</button>
        </div>
        <div class="column">
          <p>or</p>
        </div>
        <div class="column form">
          <div class="field">
            <label class="label">Fill out form</label>
            <div class="control">
              <input class="input" type="text" placeholder="Your Name" v-model="name">
            </div>
            <div class="control">
              <input class="input" type="text" placeholder="Your E-Mail Adress" v-model="email">
            </div>
            <div class="control">
              <div class="select">
                <select v-model="websiteUseCase">
                  <option selected>Personal</option>
                  <option>Company</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div class="control" v-if="websiteUseCase === 'Company'">
              <input
                class="input"
                type="text"
                placeholder="Your Companies Name"
                v-model="companyName"
              >
            </div>
            <div class="control" v-if="websiteUseCase === 'Other'">
              <input
                class="input"
                type="text"
                placeholder="Specify Use Case"
                v-model="otherUseCase"
              >
            </div>
            <div class="control">
              <div class="select">
                <select v-model="caseOption">
                  <option selected>Website Creation</option>
                  <option>Website Maintenance</option>
                </select>
              </div>
            </div>
          </div>
          <div class="control">
            <label class="label">Description</label>
          </div>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Give a brief description for what your website is intended and the features it should contain."
              v-model="description"
            ></textarea>
          </div>
          <button class="button is-link" type="submit" @click="sendForm">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      websiteUseCase: "Personal",
      companyName: "",
      otherUseCase: "",
      name: "",
      email: "",
      description: "",
      caseOption: "Website Creation",
      options: {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          Authorization: "Bearer" + config.API_KEY,
          "Content-Type": "application/json"
        },
        url: "https://api.sendgrid.com/v3/mail/send",
        data: {
          personalizations: [
            {
              to: [
                {
                  email: "vandiepen.international@gmail.com"
                }
              ]
            }
          ],
          from: {
            email: this.email
          },
          subject:
            this.name + "-" + this.caseOption + "-" + this.websiteUseCase,
          content: [
            {
              type: "text/plain",
              value: this.description
            }
          ]
        }
      }
    };
  },
  methods: {
    openEmail() {
      window.location.href =
        "mailto:vandiepen.international@gmail.com?subject=Website Creation/Maintenance Request";
    },
    sendForm() {
      if (this.name && this.email) {
        if (this.description) {
          axios(this.options);
        } else {
          alert("Please fill out all the fields.");
        }
      } else {
        alert("Please fill out all the fields.");
      }
    }
  }
};
</script>

<style scoped>
.contactTitle {
  font-size: 110%;
  margin: 17px 0 17px 0;
}

.contact {
  margin: 0 0 0 50px;
  width: 95%;
}

.control {
  margin-bottom: 16px;
  width: 515px;
}

.contactDesc {
  height: 150px;
}

.form {
  margin: 0 153px 0 0;
}
</style>