# Devtinder APIs

authRouter

- POST /signup
- POST /login
- POST /logout

profileRouter

- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password // Forgot Password API

connectionRequestRouter

- POST /request/send/interested/:userId
- POST /request/send/rejected/:userId
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:userId

- GET /user/connections
- GET /user/requests
- GET /user/feed - Gets you the profiles of other users of the platform

Status: ignore, interested, accepted, rejected
