 import React from "react";
 import * as LogIn from './LogIn';

 function App() {
     const [signIn, toggle] = React.useState(true);
      return(
          <LogIn.Container>
              <LogIn.SignUpContainer signinIn={signIn}>
                  <LogIn.Form>
                      <LogIn.Title>Create Account</LogIn.Title>
                      <LogIn.Input type='text' placeholder='Name' />
                      <LogIn.Input type='email' placeholder='Email' />
                      <LogIn.Input type='password' placeholder='Password' />
                      <LogIn.Button>Sign Up</LogIn.Button>
                  </LogIn.Form>
              </LogIn.SignUpContainer>

              <LogIn.SignInContainer signinIn={signIn}>
                   <LogIn.Form>
                       <LogIn.Title>Sign in</LogIn.Title>
                       <LogIn.Input type='email' placeholder='Email' />
                       <LogIn.Input type='password' placeholder='Password' />
                       <LogIn.Anchor href='#'>Forgot your password?</LogIn.Anchor>
                       <LogIn.Button>Sigin In</LogIn.Button>
                   </LogIn.Form>
              </LogIn.SignInContainer>

              <LogIn.OverlayContainer signinIn={signIn}>
                  <LogIn.Overlay signinIn={signIn}>

                  <LogIn.LeftOverlayPanel signinIn={signIn}>
                      <LogIn.Title>Welcome Back!</LogIn.Title>
                      <LogIn.Paragraph>
                          To keep connected with us please login with your personal info
                      </LogIn.Paragraph>
                      <LogIn.GhostButton onClick={() => toggle(true)}>
                          Sign In
                      </LogIn.GhostButton>
                      </LogIn.LeftOverlayPanel>

                      <LogIn.RightOverlayPanel signinIn={signIn}>
                        <LogIn.Title>Hello, Friend!</LogIn.Title>
                        <LogIn.Paragraph>
                            Enter Your personal details and start journey with us
                        </LogIn.Paragraph>
                            <LogIn.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </LogIn.GhostButton> 
                      </LogIn.RightOverlayPanel>
  
                  </LogIn.Overlay>
              </LogIn.OverlayContainer>

          </LogIn.Container>
      )
 }

 export default App;