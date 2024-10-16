from router.auth import router as auth_router
from router.user import router as user_router

class Router:
    def __init__(self, app):
        self.app = app
        self.app.include_router(auth_router)
        self.app.include_router(user_router)

    def __call__(self):
        return self.app
