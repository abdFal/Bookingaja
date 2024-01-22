<template>
  <header>
    <div class="px-3 py-2 text-bg-dark border-bottom">
      <div class="container-fluid">
        <div
          class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
        >
          <a
            href="/"
            class="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
          >
            <img src="../assets/logohotel.png" alt="" width="50" /><span
              class="apptitle"
              >Bookingaja</span
            >
          </a>

          <ul
            class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small"
          >
            <li>
              <router-link to="landing" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#home" />
                </svg>
                <font-awesome-icon icon="fa-solid fa-house" />
                Home
              </router-link>
            </li>
            <li>
              <a href="#" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#speedometer2" />
                </svg>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#table" />
                </svg>
                Orders
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#grid" />
                </svg>
                Products
              </a>
            </li>
            <li>
              <a href="#" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#people-circle" />
                </svg>
                Customers
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="px-3 py-2">
      <div class="container-fluid d-flex flex-wrap justify-content-center">
        <form class="col-12 col-lg-auto mb-2 mb-lg-0 me-lg-auto" role="search">
          <input
            type="search"
            class="form-control"
            placeholder="Mau Kemana Hari Ini?..."
            aria-label="Search"
          />
        </form>

        <div class="text-end">
          <button type="button" class="btn btn-light btn-sm text-dark me-2">
            Login
          </button>
          <button type="button" class="btn btn-dark btn-sm">Sign-up</button>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavigationBar",
};
</script>

<style>
.navbar-brand {
  font-size: 1.25rem;
  font-weight: 500;
}
.nav-link {
  color: #fff;
  font-size: 0.75rem;
  padding: 0.5em 1em;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: all 0.8s ease;
}

.nav-link:hover {
  color: white !important;
}
</style>
