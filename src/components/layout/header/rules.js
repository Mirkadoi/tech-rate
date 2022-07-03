import { defineRule } from "vee-validate";

defineRule("email", (value) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }
  // Check if email
  if (!/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/.test(value)) {
    return "This field must be a valid email";
  }

  return true;
});

defineRule("name", (value) => {
  // Field is empty, should pass
  if (!value || !value.length) {
    return true;
  }
  // Check if name
  if (!/^[a-zA-ZЁёА-я]+$/.test(value)) {
    return "This field must be a valid name";
  }

  return true;
});

defineRule("required", (value) => {
  if (!value || !value.length) {
    return "This field is required";
  }
  return true;
});

defineRule("maxLength", (value, [limit]) => {
  // The field is empty so it should pass
  if (!value || !value.length) {
    return true;
  }
  if (value.length > limit) {
    return `This field must be at least ${limit} characters`;
  }
  return true;
});
