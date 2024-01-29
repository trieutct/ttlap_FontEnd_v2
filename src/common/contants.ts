export const FORM_VALIDATION = {
  textMinLength: 3,
  textMaxLength: 255,
  nameMaxLength: 64,
  codeMaxLength: 10,
  textAreaMaxLength: 2000,
  passwordMinLength: 8,
  numberRegExp: /^[0-9]+$/,
  phoneRegExp: /^(((\+)84)|0)(3|5|7|8|9)([0-9]{3,13})/,
  nameRegExp: /^([^!@`~#$:%^*&().<>?\\/\\+|=]+?)$/,
  specialCharacters: /[~`!@#$%^&*()+={}[\];:'"<>.,/\\?-_]/g,
  codeRegExp: /^(([^~`!@#$%^&*()+={}[\];:'"<>.,/\\?-_\s]|[A-Z])+?)$/g, //does not match special characters, space
  intPattern: /^\d+?$/,
  floatPattern: /^\d+(\.\d{0,2})?$/,
  tenantMaxLength: 30,
};

export const Regex = {
  EMAIL:
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  NAME: /^[^[\]\\|'";:/?.>,<)(_=+!@#$%^&*`~0-9-]+$/,
  PASSWORD: /^(?=.*[a-zA-z])(?=.*\d).{8,}$/,
  COLOR: /^#(?:[0-9a-fA-F]{3}){1,2}$/,
  TIME: /^(([0-1]\d{0,1})|(2[0-3]{0,1})):[0-5]\d{0,1}$/,
  URL: /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/,
};


export const MESSAGE_ERROR={
    REQUIRE:'Không được để trống',
    REGEX_EMAIL:'Email không phù hợp',
    REGEX_PASSWORD:'Mật khẩu phải có ít nhất 1 số',
    MINLEGHT_PASSWORD:'Mật khẩu tối thiểu '+FORM_VALIDATION.passwordMinLength+' ký tự',
    MAXLEGHT_PASSWORD:'Mật khẩu không quá '+FORM_VALIDATION.textMaxLength+' ký tự',
}
