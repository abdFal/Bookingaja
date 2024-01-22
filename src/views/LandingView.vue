<template>
  <NavigationBar />
  <div class="about">
    <div class="container-fluid">
      <div
        class="landing-cover position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary"
      >
        <div class="col-md-6 p-lg-5 mx-auto my-5">
          <h1 class="display-3 fw-semibold text-white">
            Take an <span class="fw-bold">incredible</span> vacation
          </h1>
          <h3 class="fw-thin text-light mb-3">
            Feel awesome in your own room!
          </h3>
        </div>
        <div class="product-device shadow-sm d-none d-md-block"></div>
        <div
          class="product-device product-device-2 shadow-sm d-none d-md-block"
        ></div>
        <!-- nav for booking -->
        <nav
          class="navbar navbar-booking navbar-expand-lg navbar-light bg-light"
        >
          <div class="container">
            <a class="navbar-brand" href="#">Travel Booking</a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <form class="d-flex fw-lead py-1">
              <div class="me-2">
                <label for="destination" class="form-label fs-6"
                  >Destination</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="destination"
                  placeholder="Enter city or region"
                />
              </div>
              <div class="me-2">
                <label for="checkInDate" class="form-label">Check-in</label>
                <input type="date" class="form-control" id="checkInDate" />
              </div>
              <div class="me-2">
                <label for="checkOutDate" class="form-label">Check-out</label>
                <input type="date" class="form-control" id="checkOutDate" />
              </div>
              <div class="me-2">
                <label for="guests" class="form-label">Guests</label>
                <select class="form-select" id="guests">
                  <option value="1">1 guest</option>
                  <option value="2" selected>2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                </select>
              </div>
              <button class="btn btn-dark" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>
      <div class="best-hotels-section px-3 mt-5 pt-3 mx-auto">
        <div class="best-hotels-title text-center w-50 mx-auto">
          <h1 class="fw-bold">
            Rasakan nyamannya kebersamaan dalam menikmati liburan bersama
          </h1>
          <p>
            Explore many hotels which has a good rating and feel comfortable
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "LandingView",
  components: { NavigationBar },
};
</script>
