export default function apiMiddleware({ dispatch, getState }) {
  console.log('Middleware injected: API');
  return (next) => (action) => { next(action) }
}
