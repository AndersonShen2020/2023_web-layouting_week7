<template>
  <header>
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light">
        <h1 class="me-md-11">
          <RouterLink class="d-flex align-items-center" to="/">
            <img
              class="img-fluid me-lg-5 logo"
              src="@/assets/img/logo.png"
              alt="logo"
            />
            <div class="d-none d-lg-flex align-items-center">
              <p class="fs-13 me-1">7TAO</p>
              <p class="noto-tc-serif fs-17">活動訂票網</p>
            </div>
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
          class="navbar-toggler rounded"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse d-none"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav ms-auto">
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
    <div
      class="collapse navbar-collapse border-t-3"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav ms-3">
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
  </header>
</template>
