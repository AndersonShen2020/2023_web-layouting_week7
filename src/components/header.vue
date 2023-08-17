<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <h1 class="me-md-5">
          <RouterLink class="d-flex align-items-center" to="/">
            <img
              class="img-fluid me-lg-3 logo"
              src="@/assets/img/logo.png"
              alt=""
            />
            <p class="fs-2 d-flex align-items-center d-lg-block d-none">
              7TAO<span class="noto-tc-serif fs-6">活動訂票網</span>
            </p>
          </RouterLink>
        </h1>
        <div class="input-group w-auto">
          <input
            type="search"
            class="form-control"
            placeholder="探索活動"
            aria-label="探索活動"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-primary btn-search"
            type="button"
            id="button-addon2"
          >
            <i class="icofont-search-1"></i>
          </button>
        </div>
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
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <RouterLink class="nav-link" aria-current="page" to="/"
                ><i class="icofont-ui-file"></i> REGISTER</RouterLink
              >
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link" to="/"
                ><i class="icofont-ui-user"></i> LOGIN</RouterLink
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>
