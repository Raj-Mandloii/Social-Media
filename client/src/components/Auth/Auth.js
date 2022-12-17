import React, { useState } from 'react'
import { Avatar, Button, Paper, Grid, Typography, Container, TextField } from '@material-ui/core'
import { LockOutlined } from '@material-ui/icons';
import useStyles from "./styles.js"
import Input from './Input.js';

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [isSignup, setIsSignup] = useState(false)
  const classes = useStyles();

  const handleSubmit = () => {

  }
  const handleChange = () => {

  }
  const switchMode = () => {
    setIsSignup((prev) => !prev);
      handleShowPassword(false)
  }
  const handleShowPassword = () => setShowPassword((prev) => !prev)
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlined />
        </Avatar>
        <Typography variant='h5'>{isSignup ? "Sign Up" : "Sign In"}</Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignup && (
              <>
                <Input name='firstname' label="First Name" handleChange={handleChange} autoFocus half />
                <Input name='firstname' label="Last Name" handleChange={handleChange} half />

              </>
            )}
            <Input name="Email" label={"Email Address"} handleChange={handleChange} type="email" />
            <Input name="Password" label={"Password"} handleChange={handleChange} type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />
            {isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" />}
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit}>
              {isSignup ? "Sign Up" : "Sign In"}
            </Button>
            <Grid container justifyContent='flex-end'>
              <Grid item >
                <Button onClick={switchMode}>
                  {isSignup ? "Already have an account" : "Dont't have an account Sign Up"}
                </Button>
              </Grid>
            </Grid>
          </Grid>

        </form>

      </Paper>

    </Container>
  )
}

export default Auth