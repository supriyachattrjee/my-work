// https://github.com/masai-school/api-mocker/

class user {
  isvalidusern(u) {
    return u.includes("@") ? false : true;
  }
  isvalidpass(p) {
    return p.length < 8 ? false : true;
  }

  async signup(n, e, p, u, m, d) {
    let Authentication = this.isvalidusern(u) && this.isvalidpass(p);

    if (Authentication) {
      this.name = n;
      this.email = e;
      this.password = p;
      this.username = u;
      this.mobile = m;
      this.description = d;

      let store = await fetch(
        `https://masai-api-mocker.herokuapp.com/auth/register`,
        {
          method: "POST",
          body: JSON.stringify(this),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await store.json();
      console.log(data);
    } else {
      alert("plese type minimum 8 digit password and username without @");
    }
  }

  async login(u, p) {
    let credential = {
      username: u,
      password: p,
    };

    let res = fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method: "POSt",
      body: JSON.stringify(credential),
      headers: {
        "Content-Type": "application-json",
      },
    });
    const data = await res.json();
    if (data.error == true) {
      alert("plese type your correct username and password");
    } else {
      return data;
    }
  }
}

let users = new user();

let Register = () => {
  let form = document.querySelector("#Signup");

  let name = form.name.value;
  let email = form.email.value;
  let password = form.password.value;
  let username = form.username.value;
  let mobile = form.mobile.value;
  let description = form.description.value;
  let res = users.signup(name, email, password, username, mobile, description);
};

let Login = async () => {
  let form = document.querySelector("#Login");
  let username = form.login - username.value;
  let password = form.login - password.value;

  let { token } = await users.login(username, password);
  getProfile(username, token);
};

const getProfile = async (u, t) => {
  let res = await fetch(`https://masai-api-mocker.herokuapp.com/user/${u}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      // 'Content-Type': 'application/json'
    },
  });

  let data = await res.json();

  console.log(data);
};
