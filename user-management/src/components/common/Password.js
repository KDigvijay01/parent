import React from "react";
import IconButton from "@material-ui/core/IconButton";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormHelperText from "@material-ui/core/FormHelperText";
import { useTranslation } from "react-i18next";

export default function Password(props) { 
  const { t } = useTranslation(); 
  const [values, setValues] = React.useState({
    password : "",
    showPassword: false
  });

  const handleChange = prop => event => {
    setValues({ ...values, password: event.target.value });
    if (props.onChange) {
      props.onChange(prop, event.target.value);
    }
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div>
      <FormControl
        variant="outlined"
        fullWidth
        onBlur={props.onBlur}
        onFocus={props.onFocus}
      >
        <InputLabel htmlFor="outlined-adornment-password" error={props.isError}>
          {"Password"}
        </InputLabel>
        <OutlinedInput
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange(props.name || "password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={props.name === "Confirm Password" ? 120 : 70}
          name={props.name || 'password'}
          error={props.isError}
        />
        {props.name === 'password' && 
        <FormHelperText id="outlined-adornment-password-text" error={props.isError}>{props.isError ? t('invalid-password') : ''}</FormHelperText>
        }
        {props.name === 'confirmPassword' && 
        <FormHelperText id="outlined-adornment-password-text" error={props.isError}>{props.isError ? t('passwords-dont-match') : ''}</FormHelperText>
        }
      </FormControl>
    </div>
  );
}
