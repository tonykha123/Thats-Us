import { setUser } from './slices/user'
import store from './store'

export async function cacheUser(useAuth0) {
  const state = store.getState()

  // TODO: call the useAuth0 and destructure:
  const {isAuthenticated, getAccessTokenSilently, user} = useAuth0()
  // isAuthenticated, getAccessTokenSilently and user

  if (isAuthenticated && !state?.token) {
    const accessToken = await getAccessTokenSilently()
    try {
      const userToSave = {
        auth0Id: user.sub,
        email: user.email,
        token: accessToken,
      }

      store.dispatch(setUser(userToSave))
    } catch (err) {
      console.error(err)
    }
  }
}
