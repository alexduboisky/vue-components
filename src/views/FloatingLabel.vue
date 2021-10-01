<template>
  <div>
    <h1>Floating label</h1>
    <div class="container floating-input-container">
      <label for="name" class="floating-label">
        <input
          type="text"
          id="name"
          placeholder="Name"
          class="floating-input"
        />
        <span class="floating-span">Name</span>
      </label>
      <label for="password" class="floating-label">
        <input
          type="password"
          id="password"
          placeholder="Password"
          class="floating-input"
        />
        <span class="floating-span">Password</span>
      </label>
      <label class="floating-label">
        <textarea
          type="password"
          id="msg"
          class="floating-input"
          placeholder="textarea"
        />
        <span class="floating-span">Message</span>
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.floating-input-container {
  display: flex;
  flex-direction: column;
}
.floating-label {
  margin-bottom: 15px;
  position: relative;
  border-bottom: 2px solid cadetblue;
}
.floating-input,
.floating-textarea {
  width: 100%;
  padding-top: 10px;
  border: none;
  outline: none;
}
.floating-input::placeholder {
  opacity: 0;
}
.floating-textarea::placeholder {
  opacity: 0;
}
.floating-span {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(10px);
  font-size: 10px;
  transition-duration: 0.3s;
}

.floating-label:focus-within > .floating-span,
.floating-input:not(:placeholder-shown) + .floating-span,
.floating-textarea:not(:placeholder-shown) + .floating-span {
  color: cadetblue;
  transform: translateY(-5px);
}
</style>
